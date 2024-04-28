import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OilService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async getAvgPrice() {
    const apiKey = this.configService.get<string>('API_KEY');
    const url = `http://www.opinet.co.kr/api/avgAllPrice.do?out=json&code=${apiKey}`;

    try {
      const response = await firstValueFrom(this.httpService.get(url));
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
}
