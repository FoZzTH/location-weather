import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { OpenWeatherMapService } from './open-weather-map.service';

@Module({
  imports: [HttpModule],
  providers: [OpenWeatherMapService],
  exports: [OpenWeatherMapService],
})
export class OpenWeatherMapModule {}
