import { testCases } from '../../../__mocks__/common/utils/dayDiff.util';
import { dayDiff } from './dayDiff.util';

describe('Day Diff util', () => {
  describe('Should return correct date diff', () => {
    testCases.forEach((testCase) => {
      test(testCase.message, () => {
        expect(
          dayDiff(new Date(testCase.input[0]), new Date(testCase.input[1])),
        ).toBe(testCase.result);
      });
    });
  });
});
