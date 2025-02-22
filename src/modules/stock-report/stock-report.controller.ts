import { Controller, Post, Body } from '@nestjs/common';
import { StockReportService } from './stock-report.service';

@Controller('stock-report')
export class StockReportController {
  constructor(private readonly stockReportService: StockReportService) {}

  @Post('send')
  async sendMessage(@Body() message: any) {
    try {
      await this.stockReportService.sendToKafka(message);
      return { success: true, message: 'Data sent to Kafka successfully' };
    } catch (error) {
      console.error('Error sending data to Kafka:', error);
      return { success: false, message: 'Error sending data to Kafka' };
    }
  }
}
