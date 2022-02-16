import { BadRequestException, ValidationError, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/incident.filter.exception';
import { envConfig } from './main.config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('INcident SYstem API')
    .setDescription('all about the API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/', app, document);

  // for react
  app.enableCors();

  //app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({
    disableErrorMessages: false,
    //exceptionFactory: (validationErrors: ValidationError[] = []) => {
    //  return new BadRequestException(validationErrors);
    //},
  }));

  await app.listen(envConfig.PORT_API);
}
bootstrap();
