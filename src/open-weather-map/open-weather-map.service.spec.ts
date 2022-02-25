import { HttpService } from '@nestjs/axios';
import * as rxjs from 'rxjs';
import { OpenWeatherMapService } from './open-weather-map.service';
import {
  input,
  output,
  httpMock,
} from '../../__mocks__/open-weather-map/open-weather-map.service';

describe('OpenWeatherMapService', () => {
  let service: OpenWeatherMapService;

  beforeAll(() => {
    const httpService = new HttpService();
    httpService.get = jest.fn().mockReturnValue(rxjs.of({}));

    jest.spyOn(rxjs, 'lastValueFrom').mockResolvedValue(httpMock);

    service = new OpenWeatherMapService(httpService);
  });

  test('Should return correct data from fetch call', async () => {
    const response = await service.fetchOneCall(input.lat, input.lng);
    expect(response).toStrictEqual(output);
  });
});
