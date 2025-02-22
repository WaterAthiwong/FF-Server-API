// kafka-producer.service.ts
import { Injectable } from '@nestjs/common';
import { Kafka, Producer } from 'kafkajs';

@Injectable()
export class KafkaProducerService {
  private kafka = new Kafka({
    clientId: 'ff-server-api',
    brokers: ['192.168.110.89:9092'], // ปรับให้ตรงกับ Kafka broker ของคุณ
  });

  private producer: Producer = this.kafka.producer();

  async sendMessage(topic: string, message: any) {
    await this.producer.connect();
    await this.producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
    });
    console.log(topic);
    console.log(JSON.stringify(message));
    await this.producer.disconnect();
  }
}
