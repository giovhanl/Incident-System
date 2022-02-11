import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/incident.filter.exception';

const envConfig = { 
  PORT_API: 3001,
  PORT_FRONT: 3000
}

const PORT_API = 3000;

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

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(envConfig.PORT_API);
}
bootstrap();
