import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OilService {
  private apiKey: string;

  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.apiKey = this.configService.get<string>('API_KEY');
  }

  // 주유소 평균 금액
  async getAvgPrice() {
    const url = `http://www.opinet.co.kr/api/avgAllPrice.do?out=json&code=${this.apiKey}`;

    try {
      const response = await firstValueFrom(this.httpService.get(url));
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  // 반경 내 주유소
  async getAroundAll() {
    const url = `http://www.opinet.co.kr/api/aroundAll.do?code=${this.apiKey}&x=314681.8&y=544837&radius=5000&sort=1&prodcd=B027&out=json`;
    try {
      const res = await firstValueFrom(this.httpService.get(url));
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
}
