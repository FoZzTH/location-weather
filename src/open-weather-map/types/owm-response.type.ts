export type OWMResponse = {
  daily: [
    {
      weather: [
        {
          description: string;
        },
      ];
    },
  ];
};
