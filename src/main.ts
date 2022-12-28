import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

//TODO: server configuration
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //TODO: To execute swagger documentation
  const options = new DocumentBuilder()
    .setTitle('Courses API')
    .setVersion('1.0.0')
    .setDescription('API related to courses')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000); //TODO: Listen on port 3000
}
bootstrap();
