import { Module } from '@nestjs/common';
import { StorageResultService } from './storage-result.service';
import { StorageResultController } from './storage-result.controller';
import { KafkaModule } from '../../kafka/kafka.module'; // นำเข้า KafkaModule

@Module({
  imports: [KafkaModule], // เพิ่ม KafkaModule ที่นี่
  controllers: [StorageResultController],
  providers: [StorageResultService],
  exports: [StorageResultService],
})
export class StorageResultModule {}
