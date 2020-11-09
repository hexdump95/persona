import { CreateDomicilioDto } from './create-domicilio.dto';
import { PartialType } from "@nestjs/swagger";

export class UpdateDomicilioDto extends PartialType(CreateDomicilioDto) { }