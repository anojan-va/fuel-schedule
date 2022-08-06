import { Order } from "./order.model";

export class OrderEvent{
    message:string;
    status:string;
    order:Order;

    constructor(message:string,status:string,order:Order){
        this.message=message;
        this.status=status;
        this.order=order;
    }
      
}