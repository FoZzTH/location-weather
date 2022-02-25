import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

import { env } from 'src/env';
import { OWMResponse } from './types/owm-response.type';

@Injectable()
export class OpenWeatherMapService {
  static API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/onecall';

  constructor(private httpService: HttpService) {}

  async fetchOneCall(lat: number, lng: number) {
    const url = `${OpenWeatherMapService.API_ENDPOINT}?lat=${lat}&lon=${lng}&appid=${env.weatherApi.key}`;

    return (await lastValueFrom(
      this.httpService.get(url).pipe(map((response) => response.data)),
    )) as OWMResponse;
  }
}
