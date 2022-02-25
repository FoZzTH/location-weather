import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

import { env } from 'src/env';
import { WeatherReport } from './weather-reports.type';

@Injectable()
export class WeatherReportsService {
  static API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/onecall';

  constructor(private httpService: HttpService) {}

  async getWeatherReport(
    lat: number,
    lng: number,
    date: string,
  ): Promise<WeatherReport> {
    const report = await lastValueFrom(
      this.httpService
        .get(this.generateUrl(lat, lng))
        .pipe(map((response) => response.data)),
    );

    const dayIndex = this.getDayIndex(date);

    return {
      description: report.daily[dayIndex].weather[0].description,
    };
  }

  private generateUrl(lat: number, lng: number): string {
    return `${WeatherReportsService.API_ENDPOINT}?lat=${lat}&lon=${lng}&appid=${env.weatherApi.key}`;
  }

  // Difference in days between the day in the request and the current day == day index
  private getDayIndex(date: string) {
    const MS_PER_DAY = 1000 * 60 * 60 * 24;

    const now = new Date();
    const inputDate = new Date(date);
    const nowUTC = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    const inputDateUTC = Date.UTC(
      inputDate.getFullYear(),
      inputDate.getMonth(),
      inputDate.getDate(),
    );

    return Math.floor((inputDateUTC - nowUTC) / MS_PER_DAY);
  }
}
