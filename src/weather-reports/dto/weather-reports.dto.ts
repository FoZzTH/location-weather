import { ArgsType, Field, Float, InputType } from '@nestjs/graphql';
import { IsDateString, IsLatitude, IsLongitude } from 'class-validator';
import { IsInWeekRange } from 'src/common/decorators/is-in-week-range.decorator';

@ArgsType()
@InputType('GetWeatherReportArgs')
export class GetWeatherReportArgs {
  @Field(() => Float)
  @IsLatitude()
  lat: number;

  @Field(() => Float)
  @IsLongitude()
  lng: number;

  @Field(() => String)
  @IsDateString()
  @IsInWeekRange()
  date: string;
}
