import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    constructor(private configService: ConfigService,
        @InjectDataSource('pos_database') private DS2: DataSource
    ) {}

    use(req: Request, res: Response, next: NextFunction) {
        const validApiKey = this.configService.get<string>('APIKEY');
        const apiKeyHeader = req.headers['apikey'];
        const username = req.headers['username'];
        const apiKeyQuery = req.query.apikey;

        // console.log('validApiKey:', validApiKey);
       
        console.log(`[${new Date(new Date().getTime() + 7 * 60 * 60 * 1000).toISOString().replace(/T/, ' ') .replace(/\.\d{3}Z/, '')}]  ${req.method} ${req.originalUrl}`);
        console.log('API Key from headers:', apiKeyHeader);
        console.log('API Key from query params:', apiKeyQuery);

        try {
            let allHeaderData = JSON.stringify(req.headers);
            let allBodyData = JSON.stringify(req.body);
            let url = req.originalUrl;
            let insertLog = `INSERT INTO pos_mis.logs (username, url, header_data, body_data) VALUES ('${username}','${url}','${allHeaderData}','${allBodyData}')`;
            this.DS2.query(insertLog);
        }
        catch (error) {
           console.log('Error:', error);
        }

        // if (apiKeyHeader !== validApiKey && apiKeyQuery !== validApiKey) {
        //     // If the API key is not correct, stop the request
        //     throw new HttpException({
        //         status: HttpStatus.FORBIDDEN,
        //         error: 'Forbidden: Invalid API Key',
        //       }, HttpStatus.FORBIDDEN);
        //   }
          
        next(); // Call the next middleware or route handler
    }
}
