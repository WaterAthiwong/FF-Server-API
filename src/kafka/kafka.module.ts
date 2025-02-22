import { Module } from '@nestjs/common';
import { KafkaProducerService } from './kafka-producer.service'; // ให้ตรวจสอบให้แน่ใจว่าตรง
import { KafkaProducerController } from './kafka-producer.controller';

@Module({
  providers: [KafkaProducerService],
  controllers: [KafkaProducerController],
  exports: [KafkaProducerService], // ส่งออก KafkaProducerService
})
export class KafkaModule {}
