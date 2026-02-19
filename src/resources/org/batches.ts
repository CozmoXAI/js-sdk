// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RunsAPI from './runs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Batches extends APIResource {
  /**
   * Get a single workflow batch with run statistics
   */
  getWorkflowBatch(
    batchID: string,
    params: BatchGetWorkflowBatchParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponse> {
    const { org_id } = params;
    return this._client.get(path`/org/${org_id}/batches/${batchID}`, options);
  }

  /**
   * List all workflow runs in a batch with pagination
   */
  listWorkflowRuns(
    batchID: string,
    params: BatchListWorkflowRunsParams,
    options?: RequestOptions,
  ): APIPromise<BatchListWorkflowRunsResponse> {
    const { org_id, ...query } = params;
    return this._client.get(path`/org/${org_id}/batches/${batchID}/runs`, { query, ...options });
  }

  /**
   * Update batch status and cascade to all runs
   */
  updateBatchStatus(
    batchID: string,
    params: BatchUpdateBatchStatusParams,
    options?: RequestOptions,
  ): APIPromise<BatchResponse> {
    const { org_id, ...body } = params;
    return this._client.patch(path`/org/${org_id}/batches/${batchID}`, { body, ...options });
  }
}

export interface BatchResponse {
  id?: string;

  created_at?: string;

  created_by?: string;

  name?: string;

  organization_id?: string;

  scheduled_at?: string;

  source_type?: string;

  stats?: BatchResponse.Stats;

  status?: string;

  total_prospects?: number;

  updated_at?: string;

  workflow_id?: string;

  workflow_version_id?: string;

  workflow_version_number?: number;
}

export namespace BatchResponse {
  export interface Stats {
    cancelled_count?: number;

    failed_count?: number;

    finished_count?: number;

    in_progress_count?: number;

    paused_count?: number;

    pending_count?: number;

    total_count?: number;
  }
}

export interface PaginationMetaWorkflowBatches {
  limit?: number;

  page?: number;

  total?: number;

  total_pages?: number;
}

export interface BatchListWorkflowRunsResponse {
  data?: Array<RunsAPI.RunResponse>;

  pagination?: PaginationMetaWorkflowBatches;
}

export interface BatchGetWorkflowBatchParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface BatchListWorkflowRunsParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Query param: Items per page
   */
  limit?: number;

  /**
   * Query param: Page number
   */
  page?: number;

  /**
   * Query param: Filter by status
   */
  status?: string;
}

export interface BatchUpdateBatchStatusParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  status: 'PENDING' | 'PAUSED' | 'CANCELLED';
}

export declare namespace Batches {
  export {
    type BatchResponse as BatchResponse,
    type PaginationMetaWorkflowBatches as PaginationMetaWorkflowBatches,
    type BatchListWorkflowRunsResponse as BatchListWorkflowRunsResponse,
    type BatchGetWorkflowBatchParams as BatchGetWorkflowBatchParams,
    type BatchListWorkflowRunsParams as BatchListWorkflowRunsParams,
    type BatchUpdateBatchStatusParams as BatchUpdateBatchStatusParams,
  };
}
