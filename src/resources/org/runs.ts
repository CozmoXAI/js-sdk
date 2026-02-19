// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RunsAPI from './runs';
import * as BatchesAPI from './batches';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Runs extends APIResource {
  /**
   * Get a single workflow run with prospect details
   */
  retrieve(runID: string, params: RunRetrieveParams, options?: RequestOptions): APIPromise<RunResponse> {
    const { org_id } = params;
    return this._client.get(path`/org/${org_id}/runs/${runID}`, options);
  }

  /**
   * List all workflow runs within an organization with filtering and pagination
   */
  list(
    orgID: string,
    query: RunListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaginatedRunsExtendedResponse> {
    return this._client.get(path`/org/${orgID}/runs`, { query, ...options });
  }
}

export interface PaginatedRunsExtendedResponse {
  data?: Array<PaginatedRunsExtendedResponse.Data>;

  pagination?: BatchesAPI.PaginationMetaWorkflowBatches;
}

export namespace PaginatedRunsExtendedResponse {
  export interface Data {
    id?: string;

    batch_id?: string;

    batch_name?: string;

    current_step_id?: string;

    ended_at?: string;

    prospect?: RunsAPI.ProspectInfo;

    prospect_id?: string;

    started_at?: string;

    status?: string;

    workflow_id?: string;

    workflow_name?: string;

    workflow_version_id?: string;
  }
}

export interface ProspectInfo {
  email?: string;

  first_name?: string;

  last_name?: string;

  phone?: string;
}

export interface RunResponse {
  id?: string;

  batch_id?: string;

  current_step_id?: string;

  ended_at?: string;

  prospect?: ProspectInfo;

  prospect_id?: string;

  started_at?: string;

  status?: string;

  workflow_id?: string;

  workflow_version_id?: string;
}

export interface RunRetrieveParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface RunListParams {
  /**
   * Filter by batch ID
   */
  batch_id?: string;

  /**
   * Filter runs started before this date (RFC3339 format)
   */
  end_date?: string;

  /**
   * Items per page
   */
  limit?: number;

  /**
   * Page number
   */
  page?: number;

  /**
   * Filter by prospect ID
   */
  prospect_id?: string;

  /**
   * Sort order (started_asc, started_desc, status_asc, status_desc, workflow_asc,
   * workflow_desc)
   */
  sort?: string;

  /**
   * Filter runs started after this date (RFC3339 format)
   */
  start_date?: string;

  /**
   * Filter by status (PENDING, IN_PROGRESS, PAUSED, FINISHED, CANCELLED, FAILED)
   */
  status?: string;

  /**
   * Filter by workflow ID
   */
  workflow_id?: string;

  /**
   * Filter by workflow version ID
   */
  workflow_version_id?: string;
}

export declare namespace Runs {
  export {
    type PaginatedRunsExtendedResponse as PaginatedRunsExtendedResponse,
    type ProspectInfo as ProspectInfo,
    type RunResponse as RunResponse,
    type RunRetrieveParams as RunRetrieveParams,
    type RunListParams as RunListParams,
  };
}
