import { IsString, MaxLength, MinLength } from 'class-validator';
import { PostInput } from '../graphql.schema.generated';

export class PostInputDto extends PostInput {
  @IsString()
  @MinLength(1)
  @MaxLength(10000)
  readonly title: string;
}
