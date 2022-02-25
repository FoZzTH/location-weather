import { Module } from '@nestjs/common';
import { OpenWeatherMapModule } from 'src/open-weather-map/open-weather-map.module';
import { WeatherReportsResolver } from './weather-reports.resolver';
import { WeatherReportsService } from './weather-reports.service';

@Module({
  imports: [OpenWeatherMapModule],
  providers: [WeatherReportsResolver, WeatherReportsService],
  exports: [WeatherReportsResolver],
})
export class WeatherReportsModule {}
