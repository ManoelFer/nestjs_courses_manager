import { Injectable } from '@nestjs/common';

@Injectable() //TODO: Function to execution
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
