// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CallsAPI from './calls';
import {
  CallGetCallCostsParams,
  CallGetCallCostsResponse,
  CallListCallsByHourParams,
  CallListCallsByHourResponse,
  CallListCallsParams,
  CallListCallsResponse,
  Calls,
} from './calls';
import * as InsightsAPI from './insights';
import {
  InsightGenerateInsightsParams,
  InsightGenerateInsightsResponse,
  InsightListInsightsParams,
  InsightListInsightsResponse,
  Insights,
} from './insights';
import * as WorkflowsAPI from './workflows';
import {
  WorkflowGetWorkflowAnalyticsParams,
  WorkflowGetWorkflowAnalyticsResponse,
  WorkflowListWorkflowsParams,
  WorkflowListWorkflowsResponse,
  Workflows,
} from './workflows';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Analytics extends APIResource {
  calls: CallsAPI.Calls = new CallsAPI.Calls(this._client);
  insights: InsightsAPI.Insights = new InsightsAPI.Insights(this._client);
  workflows: WorkflowsAPI.Workflows = new WorkflowsAPI.Workflows(this._client);

  /**
   * Returns overview metrics for the dashboard
   */
  getDashboardSummary(
    orgID: string,
    query: AnalyticsGetDashboardSummaryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsGetDashboardSummaryResponse> {
    return this._client.get(path`/org/${orgID}/analytics/dashboard`, { query, ...options });
  }

  /**
   * Returns prospect status distribution, geographic data, and growth
   */
  getProspectAnalytics(
    orgID: string,
    query: AnalyticsGetProspectAnalyticsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsGetProspectAnalyticsResponse> {
    return this._client.get(path`/org/${orgID}/analytics/prospects`, { query, ...options });
  }

  /**
   * Returns performance metrics for all agents
   */
  listAgents(
    orgID: string,
    query: AnalyticsListAgentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsListAgentsResponse> {
    return this._client.get(path`/org/${orgID}/analytics/agents`, { query, ...options });
  }

  /**
   * Returns performance metrics for workflow batches
   */
  listBatches(
    orgID: string,
    query: AnalyticsListBatchesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsListBatchesResponse> {
    return this._client.get(path`/org/${orgID}/analytics/batches`, { query, ...options });
  }
}

export interface AnalyticsPeriod {
  end?: string;

  start?: string;
}

export interface AnalyticsGetDashboardSummaryResponse {
  active_workflows?: number;

  calls_in_period?: number;

  current_balance?: string;

  period?: AnalyticsPeriod;

  total_agents?: number;

  total_call_minutes?: number;

  total_prospects?: number;
}

export interface AnalyticsGetProspectAnalyticsResponse {
  by_country?: Array<AnalyticsGetProspectAnalyticsResponse.ByCountry>;

  growth?: Array<AnalyticsGetProspectAnalyticsResponse.Growth>;

  period?: AnalyticsPeriod;

  status_distribution?: Array<AnalyticsGetProspectAnalyticsResponse.StatusDistribution>;
}

export namespace AnalyticsGetProspectAnalyticsResponse {
  export interface ByCountry {
    count?: number;

    country?: string;
  }

  export interface Growth {
    date?: string;

    new_prospects?: number;
  }

  export interface StatusDistribution {
    count?: number;

    percentage?: number;

    status?: string;
  }
}

export interface AnalyticsListAgentsResponse {
  agents?: Array<AnalyticsListAgentsResponse.Agent>;

  outcome_rates?: Array<AnalyticsListAgentsResponse.OutcomeRate>;

  period?: AnalyticsPeriod;
}

export namespace AnalyticsListAgentsResponse {
  export interface Agent {
    agent_id?: string;

    agent_name?: string;

    avg_duration_seconds?: number;

    completed_calls?: number;

    total_calls?: number;

    total_cost_usd?: number;
  }

  export interface OutcomeRate {
    agent_id?: string;

    agent_name?: string;

    outcome_key?: string;

    positive?: number;

    positive_rate_pct?: number;

    total?: number;
  }
}

export type AnalyticsListBatchesResponse =
  Array<AnalyticsListBatchesResponse.AnalyticsListBatchesResponseItem>;

export namespace AnalyticsListBatchesResponse {
  export interface AnalyticsListBatchesResponseItem {
    batch_id?: string;

    batch_name?: string;

    completed?: number;

    completion_rate_pct?: number;

    created_at?: string;

    failed?: number;

    total_prospects?: number;

    workflow_name?: string;
  }
}

export interface AnalyticsGetDashboardSummaryParams {
  /**
   * End date (ISO 8601)
   */
  end_date?: string;

  /**
   * Start date (ISO 8601)
   */
  start_date?: string;
}

export interface AnalyticsGetProspectAnalyticsParams {
  /**
   * End date (ISO 8601)
   */
  end_date?: string;

  /**
   * Start date (ISO 8601)
   */
  start_date?: string;
}

export interface AnalyticsListAgentsParams {
  /**
   * End date (ISO 8601)
   */
  end_date?: string;

  /**
   * Start date (ISO 8601)
   */
  start_date?: string;
}

export interface AnalyticsListBatchesParams {
  /**
   * End date (ISO 8601)
   */
  end_date?: string;

  /**
   * Start date (ISO 8601)
   */
  start_date?: string;
}

Analytics.Calls = Calls;
Analytics.Insights = Insights;
Analytics.Workflows = Workflows;

export declare namespace Analytics {
  export {
    type AnalyticsPeriod as AnalyticsPeriod,
    type AnalyticsGetDashboardSummaryResponse as AnalyticsGetDashboardSummaryResponse,
    type AnalyticsGetProspectAnalyticsResponse as AnalyticsGetProspectAnalyticsResponse,
    type AnalyticsListAgentsResponse as AnalyticsListAgentsResponse,
    type AnalyticsListBatchesResponse as AnalyticsListBatchesResponse,
    type AnalyticsGetDashboardSummaryParams as AnalyticsGetDashboardSummaryParams,
    type AnalyticsGetProspectAnalyticsParams as AnalyticsGetProspectAnalyticsParams,
    type AnalyticsListAgentsParams as AnalyticsListAgentsParams,
    type AnalyticsListBatchesParams as AnalyticsListBatchesParams,
  };

  export {
    Calls as Calls,
    type CallGetCallCostsResponse as CallGetCallCostsResponse,
    type CallListCallsResponse as CallListCallsResponse,
    type CallListCallsByHourResponse as CallListCallsByHourResponse,
    type CallGetCallCostsParams as CallGetCallCostsParams,
    type CallListCallsParams as CallListCallsParams,
    type CallListCallsByHourParams as CallListCallsByHourParams,
  };

  export {
    Insights as Insights,
    type InsightGenerateInsightsResponse as InsightGenerateInsightsResponse,
    type InsightListInsightsResponse as InsightListInsightsResponse,
    type InsightGenerateInsightsParams as InsightGenerateInsightsParams,
    type InsightListInsightsParams as InsightListInsightsParams,
  };

  export {
    Workflows as Workflows,
    type WorkflowGetWorkflowAnalyticsResponse as WorkflowGetWorkflowAnalyticsResponse,
    type WorkflowListWorkflowsResponse as WorkflowListWorkflowsResponse,
    type WorkflowGetWorkflowAnalyticsParams as WorkflowGetWorkflowAnalyticsParams,
    type WorkflowListWorkflowsParams as WorkflowListWorkflowsParams,
  };
}
