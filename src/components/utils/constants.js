const weather = {
  daily: [
    {
      temp: { day: 26.49, night: 19.74 },
      humidity: 63,
      wind_speed: 4.78, //m/s
      weather: { icon: 'Clear', description: 'чисте небо' },
    },
    {
      temp: { day: 24.78, night: 21.37 },
      humidity: 48,
      wind_speed: 3.69,
      weather: { icon: 'Clear', description: 'чисте небо' },
    },
    {
      temp: { day: 21.23, night: 16.04 },
      humidity: 49,
      wind_speed: 6.97,
      weather: { icon: 'Rain', description: 'легкий дощ' },
    },
    {
      temp: { day: 20.29, night: 16.37 },
      humidity: 41,
      wind_speed: 4.54,
      weather: { icon: 'Clouds', description: 'кілька хмар' },
    },
    {
      temp: { day: 22.55, night: 19.52 },
      humidity: 36,
      wind_speed: 3.23,
      weather: { icon: 'Clouds', description: 'уривчасті хмари' },
    },
    {
      temp: { day: 24.21, night: 16.82 },
      humidity: 37,
      wind_speed: 4.71,
      weather: { icon: 'Rain', description: 'легкий дощ' },
    },
    {
      temp: { day: 17.78, night: 19.68 },
      humidity: 78,
      wind_speed: 4.03,
      weather: { icon: 'Rain', description: 'легкий дощ' },
    },
    {
      temp: { day: 23.89, night: 20.6 },
      humidity: 36,
      wind_speed: 2.8,
      weather: { icon: 'Clear', description: 'чисте небо' },
    },
  ],
};

const currency = {
  usd: [10.55, 10.5, 10.51, 10.56, 10.6, 10.5, 10.55, 10.55, 10.54, 10.49],
  eur: [12.43, 12.4, 12.55, 12.66, 12.7, 12.54, 12.52, 12.65, 12.64, 12.39],
  btc: [
    60000.43, 60200.4, 62000.55, 59000.66, 60000.7, 60000.54, 64000.52,
    62000.65, 58000.64, 55000.39,
  ],
  eth: [
    3000.43, 3200.4, 2580.55, 3012.66, 3254.7, 3522.54, 3100.52, 2243.65,
    3023.64, 2500.39,
  ],
};

export { weather, currency };
