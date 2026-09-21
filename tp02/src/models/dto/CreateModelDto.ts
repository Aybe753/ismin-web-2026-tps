import { IsIn, IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";
import type {Task} from "../model.js"

/** A model in the catalogue. */
export interface createModelDto {

  @IsString()
  @IsNotEmpty()
  id!: string;
 
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  org!: string;
  
  @IsIn(['text-generation','translation','image-classification','speech-to-text'])
  @IsNotEmpty()
  task!: Task;

  @IsNumber()
  @IsNotEmpty()
  parameters: number;

  @IsInt()
  @Min(0)
  @IsNotEmpty()
  downloads: number;
  
  @IsString()
  
  license?: string;
}
