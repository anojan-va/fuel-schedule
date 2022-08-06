export class ScheduleDto{
    orderId: number;
    gasStationId: string;
    fuelType: String;   
    quantity: number;
   

    constructor(orderId:number,gasStationId:string,fuelType:string,quantity: number){
        this.orderId=orderId;
        this.gasStationId=gasStationId;
        this.fuelType=fuelType;
        this.quantity=quantity;
    }

    public get orderIds(): number {
        return this.orderId;
    }
    public set orderIds(value: number) {
        this.orderId = value;
    }
    public get gasStationIds(): string {
        return this.gasStationId;
    }
    public set gasStationIds(value: string) {
        this.gasStationId = value;
    }

    public get fuelTypes(): String {
        return this.fuelType;
    }
    public set fuelTypes(value: String) {
        this.fuelType = value;
    }
    public get quantitys(): number {
        return this.quantity;
    }
    public set quantitys(value: number) {
        this.quantity = value;
    }
    
}