import { PartialType } from '@nestjs/mapped-types';
import { CreateBraspressDto } from './create-braspress.dto';

export class UpdateBraspressDto extends PartialType(CreateBraspressDto) {}
