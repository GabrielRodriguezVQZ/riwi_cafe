import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MovementType } from "../enums/movement-type.enum.js";
import { MovementSource } from "../enums/movement_source.enum.js";
import { InventoryItems } from "./inventory.entity.js";

@Entity({name: 'iventory_movements'})
export class inventoryMovements {

    @PrimaryGeneratedColumn( 'uuid',{name: 'id_inventory_movement'})
    id_inventory_movement: string;

    @Column({name: 'inventory_item_id', type: 'uuid'})
    inventory_item_id: string;

    @Column({name: 'movement_type', type: "enum", enum: MovementType, enumName: 'movement_type' })
    movement_type: MovementType;

    @Column({name: 'movement_source', type: 'enum', enum: MovementSource ,enumName: 'movement_source'})
    movement_source: MovementSource;

    @Column({name: 'quantity', type: 'numeric',precision: 13, scale: 3})
    quantity: number;

    @Column({name: 'order_item_id', type: 'uuid', nullable: true})
    order_item_id: string | null;

    @Column({name: 'performed_by_user_id', type: 'uuid'})
    performed_by_user_id: string;

    @Column({name: 'reason', type: 'text', length: '100', nullable: true})
    reason: string | null;

    @CreateDateColumn({name: 'created_at', type: 'timestamptz'})
    created_at: Date

    @ManyToOne( () => InventoryItems, (inventoryItems) => inventoryItems.)
}