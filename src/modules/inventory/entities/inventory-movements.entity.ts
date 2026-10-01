import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MovementType } from "../enums/movement-type.enum.js";
import { MovementSource } from "../enums/movement_source.enum.js";
import { InventoryItems } from "./inventory.entity.js";
import { User } from "../../users/entities/user.entity.js";
import { OrderItems } from "../../orders/entities/order-item.entity.js";

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
    created_at: Date;

    @ManyToOne(() => InventoryItems, {nullable: false, onDelete: 'RESTRICT'},)
    @JoinColumn({name: 'inventory_item_id', referencedColumnName: 'id_inventory_item', foreignKeyConstraintName: 'fk_iventory_movements_inventory_items'})
    id_inventory_item: InventoryItems;

    @ManyToOne(() => OrderItems, {nullable: true, onDelete: 'RESTRICT'})
    @JoinColumn({name: 'order_item_id', referencedColumnName: 'id_order_item', foreignKeyConstraintName: 'fk_iventory_movements_order_items' })
    id_order_item: OrderItems;

    @ManyToOne(()=> User, {nullable: false, onDelete: 'RESTRICT',})
    @JoinColumn({name: 'performed_by_user_id', referencedColumnName: 'id_user', foreignKeyConstraintName: 'fk_inventory_movements_users'})
    id_user: User;


    
}