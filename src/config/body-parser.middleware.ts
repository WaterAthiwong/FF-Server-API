import { Injectable, NestMiddleware } from '@nestjs/common';
import * as bodyParser from 'body-parser';

@Injectable()
export class BodyParserMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Request... TRACKING BODY PARSER MIDDLEWARE');
    bodyParser.json()(req, res, next);
  }
}
