// app.module.ts
import { Module } from '@nestjs/common';
import { KafkaModule } from './kafka/kafka.module';
import { StorageResultModule } from './modules/storage-result/storage-result.module';
import { RetrievalResultModule } from './modules/retrieval-result/retrieval-result.module';
import { StockReportModule } from './modules/stock-report/stock-report.module';

@Module({
  imports: [
    KafkaModule,
    StorageResultModule,
    RetrievalResultModule,
    StockReportModule,
  ],
})
export class AppModule {}
