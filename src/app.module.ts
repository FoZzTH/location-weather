import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { WeatherReportsModule } from './weather-reports/weather-reports.module';

@Module({
  imports: [
    WeatherReportsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.schema.graphql'],
    }),
  ],
})
export class AppModule {}
