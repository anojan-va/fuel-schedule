import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEvent } from './event.model';
import { Order } from './order.model';
import { ScheduleDto } from './schedule.dto';
import { Schedule } from './schedule.model';

@Injectable()
export class ScheduleService {
    constructor(@InjectRepository(Schedule)private scheduleRepository:Repository<Schedule>) {}

    private schedule:Schedule[]=[];

    getScheduleList(){
        return this.scheduleRepository.find();
    }


    createSchedule(scheduleDto:ScheduleDto){
    
       const newSchedule = this.scheduleRepository.create(scheduleDto);
       return this.scheduleRepository.save(newSchedule);
    }

   
}
