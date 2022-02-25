import { OWMResponse } from 'src/open-weather-map/types/owm-response.type';

export const input = {
  lat: 0,
  lng: 1,
  date: '2022-02-25',
};

export const output = {
  description: 'weather description',
};

export const owmMock: OWMResponse = {
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
