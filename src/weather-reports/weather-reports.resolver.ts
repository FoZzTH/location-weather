import { Resolver, Query, Args } from '@nestjs/graphql';
import { WeatherReportsService } from './weather-reports.service';

@Resolver('WeatherReport')
export class WeatherReportsResolver {
  constructor(private weatherReportsService: WeatherReportsService) {}

  @Query()
  async weatherReport(
    @Args('lat') lat: number,
    @Args('lng') lng: number,
    @Args('date') date: string,
  ) {
    return await this.weatherReportsService.getWeatherReport(lat, lng, date);
  }
}
