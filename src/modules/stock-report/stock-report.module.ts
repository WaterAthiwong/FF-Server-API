// stock-report.module.ts
import { Module } from '@nestjs/common';
import { StockReportService } from './stock-report.service';
import { StockReportController } from './stock-report.controller';
import { KafkaModule } from '../../kafka/kafka.module'; // นำเข้า KafkaModule

@Module({
  imports: [KafkaModule], // เพิ่ม KafkaModule ที่นี่
  controllers: [StockReportController],
  providers: [StockReportService],
  exports: [StockReportService],
})
export class StockReportModule {}