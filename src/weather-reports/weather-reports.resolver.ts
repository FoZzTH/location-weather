import { ValidationPipe } from '@nestjs/common';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { GetWeatherReportArgs } from './dto/weather-reports.dto';
import { WeatherReportsService } from './weather-reports.service';

@Resolver('WeatherReport')
export class WeatherReportsResolver {
  constructor(private weatherReportsService: WeatherReportsService) {}

  @Query('weatherReport')
  async getWeatherReport(
    @Args({ type: () => GetWeatherReportArgs }, new ValidationPipe())
    { lat, lng, date }: GetWeatherReportArgs,
  ) {
    console.log(lat, lng, date);
    return await this.weatherReportsService.getWeatherReport(lat, lng, date);
  }
}
