import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // เปิดใช้งาน CORS
  app.enableCors();
  
  // ใช้ Global Validation Pipe
  app.useGlobalPipes(new ValidationPipe());
  
  // เริ่มฟังที่พอร์ต 3001
  await app.listen(3001);
}
bootstrap();
