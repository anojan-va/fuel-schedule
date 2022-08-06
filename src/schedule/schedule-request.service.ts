import { Injectable, OnModuleInit } from '@nestjs/common';
import { Schedule } from './schedule.model';
import { ConsumerService } from '../kafka/consumer.service';
import { OrderEvent } from './event.model';
import { ScheduleDto } from './schedule.dto';
import { ScheduleService } from './schedule.service';
import { ScheduleResponseService } from './schedule-response.service';
import { Order } from './order.model';



@Injectable()
export class ScheduleRequestService implements OnModuleInit {
       private event:OrderEvent;
       private scheduleDto:ScheduleDto;
    constructor(private readonly consumerService:ConsumerService,private  readonly scheduleService:ScheduleService, private readonly scheduleResponseService:ScheduleResponseService) {}
    async onModuleInit() {
       
        await this.consumerService.consume(
            { topic: 'allocation-topic'},
            {
                eachMessage: async ({ topic, partition, message }) => {

                let event:OrderEvent;

                const eventObj = message.value as any;
                event = JSON.parse(eventObj);


                this.scheduleDto= new ScheduleDto(event.order.orderId,event.order.gasStationId,event.order.fuelType,event.order.quantity)
                const schdulereturn = this.scheduleService.createSchedule(this.scheduleDto);
                var schduledId = (await schdulereturn).schduleId;
                console.log(schduledId);
                let orderUpdated = new Order(event.order.orderId,event.order.gasStationId,event.order.fuelType,event.order.quantity,event.order.orderStatus,event.order.statusDate,event.order.allocationId,4,event.order.dispatchId,event.order.deliveryId);
                let eventUpdated =new OrderEvent("Dispatch Request Received","Sucess.!",orderUpdated);



                this.scheduleResponseService.scheduleResponse(eventUpdated);

               // console.log(this.scheduleDto.toString());
                console.log(this.scheduleDto.gasStationId);


                console.log({
                  value: message.value.toString(),
                  topic: topic.toString(),
                  partition: partition.toString(),
                  
                });
              },
            },
          );
    }

}