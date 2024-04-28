import { Module } from '@nestjs/common';
import { OilController } from './oil.controller';
import { OilService } from './oil.service'; // 서비스가 있다면 추가
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [OilController],
  providers: [OilService], // 서비스가 있다면 추가
})
export class OilModule {}
