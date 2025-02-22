// retrieval-result.module.ts
import { Module } from '@nestjs/common';
import { RetrievalResultService } from './retrieval-result.service';
import { RetrievalResultController } from './retrieval-result.controller';
import { KafkaModule } from '../../kafka/kafka.module'; // นำเข้า KafkaModule

@Module({
  imports: [KafkaModule], // เพิ่ม KafkaModule ที่นี่
  controllers: [RetrievalResultController],
  providers: [RetrievalResultService],
  exports: [RetrievalResultService],
})
export class RetrievalResultModule {}