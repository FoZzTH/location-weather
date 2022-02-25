import { registerDecorator, ValidationOptions } from 'class-validator';
import { dayDiff } from '../utils/dayDiff.util';

export function IsInWeekRange(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isInWeekRange',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string) {
          return dayDiff(new Date(value), new Date()) <= 7;
        },

        defaultMessage() {
          return 'The date must be within 7 days of the current day';
        },
      },
    });
  };
}
