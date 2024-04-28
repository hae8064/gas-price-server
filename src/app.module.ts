import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { OilModule } from './oil/oil.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 전역에서 설정 사용
    }),
    OilModule, // 여기에 추가
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
