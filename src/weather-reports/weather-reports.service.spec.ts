import { HttpService } from '@nestjs/axios';
import { WeatherReportsService } from './weather-reports.service';
import { OpenWeatherMapService } from '../open-weather-map/open-weather-map.service';
import {
  input,
  output,
  owmMock,
} from '../../__mocks__/weather-reports/weather-reports.service';

describe('WeatherReportsService', () => {
  let service: WeatherReportsService;

  beforeAll(() => {
    const httpService = new HttpService();
    const owmService = new OpenWeatherMapService(httpService);

    owmService.fetchOneCall = jest.fn().mockResolvedValue(owmMock);

    service = new WeatherReportsService(owmService);
  });

  test('Should return correct description', async () => {
    const response = await service.getWeatherReport(
      input.lat,
      input.lng,
      input.date,
    );

    expect(response).toStrictEqual(output);
  });
});
