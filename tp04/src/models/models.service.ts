import { Injectable } from '@nestjs/common';
import type { Model as ModelRow, Organisation } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { Model, Task } from './model.js';

/** A row of the Model table with its organisation loaded (`include`). */
type ModelWithOrg = ModelRow & { org: Organisation };

/**
 * TP3 solution: the service, backed by the database, relation included.
 *
 * Five things worth noticing:
 *
 * 1. `toModel`: the boundary between the database and the domain. SQLite has
 *    no union types, `task` is any string; a nullable column comes back as
 *    `null` where the domain says `undefined`; and the organisation is a row
 *    where the API promises a slug. Everything is narrowed here, once.
 *
 * 2. `include: { org: true }` on every read: one query for the models, one
 *    for the organisations. Without it, the natural loop over the models to
 *    fetch each organisation is the N+1 of step 7.
 *
 * 3. `upsert` rather than `create`: TP1's "replace if already present"
 *    behaviour, in a single query. `connectOrCreate` takes care of an
 *    organisation that does not exist yet.
 *
 * 4. Filtering is a `where` clause, nested for the relation: the database
 *    does the work, with an index. This is why that code belonged here.
 *
 * 5. `deleteMany` rather than `delete`: it does not throw when nothing
 *    matches, it returns a count, easy to turn into a boolean.
 */
@Injectable()
export class ModelsService {
  constructor(private readonly prisma: PrismaService) {}

  private toModel(row: ModelWithOrg): Model {
    return {
      id: row.id,
      name: row.name,
      org: row.org.slug,
      task: row.task as Task,
      parameters: row.parameters,
      downloads: row.downloads,
      license: row.license ?? undefined,
    };
  }

  async create(model: Model): Promise<Model> {
    const { org, ...fields } = model;
    const data = {
      ...fields,
      org: {
        connectOrCreate: { where: { slug: org }, create: { slug: org, name: org } },
      },
    };
    const row = await this.prisma.model.upsert({
      where: { id: model.id },
      create: data,
      update: data,
      include: { org: true },
    });
    return this.toModel(row);
  }

  async findAll(filters: { org?: string; task?: Task } = {}): Promise<Model[]> {
    const rows = await this.prisma.model.findMany({
      where: {
        ...(filters.org ? { org: { slug: filters.org } } : {}),
        ...(filters.task ? { task: filters.task } : {}),
      },
      include: { org: true },
      orderBy: { downloads: 'desc' },
    });
    return rows.map((row) => this.toModel(row));
  }

  async findOne(id: string): Promise<Model | null> {
    const row = await this.prisma.model.findUnique({
      where: { id },
      include: { org: true },
    });
    return row ? this.toModel(row) : null;
  }

  async remove(id: string): Promise<boolean> {
    const { count } = await this.prisma.model.deleteMany({ where: { id } });
    return count > 0;
  }

  /** Used by the tests: models first, they point at organisations. */
  async clear(): Promise<void> {
    await this.prisma.model.deleteMany();
    await this.prisma.organisation.deleteMany();
  }
}
