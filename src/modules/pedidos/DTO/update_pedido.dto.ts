import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class UpdatePedidoDTO {

  @IsOptional()
  horario: string;
 
  @IsOptional()
  endereco: string;
}