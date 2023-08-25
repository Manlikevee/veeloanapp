import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AtGuard } from './common/guards';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  //app.useGlobalGuards(new AtGuard());
  await app.listen(3000);
}
bootstrap();
