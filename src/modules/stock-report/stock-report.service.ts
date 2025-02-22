import { Injectable } from '@nestjs/common';
import { KafkaProducerService } from '../../kafka/kafka-producer.service'; // ตรวจสอบเส้นทางให้ถูกต้อง

@Injectable()
export class StockReportService {
  constructor(private readonly kafkaProducerService: KafkaProducerService) {}

  async sendToKafka(data: any) {
    const topic = 'ff-server-api'; // เปลี่ยนเป็นหัวข้อที่ต้องการส่ง

    try {
      await this.kafkaProducerService.sendMessage(topic, data);
      console.log('Data sent to Kafka successfully');
    } catch (error) {
      console.error('Error sending data to Kafka:', error);
      throw new Error('Failed to send data to Kafka');
    }
  }
}
