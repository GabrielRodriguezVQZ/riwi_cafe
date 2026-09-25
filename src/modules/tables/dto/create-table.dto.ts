import { Transform, Type } from 'class-transformer';

import {
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsString,
    Max,
    MaxLength,
    Min,
} from 'class-validator';

import { TableZone } from '../enums/table-zone.enum.js';

export class CreateTableDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    @Transform(({ value }) =>
        typeof value === 'string' ? value.trim() : value,
    )
    tableNumber: string;

    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(30)
    capacity: number;

    @IsEnum(TableZone)
    zone: TableZone;
}