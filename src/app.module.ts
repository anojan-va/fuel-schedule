import { Module } from '@nestjs/common';
import entities, { ScheduleModule } from './schedule/schedule.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KafkaModule } from './kafka/kafka.module';


@Module({
  imports: [ScheduleModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'scheduledb',
    entities: entities,
    synchronize: true,

  }), KafkaModule],

})
export class AppModule {}
