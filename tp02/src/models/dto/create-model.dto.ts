/**
 * The DTO describes the expected shape of a model creation payload.
 *
 * 👉 Step 5: add `class-validator` decorators so that NestJS rejects
 *    invalid input with a 400, before your service is ever called.
 *
 * Constraints to enforce:
 *   id          string, a lowercase slug: letters, digits and dashes
 *   name        non-empty string
 *   org         non-empty string
 *   task        one of the four Task values (step 5 says how to get them as a list)
 *   parameters  number, zero or greater
 *   downloads   integer, zero or greater
 *   license     string, optional
 *
 * Remember: these decorators run at runtime, unlike TypeScript types,
 * which are erased at compile time.
 */
import { Task } from '../model';

export class CreateModelDto {
  id!: string;
  name!: string;
  org!: string;
  task!: Task;
  parameters!: number;
  downloads!: number;
  license?: string;
}
