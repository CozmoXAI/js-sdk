// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RunsAPI from '../runs';
import * as BatchesAPI from './batches';
import { BatchCreateParams, BatchListParams, BatchListResponse, Batches } from './batches';
import * as VersionsAPI from './versions';
import { Versions } from './versions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Workflows extends APIResource {
  batches: BatchesAPI.Batches = new BatchesAPI.Batches(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Create a new workflow with initial definition (automatically creates version 1
   * and publishes it)
   */
  create(orgID: string, body: WorkflowCreateParams, options?: RequestOptions): APIPromise<WorkflowResponse> {
    return this._client.post(path`/org/${orgID}/workflows`, { body, ...options });
  }

  /**
   * Get a single workflow by ID with its latest definition
   */
  retrieve(
    workflowID: string,
    params: WorkflowRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<WorkflowResponse> {
    const { org_id } = params;
    return this._client.get(path`/org/${org_id}/workflows/${workflowID}`, options);
  }

  /**
   * Get a paginated list of workflows with filtering
   */
  list(
    orgID: string,
    query: WorkflowListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WorkflowListResponse> {
    return this._client.get(path`/org/${orgID}/workflows`, { query, ...options });
  }

  /**
   * Soft delete a workflow (sets deleted_at timestamp)
   */
  delete(
    workflowID: string,
    params: WorkflowDeleteParams,
    options?: RequestOptions,
  ): APIPromise<WorkflowDeleteResponse> {
    const { org_id } = params;
    return this._client.delete(path`/org/${org_id}/workflows/${workflowID}`, options);
  }

  /**
   * List all workflow runs for a specific workflow with filtering and pagination
   */
  retrieveRuns(
    workflowID: string,
    params: WorkflowRetrieveRunsParams,
    options?: RequestOptions,
  ): APIPromise<RunsAPI.PaginatedRunsExtendedResponse> {
    const { org_id, ...query } = params;
    return this._client.get(path`/org/${org_id}/workflows/${workflowID}/runs`, { query, ...options });
  }

  /**
   * Update the workflow definition, automatically creating a new version
   */
  updateDefinition(
    workflowID: string,
    params: WorkflowUpdateDefinitionParams,
    options?: RequestOptions,
  ): APIPromise<WorkflowResponse> {
    const { org_id, ...body } = params;
    return this._client.put(path`/org/${org_id}/workflows/${workflowID}/definition`, { body, ...options });
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

export type WorkflowDeleteResponse = { [key: string]: string };

export interface WorkflowCreateParams {
  definition: Array<number>;

  name: string;

  trigger_type: string;

  description?: string;

  is_active?: boolean;
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

export interface WorkflowDeleteParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface WorkflowRetrieveRunsParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Query param: Filter by batch ID
   */
  batch_id?: string;

  /**
   * Query param: Filter runs started before this date (RFC3339 format)
   */
  end_date?: string;

  /**
   * Query param: Items per page
   */
  limit?: number;

  /**
   * Query param: Page number
   */
  page?: number;

  /**
   * Query param: Filter by prospect ID
   */
  prospect_id?: string;

  /**
   * Query param: Sort order (started_asc, started_desc, status_asc, status_desc)
   */
  sort?: string;

  /**
   * Query param: Filter runs started after this date (RFC3339 format)
   */
  start_date?: string;

  /**
   * Query param: Filter by status (PENDING, IN_PROGRESS, PAUSED, FINISHED,
   * CANCELLED, FAILED)
   */
  status?: string;

  /**
   * Query param: Filter by workflow version ID
   */
  workflow_version_id?: string;
}

export interface WorkflowUpdateDefinitionParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  definition: Array<number>;
}

Workflows.Batches = Batches;
Workflows.Versions = Versions;

export declare namespace Workflows {
  export {
    type PaginationMetaWorkflows as PaginationMetaWorkflows,
    type WorkflowResponse as WorkflowResponse,
    type WorkflowListResponse as WorkflowListResponse,
    type WorkflowDeleteResponse as WorkflowDeleteResponse,
    type WorkflowCreateParams as WorkflowCreateParams,
    type WorkflowRetrieveParams as WorkflowRetrieveParams,
    type WorkflowListParams as WorkflowListParams,
    type WorkflowDeleteParams as WorkflowDeleteParams,
    type WorkflowRetrieveRunsParams as WorkflowRetrieveRunsParams,
    type WorkflowUpdateDefinitionParams as WorkflowUpdateDefinitionParams,
  };

  export {
    Batches as Batches,
    type BatchListResponse as BatchListResponse,
    type BatchCreateParams as BatchCreateParams,
    type BatchListParams as BatchListParams,
  };

  export { Versions as Versions };
}
