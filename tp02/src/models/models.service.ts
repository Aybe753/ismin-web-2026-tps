import { Injectable } from '@nestjs/common';
import { Model, Task } from './model';

/**
 * The business logic of the catalogue, as a Nest service.
 *
 * It is empty on purpose. It stores nothing itself: hold YOUR ModelZoo from
 * TP1 in a private field, and make every method delegate to it. Yesterday
 * that class lived in a terminal; today it answers HTTP; tomorrow (TP3) this
 * service will talk to a database instead, and ModelZoo will retire. The
 * controller will not notice. That is the point of the layer.
 *
 * ⚠️ This service knows nothing about HTTP: no request, no status code here.
 *    The controller does the translating.
 *
 * `clear` and `create` are not routes: the tests call them to set the stage
 * before each case. Write them first, in step 2. One line each, mostly.
 */
@Injectable()
export class ModelsService {
  /** Adds or replaces a model. 👉 Step 2. */
  create(model: Model): Model {
    throw new Error('create is not implemented yet');
  }

  /**
   * Returns the catalogue's models, filtered when criteria are given.
   *
   * 👉 Step 2: return every model.
   * 👉 Step 6: handle the `org` and `task` filters. ModelZoo already knows
   *    how to filter by each one; combining both is the new part.
   */
  findAll(filters: { org?: string; task?: Task } = {}): Model[] {
    throw new Error('findAll is not implemented yet');
  }

  /**
   * Returns the model matching this identifier, or `undefined`.
   *
   * 👉 Step 3.
   */
  findOne(id: string): Model | undefined {
    throw new Error('findOne is not implemented yet');
  }

  /**
   * Removes a model. Returns `true` if it existed, `false` otherwise.
   *
   * 👉 Step 4: ModelZoo cannot do that yet. Give it a `removeModel(id)` first.
   */
  remove(id: string): boolean {
    throw new Error('remove is not implemented yet');
  }

  /** Starts from an empty catalogue. The tests call it before each case. 👉 Step 2. */
  clear(): void {
    throw new Error('clear is not implemented yet');
  }
}
