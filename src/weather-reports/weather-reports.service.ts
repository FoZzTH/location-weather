import { Injectable } from '@nestjs/common';
import { dayDiff } from 'src/common/utils/dayDiff.util';
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
    const dayIndex = dayDiff(new Date(date), new Date());
    const report = await this.openWeatherMapService.fetchOneCall(lat, lng);

    return {
      description: report.daily[dayIndex].weather[0].description,
    };
  }
}
