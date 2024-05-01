import { Controller, Get, Query } from '@nestjs/common';
import { OilService } from './oil.service';

@Controller('oil')
export class OilController {
  constructor(private readonly oilService: OilService) {}

  @Get('avg-price')
  getAvgPrice() {
    return this.oilService.getAvgPrice();
  }

  @Get('around-all')
  getAroundAll(
    @Query('x') x: number,
    @Query('y') y: number,
    @Query('radius') radius: number,
    @Query('prodcd') prodcd: string,
  ) {
    return this.oilService.getAroundAll(x, y, radius, prodcd);
  }
}
