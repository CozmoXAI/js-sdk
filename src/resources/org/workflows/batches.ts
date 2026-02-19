// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BatchesAPI from '../batches';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Batches extends APIResource {
  /**
   * Create a new workflow batch with runs for each prospect
   */
  create(
    workflowID: string,
    params: BatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<BatchesAPI.BatchResponse> {
    const { org_id, ...body } = params;
    return this._client.post(path`/org/${org_id}/workflows/${workflowID}/batches`, { body, ...options });
  }

  /**
   * List all batches for a workflow with pagination
   */
  list(workflowID: string, params: BatchListParams, options?: RequestOptions): APIPromise<BatchListResponse> {
    const { org_id, ...query } = params;
    return this._client.get(path`/org/${org_id}/workflows/${workflowID}/batches`, { query, ...options });
  }
}

export interface BatchListResponse {
  data?: Array<BatchesAPI.BatchResponse>;

  pagination?: BatchesAPI.PaginationMetaWorkflowBatches;
}

export interface BatchCreateParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  prospect_ids?: Array<string>;

  /**
   * Body param
   */
  prospect_list_id?: string;

  /**
   * Body param
   */
  scheduled_at?: string;
}

export interface BatchListParams {
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
}

export declare namespace Batches {
  export {
    type BatchListResponse as BatchListResponse,
    type BatchCreateParams as BatchCreateParams,
    type BatchListParams as BatchListParams,
  };
}
