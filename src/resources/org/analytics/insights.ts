// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Insights extends APIResource {
  /**
   * Generate comprehensive AI analysis of call performance for a given time period
   */
  generateInsights(
    orgID: string,
    params: InsightGenerateInsightsParams,
    options?: RequestOptions,
  ): APIPromise<InsightGenerateInsightsResponse> {
    const { end_date, start_date, force_refresh } = params;
    return this._client.post(path`/org/${orgID}/analytics/insights`, {
      query: { end_date, start_date, force_refresh },
      ...options,
    });
  }

  /**
   * Get a paginated list of previously generated insights
   */
  listInsights(
    orgID: string,
    query: InsightListInsightsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InsightListInsightsResponse> {
    return this._client.get(path`/org/${orgID}/analytics/insights`, { query, ...options });
  }
}

export interface InsightGenerateInsightsResponse {
  cached?: boolean;

  executive_summary?: string;

  generated_at?: string;

  issue_rate?: number;

  issues?: Array<InsightGenerateInsightsResponse.Issue>;

  issues_identified?: number;

  organization_id?: string;

  organization_name?: string;

  period?: string;

  recommendations?: Array<InsightGenerateInsightsResponse.Recommendation>;

  routine_rate?: number;

  success_factors?: Array<string>;

  total_calls?: number;
}

export namespace InsightGenerateInsightsResponse {
  export interface Issue {
    count?: number;

    description?: string;

    examples?: Array<Issue.Example>;

    name?: string;

    percentage?: number;

    rank?: number;

    recommendation?: string;
  }

  export namespace Issue {
    export interface Example {
      customer_name?: string;

      incident_cause?: string;

      quote?: string;

      recommendation?: string;

      reference_id?: string;
    }
  }

  export interface Recommendation {
    description?: string;

    /**
     * HIGH, MEDIUM, LOW
     */
    priority?: string;

    title?: string;
  }
}

export interface InsightListInsightsResponse {
  insights?: Array<InsightListInsightsResponse.Insight>;

  limit?: number;

  offset?: number;

  total?: number;
}

export namespace InsightListInsightsResponse {
  export interface Insight {
    id?: string;

    created_at?: string;

    executive_summary?: string;

    issue_rate?: number;

    issues_identified?: number;

    period_end?: string;

    period_start?: string;

    total_calls?: number;
  }
}

export interface InsightGenerateInsightsParams {
  /**
   * End date (YYYY-MM-DD)
   */
  end_date: string;

  /**
   * Start date (YYYY-MM-DD)
   */
  start_date: string;

  /**
   * Force regeneration (skip cache)
   */
  force_refresh?: boolean;
}

export interface InsightListInsightsParams {
  /**
   * Filter by period end date (YYYY-MM-DD)
   */
  end_date?: string;

  /**
   * Number of items per page
   */
  limit?: number;

  /**
   * Number of items to skip
   */
  offset?: number;

  /**
   * Filter by period start date (YYYY-MM-DD)
   */
  start_date?: string;
}

export declare namespace Insights {
  export {
    type InsightGenerateInsightsResponse as InsightGenerateInsightsResponse,
    type InsightListInsightsResponse as InsightListInsightsResponse,
    type InsightGenerateInsightsParams as InsightGenerateInsightsParams,
    type InsightListInsightsParams as InsightListInsightsParams,
  };
}
