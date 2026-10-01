import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({name: 'order_items'})
export class OrderItems {
    
    @PrimaryGeneratedColumn( 'uuid', {name: 'id_order_item'})
    id_order_item: string;

    @Column({name: 'order_id', type: 'uuid'})
    order_id: string;

    @Column({name: 'menu_item_id', type: 'uuid'})
    menu_item_id: string;

    @Column({name: 'quantity', type: 'integer'})
    quantity: number;

    @Column({name: 'unit_price', type: 'numeric', precision: 12, scale: 2})
}




