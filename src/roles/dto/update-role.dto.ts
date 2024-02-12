import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-role.dto';
import { IsNotEmpty, IsNumber, IsOptional, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
    @ApiProperty({ example: 1 })
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @ApiProperty({ example: 'doctor' })
    @IsNotEmpty()
    @Matches(/^\S*$/, { message: 'El nombre de usuario no debe contener espacios en blanco' })
    name: string;

    @ApiProperty({ example: true })
    @IsOptional()
    status: boolean;


}
