import { Injectable } from '@nestjs/common';
import { ScheduleDto } from './schedule.dto';
import { Schedule } from './schedule.model';
import { ProducerService } from '../kafka/producer.service';
import { OrderEvent } from './event.model';


@Injectable()
export class ScheduleResponseService {
    
    constructor(private readonly producerService:ProducerService) {}
   //

    async scheduleResponse(event:OrderEvent){
        await this.producerService.produce({
            topic:'schedule-topic',
            messages: [{
                key: 'pagamentos', value: JSON.stringify({"abc":"sd"}),
            
            },],
        });
        return 'Hello World...!';
    }

}