import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Schedule{
    @PrimaryGeneratedColumn({name:'schdule_id'})
    schduleId:number;
    @Column({name:'order_id'})
    orderId:number;
    @Column({name:'station_id'})
    gasStationId:string;
    @Column({name:'fuel_type'})
    fuelType:String;
    @Column({name:'quantity'})
    quantity:number;
    
}