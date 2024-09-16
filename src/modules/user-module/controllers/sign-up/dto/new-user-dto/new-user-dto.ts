import { IsString } from "class-validator";

export class NewUserDto {
    @IsString()
    readonly user_name: string;
    @IsString()
    readonly password: string;
}
