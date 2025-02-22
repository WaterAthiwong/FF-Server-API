import { Controller, Post, Body } from '@nestjs/common';
import { KafkaProducerService } from './kafka-producer.service'; // นำเข้า KafkaProducerService

@Controller('kafka') // กำหนดเส้นทางหลัก
export class KafkaProducerController {
  constructor(private readonly kafkaProducerService: KafkaProducerService) {}

  @Post('send') // เส้นทางที่รองรับ POST
  async sendMessage(@Body() message: any) {
    const topic = 'ff-server-api'; // ชื่อหัวข้อที่คุณต้องการส่ง
    await this.kafkaProducerService.sendMessage(topic, message);
    return { status: 'Message sent successfully!' };
  }
}
