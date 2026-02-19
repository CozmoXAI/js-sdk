// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class QualityRules extends APIResource {
  /**
   * Create a new quality rule for the organization
   */
  create(
    orgID: string,
    body: QualityRuleCreateParams,
    options?: RequestOptions,
  ): APIPromise<QualityRuleResponse> {
    return this._client.post(path`/org/${orgID}/quality-rules`, { body, ...options });
  }

  /**
   * Get a quality rule by ID
   */
  retrieve(
    ruleID: string,
    params: QualityRuleRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<QualityRuleResponse> {
    const { org_id } = params;
    return this._client.get(path`/org/${org_id}/quality-rules/${ruleID}`, options);
  }

  /**
   * Update an existing quality rule
   */
  update(
    ruleID: string,
    params: QualityRuleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<QualityRuleResponse> {
    const { org_id, ...body } = params;
    return this._client.patch(path`/org/${org_id}/quality-rules/${ruleID}`, { body, ...options });
  }

  /**
   * Get all quality rules (global + organization-specific)
   */
  list(
    orgID: string,
    query: QualityRuleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<QualityRuleListResponse> {
    return this._client.get(path`/org/${orgID}/quality-rules`, { query, ...options });
  }

  /**
   * Delete a quality rule by ID
   */
  delete(ruleID: string, params: QualityRuleDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { org_id } = params;
    return this._client.delete(path`/org/${org_id}/quality-rules/${ruleID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface QualityRuleResponse {
  id?: string;

  created_at?: string;

  is_active?: boolean;

  is_global?: boolean;

  key?: string;

  organization_id?: string;

  penalty?: number;

  prompt?: string;

  updated_at?: string;
}

export interface QualityRuleListResponse {
  data?: Array<QualityRuleResponse>;

  meta?: QualityRuleListResponse.Meta;
}

export namespace QualityRuleListResponse {
  export interface Meta {
    page?: number;

    size?: number;

    total?: number;

    total_pages?: number;
  }
}

export interface QualityRuleCreateParams {
  key: string;

  penalty: number;

  prompt: string;

  is_active?: boolean;
}

export interface QualityRuleRetrieveParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface QualityRuleUpdateParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  is_active?: boolean;

  /**
   * Body param
   */
  key?: string;

  /**
   * Body param
   */
  penalty?: number;

  /**
   * Body param
   */
  prompt?: string;
}

export interface QualityRuleListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Page size
   */
  size?: number;
}

export interface QualityRuleDeleteParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export declare namespace QualityRules {
  export {
    type QualityRuleResponse as QualityRuleResponse,
    type QualityRuleListResponse as QualityRuleListResponse,
    type QualityRuleCreateParams as QualityRuleCreateParams,
    type QualityRuleRetrieveParams as QualityRuleRetrieveParams,
    type QualityRuleUpdateParams as QualityRuleUpdateParams,
    type QualityRuleListParams as QualityRuleListParams,
    type QualityRuleDeleteParams as QualityRuleDeleteParams,
  };
}
