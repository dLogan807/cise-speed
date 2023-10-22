import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const cors = require('cors');
  app.use(cors(
    { 
        origin: ["https://cise-speed-frontend.vercel.app"],
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], 
        credentials: true 
    }
));
  app.enableCors();
  await app.listen(5000);
}
bootstrap();
