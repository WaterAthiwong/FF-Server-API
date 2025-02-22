// kafka-producer.dto.ts
import { IsNumber, IsString } from 'class-validator';

export class KafkaMessageDto {
  @IsNumber()
  ProcessType: number;

  @IsString()
  OrderNumber: string;

  @IsString()
  ReceivingNumber: string;

  @IsString()
  ItemCode: string;

  @IsString()
  LotNumber: string;

  @IsNumber()
  RetrievalPlanQty: number;

  @IsString()
  Action: string;
}
