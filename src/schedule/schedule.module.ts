import { Module } from '@nestjs/common';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import { Schedule } from './schedule.model'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleRequestService } from './schedule-request.service';
import { Kafka } from 'kafkajs';
import { KafkaModule } from 'src/kafka/kafka.module';
import { ScheduleResponseService } from './schedule-response.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Schedule]),KafkaModule],
  controllers: [ScheduleController],
  providers: [ScheduleService,ScheduleRequestService,ScheduleResponseService]
})
export class ScheduleModule {}

const entities = [Schedule];
export { Schedule};

export default entities;



