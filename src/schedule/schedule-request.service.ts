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
                

                

                const tr = message.value as any;
                event = JSON.parse(tr);

                let eventUpdated =new OrderEvent("","",);





              this.scheduleDto= new ScheduleDto(event.order.orderId,event.order.gasStationId,event.order.fuelType,event.order.quantity)
              this.scheduleService.createSchedule(this.scheduleDto);

              let order:Order;

              this.scheduleResponseService.scheduleResponse(event);

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