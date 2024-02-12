import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MaxLength, MinLength, IsNumber, Matches } from "class-validator";
export class CreateUserDto {
    @ApiProperty({ example: '98754215' })
    @IsNotEmpty()
    @MaxLength(8, {message: 'El DNI debe tener 8 caracteres'})
    @MinLength(8, {message: 'El DNI debe tener 8 caracteres'})
    @Matches(/^[0-9]*$/, {message: 'El DNI debe ser numérico'})
    readonly dni: string;

    @ApiProperty({ example: 'correo@gmail.com' })
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @ApiProperty({ example: 'Password1' })
    @IsString()
    @IsNotEmpty()
    @IsStrongPassword({minLength: 8,minLowercase: 1,minUppercase:1,minSymbols:1}, {message: 'La contraseña debe tener al menos 8 caracteres, 1 mayúscula, 1 minúscula y 1 símbolo'})
    public password: string;

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    @IsNumber()
    readonly roleId: number;

}
