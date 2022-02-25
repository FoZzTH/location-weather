
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class WeatherReports {
    description: string;
}

export abstract class IQuery {
    abstract weatherReport(lat: number, lng: number, date: string): WeatherReports | Promise<WeatherReports>;
}

type Nullable<T> = T | null;
