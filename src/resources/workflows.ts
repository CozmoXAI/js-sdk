// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Workflows extends APIResource {
  /**
   * Get a single workflow by ID with its latest definition
   */
  retrieve(workflowID: string, options?: RequestOptions): APIPromise<WorkflowRetrieveResponse> {
    return this._client.get(path`/workflows/${workflowID}`, options);
  }

  /**
   * Get a paginated list of workflows with filtering
   */
  list(
    query: WorkflowListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WorkflowListResponse> {
    return this._client.get('/workflows', { query, ...options });
  }
}

export interface WorkflowRetrieveResponse {
  id?: string;

  created_at?: string;

  definition?: Array<number>;

  description?: string;

  is_active?: boolean;

  name?: string;

  published_at?: string;

  trigger_type?: string;

  updated_at?: string;

  version?: number;
}

export interface WorkflowListResponse {
  data?: Array<WorkflowListResponse.Data>;

  meta?: WorkflowListResponse.Meta;
}

export namespace WorkflowListResponse {
  export interface Data {
    id?: string;

    created_at?: string;

    description?: string;

    is_active?: boolean;

    name?: string;

    published_at?: string;

    trigger_type?: string;

    updated_at?: string;

    version?: number;
  }

  export interface Meta {
    page?: number;

    size?: number;

    total?: number;

    total_pages?: number;
  }
}

export interface WorkflowListParams {
  /**
   * Filter by active status
   */
  is_active?: boolean;

  /**
   * Page number
   */
  page?: number;

  /**
   * Search in workflow name and description
   */
  search?: string;

  /**
   * Page size
   */
  size?: number;

  /**
   * Filter by trigger type
   */
  trigger_type?: string;
}

export declare namespace Workflows {
  export {
    type WorkflowRetrieveResponse as WorkflowRetrieveResponse,
    type WorkflowListResponse as WorkflowListResponse,
    type WorkflowListParams as WorkflowListParams,
  };
}
