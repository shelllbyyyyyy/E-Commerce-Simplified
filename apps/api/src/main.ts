import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import helmet from "helmet";
import { ValidationPipe } from "@nestjs/common";

import { HttpExceptionFilter } from "./http-exception.filter";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.enableCors({
    origin: ["http://localhost:3000", "https://shelby-shops.vercel.app"],
  });
  const httpAdapterHost = app.get(HttpAdapterHost);

  app.useGlobalFilters(new HttpExceptionFilter(httpAdapterHost));

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.setGlobalPrefix("/v4/api");
  await app.listen(3001);
}
bootstrap();
