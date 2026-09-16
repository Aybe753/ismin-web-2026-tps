import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post } from '@nestjs/common';
import { ModelsService } from './models.service.js';
import type { Model } from './model.js';

/**
 * The controller: it translates HTTP ↔ domain. No business logic here.
 *
 * Everything is yours to write: the tests in `test/models.e2e-spec.ts`
 * describe the expected behaviour precisely.
 *
 * Routes to expose:
 *   GET    /models              → list (with ?org= and ?task= filters)
 *   GET    /models/:id          → one model, or 404
 *   POST   /models              → creation, status 201
 *   DELETE /models/:id          → removal, status 204, or 404
 */
@Controller('models')
export class ModelsController {
  constructor(private readonly modelsService: ModelsService) {}


  @Get()
  findAll(): Model[] {
    return this.modelsService.findAll();
  }

  @Get(':id')
  findOne(@Param ('id') id: string): Model{
    const model = this.modelsService.findOne(id);
      if(!model){
          throw new NotFoundException();
      }
    return model;
  }

  @Post()
  @HttpCode(201)
  createPost(@Body() model: createModelDto): Model {
    return this.modelsService.create(model);
  }


  @Delete(':id')
  @HttpCode(204)
  clearOne(@Param ('id') id: string): void {
    if(this.modelsService.findOne(id)){
      this.modelsService.clearOne(id);
    }
    else{
      throw new NotFoundException();
    }
  }

  

  // 👉 Your turn.
}
