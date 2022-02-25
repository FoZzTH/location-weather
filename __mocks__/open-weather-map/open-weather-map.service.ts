import { OWMResponse } from 'src/open-weather-map/types/owm-response.type';

export const input = {
  lat: 0,
  lng: 1,
};

export const output = {
  daily: [
    {
      weather: [
        {
          description: 'weather description',
        },
      ],
    },
  ],
};

export const httpMock: OWMResponse = {
  daily: [
    {
      weather: [
        {
          description: 'weather description',
        },
      ],
    },
  ],
};
