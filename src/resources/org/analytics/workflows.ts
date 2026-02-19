// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnalyticsAPI from './analytics';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Workflows extends APIResource {
  /**
   * Returns detailed analytics for a specific workflow
   */
  getWorkflowAnalytics(
    id: string,
    params: WorkflowGetWorkflowAnalyticsParams,
    options?: RequestOptions,
  ): APIPromise<WorkflowGetWorkflowAnalyticsResponse> {
    const { org_id, ...query } = params;
    return this._client.get(path`/org/${org_id}/analytics/workflows/${id}`, { query, ...options });
  }

  /**
   * Returns workflow run stats for all workflows
   */
  listWorkflows(
    orgID: string,
    query: WorkflowListWorkflowsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WorkflowListWorkflowsResponse> {
    return this._client.get(path`/org/${orgID}/analytics/workflows`, { query, ...options });
  }
}

export interface WorkflowGetWorkflowAnalyticsResponse {
  avg_duration_seconds?: number;

  completed?: number;

  completion_rate_pct?: number;

  failed?: number;

  pending?: number;

  period?: AnalyticsAPI.AnalyticsPeriod;

  running?: number;

  total_runs?: number;

  workflow_id?: string;

  workflow_name?: string;
}

export interface WorkflowListWorkflowsResponse {
  period?: AnalyticsAPI.AnalyticsPeriod;

  workflows?: Array<WorkflowListWorkflowsResponse.Workflow>;
}

export namespace WorkflowListWorkflowsResponse {
  export interface Workflow {
    completed?: number;

    completion_rate_pct?: number;

    failed?: number;

    pending?: number;

    running?: number;

    total_runs?: number;

    workflow_id?: string;

    workflow_name?: string;
  }
}

export interface WorkflowGetWorkflowAnalyticsParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Query param: End date (ISO 8601)
   */
  end_date?: string;

  /**
   * Query param: Start date (ISO 8601)
   */
  start_date?: string;
}

export interface WorkflowListWorkflowsParams {
  /**
   * End date (ISO 8601)
   */
  end_date?: string;

  /**
   * Start date (ISO 8601)
   */
  start_date?: string;
}

export declare namespace Workflows {
  export {
    type WorkflowGetWorkflowAnalyticsResponse as WorkflowGetWorkflowAnalyticsResponse,
    type WorkflowListWorkflowsResponse as WorkflowListWorkflowsResponse,
    type WorkflowGetWorkflowAnalyticsParams as WorkflowGetWorkflowAnalyticsParams,
    type WorkflowListWorkflowsParams as WorkflowListWorkflowsParams,
  };
}
