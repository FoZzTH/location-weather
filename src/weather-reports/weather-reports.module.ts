import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { WeatherReportsResolver } from './weather-reports.resolver';
import { WeatherReportsService } from './weather-reports.service';

@Module({
  imports: [HttpModule],
  providers: [WeatherReportsResolver, WeatherReportsService],
  exports: [WeatherReportsResolver],
})
export class WeatherReportsModule {}
