import { timeStamp } from "console";

export class Order{
    orderId: number;   
    gasStationId:string;
    fuelType:string;
    quantity:number;
    orderStatus:string;
    statusDate:string;
    allocationId:number;
    scheduleId:number;
    dispatchId:number;
    deliveryId:number;
    

    constructor(
        orderId: number,
          
        gasStationId:string,
        fuelType:string,
        quantity:number,
        orderStatus:string,
        statusDate:string,
        allocationId:number,
        scheduleId:number,     
        dispatchId:number,
        deliveryId:number,
    ){
        this.orderId=orderId;
       
        this.gasStationId=gasStationId;
        this.fuelType=fuelType;
        this.quantity=quantity;
        this.orderStatus=orderStatus;
        this.statusDate=statusDate;
        this.allocationId=allocationId;
        this.scheduleId=scheduleId;
        this.dispatchId=dispatchId;
        this.deliveryId=deliveryId;


    }
}