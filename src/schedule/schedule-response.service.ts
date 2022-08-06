import { Injectable } from '@nestjs/common';
import { ScheduleDto } from './schedule.dto';
import { Schedule } from './schedule.model';
import { ProducerService } from '../kafka/producer.service';
import { OrderEvent } from './event.model';
import { MESSAGES } from '@nestjs/core/constants';


@Injectable()
export class ScheduleResponseService {
    
    constructor(private readonly producerService:ProducerService) {}
   //

    async scheduleResponse(event:OrderEvent){
        await this.producerService.produce({
            topic:'schedule-topic',
            messages: [{
                key: 'eventsend', value: JSON.stringify(event),
            
            },],
        });

        return 'Hello World...!';
        
    }

}