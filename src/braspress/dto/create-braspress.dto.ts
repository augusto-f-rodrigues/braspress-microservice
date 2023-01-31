import {
  IsOptional,
  IsString,
  IsNumber,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBraspressDto {
  @IsString()
  cnpjRemetente: string;

  @IsString()
  cnpjDestinatario: string;

  @IsString()
  @IsOptional()
  cnpjConsignado?: string;

  @IsString()
  modal: 'A' | 'R';

  @IsNumber()
  tipoFrete: 1 | 2 | 3;

  @IsString()
  cepOrigem: string;

  @IsString()
  cepDestino: string;

  @IsNumber()
  vlrMercadoria: number;

  @IsNumber()
  peso: number;

  @IsNumber()
  volumes: number;

  @IsArray()
  @ValidateNested()
  @Type(() => Cubagem)
  cubagem: Cubagem[];
}

class Cubagem {
  @IsNumber()
  comprimento: number;

  @IsNumber()
  largura: number;

  @IsNumber()
  altura: number;

  @IsNumber()
  volumes: number;
}
