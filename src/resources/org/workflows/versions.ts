// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as WorkflowsAPI from './workflows';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Versions extends APIResource {
  /**
   * Get a specific version of a workflow with its definition
   */
  retrieve(
    version: number,
    params: VersionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<VersionRetrieveResponse> {
    const { org_id, workflow_id } = params;
    return this._client.get(path`/org/${org_id}/workflows/${workflow_id}/versions/${version}`, options);
  }

  /**
   * Get a paginated list of all versions for a workflow
   */
  list(
    workflowID: string,
    params: VersionListParams,
    options?: RequestOptions,
  ): APIPromise<VersionListResponse> {
    const { org_id, ...query } = params;
    return this._client.get(path`/org/${org_id}/workflows/${workflowID}/versions`, { query, ...options });
  }
}

export interface VersionRetrieveResponse {
  id?: string;

  created_at?: string;

  created_by?: string;

  definition?: Array<number>;

  version?: number;

  workflow_id?: string;
}

export interface VersionListResponse {
  data?: Array<VersionListResponse.Data>;

  meta?: WorkflowsAPI.PaginationMetaWorkflows;
}

export namespace VersionListResponse {
  export interface Data {
    id?: string;

    created_at?: string;

    created_by?: string;

    version?: number;
  }
}

export interface VersionRetrieveParams {
  /**
   * Organization ID
   */
  org_id: string;

  /**
   * Workflow ID
   */
  workflow_id: string;
}

export interface VersionListParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Query param: Page number
   */
  page?: number;

  /**
   * Query param: Page size
   */
  size?: number;
}

export declare namespace Versions {
  export {
    type VersionRetrieveResponse as VersionRetrieveResponse,
    type VersionListResponse as VersionListResponse,
    type VersionRetrieveParams as VersionRetrieveParams,
    type VersionListParams as VersionListParams,
  };
}
