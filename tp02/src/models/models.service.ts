import { Injectable, NotFoundException } from '@nestjs/common';
import { ModelZoo } from './model-zoo.js'; 
import { ModelsModule } from './models.module.js';
import { Model } from './model.js';

/** Yours to write. The tests call `clear()` and `create()` directly. */
@Injectable()
export class ModelsService {
    private modelzoo = new ModelZoo();

    clear(): void {
        this.modelzoo = new ModelZoo();
    }

    create(model: Model): Model {
        this.modelzoo.addModel(model);
        return model;
    }

    findAll(): Model[] {
        return this.modelzoo.getAllModels();
    }

    findOne(id: string): Model | undefined{
        const model = this.modelzoo.getModel(id);
        return model;
    }

    clearOne(id: string): void {
        this.modelzoo.clearOne(id);
    }
}
