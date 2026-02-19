// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from './analytics';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Calls extends APIResource {
  /**
   * Returns call cost breakdown by day
   */
  getCallCosts(
    orgID: string,
    query: CallGetCallCostsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CallGetCallCostsResponse> {
    return this._client.get(path`/org/${orgID}/analytics/calls/costs`, { query, ...options });
  }

  /**
   * Returns call volume, duration stats, and outcomes for the organization
   */
  listCalls(
    orgID: string,
    query: CallListCallsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CallListCallsResponse> {
    return this._client.get(path`/org/${orgID}/analytics/calls`, { query, ...options });
  }

  /**
   * Returns call distribution by hour of day
   */
  listCallsByHour(
    orgID: string,
    query: CallListCallsByHourParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CallListCallsByHourResponse> {
    return this._client.get(path`/org/${orgID}/analytics/calls/by-hour`, { query, ...options });
  }
}

export interface CallGetCallCostsResponse {
  period?: AnalyticsAPI.AnalyticsPeriod;

  time_series?: Array<CallGetCallCostsResponse.TimeSeries>;
}

export namespace CallGetCallCostsResponse {
  export interface TimeSeries {
    avg_cost_per_call?: number;

    date?: string;

    total_calls?: number;

    total_cost_usd?: number;

    total_tokens?: number;
  }
}

export interface CallListCallsResponse {
  duration?: CallListCallsResponse.Duration;

  outcomes?: Array<CallListCallsResponse.Outcome>;

  period?: AnalyticsAPI.AnalyticsPeriod;

  time_series?: Array<CallListCallsResponse.TimeSeries>;
}

export namespace CallListCallsResponse {
  export interface Duration {
    avg_duration_seconds?: number;

    max_duration_seconds?: number;

    total_calls?: number;

    total_duration_seconds?: number;
  }

  export interface Outcome {
    outcome_count?: number;

    outcome_key?: string;

    outcome_value?: string;
  }

  export interface TimeSeries {
    busy?: number;

    completed?: number;

    date?: string;

    failed?: number;

    no_answer?: number;

    total?: number;
  }
}

export type CallListCallsByHourResponse = Array<CallListCallsByHourResponse.CallListCallsByHourResponseItem>;

export namespace CallListCallsByHourResponse {
  export interface CallListCallsByHourResponseItem {
    avg_duration?: number;

    call_count?: number;

    hour_utc?: number;
  }
}

export interface CallGetCallCostsParams {
  /**
   * End date (ISO 8601)
   */
  end_date?: string;

  /**
   * Start date (ISO 8601)
   */
  start_date?: string;
}

export interface CallListCallsParams {
  /**
   * End date (ISO 8601)
   */
  end_date?: string;

  /**
   * Start date (ISO 8601)
   */
  start_date?: string;
}

export interface CallListCallsByHourParams {
  /**
   * End date (ISO 8601)
   */
  end_date?: string;

  /**
   * Start date (ISO 8601)
   */
  start_date?: string;
}

export declare namespace Calls {
  export {
    type CallGetCallCostsResponse as CallGetCallCostsResponse,
    type CallListCallsResponse as CallListCallsResponse,
    type CallListCallsByHourResponse as CallListCallsByHourResponse,
    type CallGetCallCostsParams as CallGetCallCostsParams,
    type CallListCallsParams as CallListCallsParams,
    type CallListCallsByHourParams as CallListCallsByHourParams,
  };
}
