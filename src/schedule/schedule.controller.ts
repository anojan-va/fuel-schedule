import { Body, Controller, Get, Post } from '@nestjs/common';
import { ScheduleDto } from './schedule.dto';
import { ScheduleService } from './schedule.service';
import { ScheduleResponseService } from './schedule-response.service';

@Controller('schedule')
export class ScheduleController {
    constructor(private scheduleService:ScheduleService, private scheduleResponseService: ScheduleResponseService){}

    @Get()
    getAllSchdule(){
        return this.scheduleService.getScheduleList();
    }
/*
    @Post()
    createSchdule(@Body()scheduleDto: ScheduleDto){
     //  return this.scheduleService.createSchedule(schduleId,orderId,gasStationId,fuelType,quantity);
        return this.scheduleService.createSchedule(scheduleDto);
    }
*/

}
