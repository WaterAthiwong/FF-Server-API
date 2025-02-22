import { Injectable } from '@nestjs/common';
import { Kafka } from 'kafkajs';

@Injectable()
export class KafkaService {
  private kafka = new Kafka({
    clientId: 'ff-server-api', // เปลี่ยนชื่อ client ID ที่นี่
    brokers: ['192.168.110.89:9092'], // ใช้ IP ของ Kafka Server
  });
  private producer = this.kafka.producer();

  async sendMessage(topic: string, message: any) {
    await this.producer.connect();
    await this.producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
    });
    await this.producer.disconnect();
  }

  async onModuleInit() {
    await this.producer.connect();
  }

  async onModuleDestroy() {
    await this.producer.disconnect();
  }
}
