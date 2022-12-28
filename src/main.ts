import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//TODO: server configuration
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000); //TODO: Listen on port 3000
}
bootstrap();
