import { Controller, Post, Body } from '@nestjs/common';
import { RetrievalResultService } from './retrieval-result.service';

@Controller('retrieval-result')
export class RetrievalResultController {
  constructor(private readonly retrievalResultService: RetrievalResultService) {}

  @Post('send')
  async sendMessage(@Body() message: any) {
    await this.retrievalResultService.sendToKafka(message);
    return { status: 'Message sent successfully!' };
  }
}
