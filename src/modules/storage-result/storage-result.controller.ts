// src/modules/storage-result/storage-result.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { StorageResultService } from './storage-result.service';
import { KafkaProducerService } from '../../kafka/kafka-producer.service'; // นำเข้า KafkaProducerService

@Controller('storage-result')
export class StorageResultController {
  constructor(
    private readonly storageResultService: StorageResultService,
    private readonly kafkaProducerService: KafkaProducerService,
  ) {}

  @Post('send')
  async sendMessage(@Body() message: any) {
    const topic = 'ff-server-api'; // กำหนดหัวข้อที่ต้องการส่งข้อความไปยัง Kafka
    await this.kafkaProducerService.sendMessage(topic, message);
    return { status: 'Message sent successfully!' };
  }
}
