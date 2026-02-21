// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BatchesAPI from './batches';
import { Batches } from './batches';
import * as VersionsAPI from './versions';
import { Versions } from './versions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Workflows extends APIResource {
  batches: BatchesAPI.Batches = new BatchesAPI.Batches(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Get a single workflow by ID with its latest definition
   */
  retrieve(
    workflowID: string,
    params: WorkflowRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<WorkflowResponse> {
    const { org_id } = params;
    return this._client.get(path`/org/${org_id}/workflows/${workflowID}`, { ...options, __security: {} });
  }

  /**
   * Get a paginated list of workflows with filtering
   */
  list(
    orgID: string,
    query: WorkflowListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WorkflowListResponse> {
    return this._client.get(path`/org/${orgID}/workflows`, { query, ...options, __security: {} });
  }
}

export interface PaginationMetaWorkflows {
  page?: number;

  size?: number;

  total?: number;

  total_pages?: number;
}

export interface WorkflowResponse {
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

  meta?: PaginationMetaWorkflows;
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
}

export interface WorkflowRetrieveParams {
  /**
   * Organization ID
   */
  org_id: string;
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

Workflows.Batches = Batches;
Workflows.Versions = Versions;

export declare namespace Workflows {
  export {
    type PaginationMetaWorkflows as PaginationMetaWorkflows,
    type WorkflowResponse as WorkflowResponse,
    type WorkflowListResponse as WorkflowListResponse,
    type WorkflowRetrieveParams as WorkflowRetrieveParams,
    type WorkflowListParams as WorkflowListParams,
  };

  export { Batches as Batches };

  export { Versions as Versions };
}
