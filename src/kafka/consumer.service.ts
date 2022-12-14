import { Injectable, OnApplicationShutdown } from '@nestjs/common';

import { Consumer, ConsumerSubscribeTopic,ConsumerRunConfig, Kafka } from 'kafkajs'
import { async } from 'rxjs';

@Injectable()
export class ConsumerService implements OnApplicationShutdown {
    
    private readonly kafka = new Kafka({
        brokers: ['localhost:9092'],
    });
    
    private readonly consumers: Consumer[] = [];

    async consume(topic: ConsumerSubscribeTopic, config: ConsumerRunConfig){
        const consumer = this.kafka.consumer({groupId:'schedule'});
        await consumer.connect();
        await consumer.subscribe(topic);
        await consumer.run(config);
        this.consumers.push(consumer);

    }

    async onApplicationShutdown() {
        for(const consumer of this.consumers){
            await consumer.disconnect();
           } 
    }

   
}
