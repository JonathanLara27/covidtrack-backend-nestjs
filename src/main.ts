import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from "@nestjs/platform-express";
import { HttpInterceptor } from './common/interceptors/http.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const lg = new Logger('NeHox');
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ["error", "warn", "log", "debug"],
  });
  const { PORT, APP_NAME, DOCS_URI, DOCS_TITLE, DOCS_DESCRIPTION, DOCS_VERSION, DOCS_CONTACT_NAME, DOCS_CONTACT_PAGE, DOCS_CONTACT_EMAIL, DOCS_SERVER } = process.env;
  app.enableCors({ origin: "*" });
  app.setGlobalPrefix("api");
  app.useGlobalInterceptors(new HttpInterceptor())
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
  })).disable('x-powered-by').disable('etag');

  const configSwagger = new DocumentBuilder()
    .setTitle(DOCS_TITLE)
    .setDescription(DOCS_DESCRIPTION)
    .setVersion(DOCS_VERSION)
    .setContact(DOCS_CONTACT_NAME, DOCS_CONTACT_PAGE, DOCS_CONTACT_EMAIL)
    .addServer(DOCS_SERVER)
    .addBearerAuth()
    .addBasicAuth()
    .build();
  SwaggerModule.setup(DOCS_URI, app, SwaggerModule.createDocument(app, configSwagger))

  await app.listen(PORT, async () => {
    lg.debug(`Server is running in : ${await app.getUrl()}`);
  });
}
bootstrap();
