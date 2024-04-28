import { Controller, Get } from '@nestjs/common';
import { OilService } from './oil.service';

@Controller('oil')
export class OilController {
  constructor(private readonly oilService: OilService) {}

  @Get('avg-price')
  getAvgPrice() {
    return this.oilService.getAvgPrice();
  }
}
