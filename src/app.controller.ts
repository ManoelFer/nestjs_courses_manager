import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // TODO: Decorator for specify the route files
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //TODO: Decorator for specify request verb
  getHello(): string {
    return this.appService.getHello();
  }
}
