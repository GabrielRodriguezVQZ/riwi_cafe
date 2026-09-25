<<<<<<< HEAD
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TableZone } from "../enums/table-zone.enum.js";
import { create } from "domain";

@Entity({ name: 'inventory_items'})
export class Table {
    @PrimaryGeneratedColumn('uuid', {name: 'id_table'})
    id_table: string;

    @Column({ unique: true, name: 'table_number', type: 'varchar', length: 50})
    table_number: number;

    @Column({ name: 'capacity', type: 'smallint' })
    capacity: number;

    @Column({ name: 'zone', type: 'enum', enum: TableZone, enumName: 'table_zone' })
    zone: TableZone;

    @CreateDateColumn({name: 'create_at', type: 'timestamptz'})
    created_at: Date;

    @CreateDateColumn({name: 'update_at', type: 'timestamptz'})
    update_at: Date;
}
=======
import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";
import { TableZone } from "../enums/table-zone.enum.js";

export class Table {
    @PrimaryGeneratedColumn('uuid', {name: 'id_table'})
    id_table: string

    @Column({ unique: true, name: 'table_name', type: 'varchar', length : 50 })
    table_number: number;

    @Column({ name: 'capacity', type: "smallint"})
    capacity: number;

    @Column({ name: 'zone', type: 'enum', enum: TableZone, enumName: 'table_zone_enum' })
    zone: TableZone;

    @CreateDateColumn({ name: 'created_at', type: 'timestamptz'})
    created_at: Date;

    @CreateDateColumn({ name: 'updated_at', type: 'timestamptz'})
    updated_at: Date;
}
>>>>>>> 040157e (feat: entities and DTO)
