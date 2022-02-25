import { Injectable } from '@nestjs/common';
import { OpenWeatherMapService } from 'src/open-weather-map/open-weather-map.service';
import { WeatherReport } from './types/weather-reports.type';

@Injectable()
export class WeatherReportsService {
  constructor(private openWeatherMapService: OpenWeatherMapService) {}

  async getWeatherReport(
    lat: number,
    lng: number,
    date: string,
  ): Promise<WeatherReport> {
    const dayIndex = this.getDayIndex(date);
    const report = await this.openWeatherMapService.fetchOneCall(lat, lng);

    return {
      description: report.daily[dayIndex].weather[0].description,
    };
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
