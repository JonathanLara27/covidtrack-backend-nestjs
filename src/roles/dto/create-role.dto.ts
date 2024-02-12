import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Matches, } from "class-validator";

export class CreateRoleDto {
    @ApiProperty({ example: 'paciente' })
    @IsString()
    @IsNotEmpty()
    @Matches(/^\S*$/, { message: 'El nombre de usuario no debe contener espacios en blanco' })
    name: string;

}
