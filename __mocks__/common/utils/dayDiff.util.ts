export const testCases = [
  {
    message: 'When the first date is greater',
    input: ['2022-02-25', '2022-02-26'],
    result: 1,
  },
  {
    message: 'When the second date is greater',
    input: ['2022-02-26', '2022-02-25'],
    result: 1,
  },
  {
    message: 'When the dates are equal',
    input: ['2022-02-25', '2022-02-25'],
    result: 0,
  },
];
