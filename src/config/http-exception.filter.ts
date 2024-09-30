import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const exceptionResponse = exception.getResponse();

    let message = exception.message;

    if (Array.isArray(exceptionResponse['message'])) {
      message = exceptionResponse['message'].join(', ');
    } else if (typeof exceptionResponse === 'object') {
      message = exceptionResponse['message'];
    }

    const logMessage = `
        ERROR
        Time: ${new Date().toISOString()}
        URL: ${request.url}
        Parameters: ${JSON.stringify(request.body)}
        Message: ${message}
    `;

    console.log(logMessage);

    const logDir = path.resolve(__dirname, '../logs');
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    // Write the log to a file in the logs directory
    const logFilePath = path.join(logDir, 'logdata.txt');
    fs.appendFile(logFilePath, logMessage, (err) => {
      if (err) {
        console.error('Failed to write to log file', err);
      }
    });

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: ctx.getRequest().url,
      message: message,
    });
  }
}
