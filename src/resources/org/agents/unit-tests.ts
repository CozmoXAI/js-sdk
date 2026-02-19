// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UnitTestRunsAPI from './unit-test-runs';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class UnitTests extends APIResource {
  /**
   * Create a new unit test for an agent
   */
  create(agentID: string, params: UnitTestCreateParams, options?: RequestOptions): APIPromise<UnitTest> {
    const { org_id, ...body } = params;
    return this._client.post(path`/org/${org_id}/agents/${agentID}/unit-tests`, { body, ...options });
  }

  /**
   * Update an existing unit test
   */
  update(testID: string, params: UnitTestUpdateParams, options?: RequestOptions): APIPromise<UnitTest> {
    const { org_id, agent_id, ...body } = params;
    return this._client.put(path`/org/${org_id}/agents/${agent_id}/unit-tests/${testID}`, {
      body,
      ...options,
    });
  }

  /**
   * Get all unit tests for a specific agent
   */
  list(
    agentID: string,
    params: UnitTestListParams,
    options?: RequestOptions,
  ): APIPromise<UnitTestListResponse> {
    const { org_id, ...query } = params;
    return this._client.get(path`/org/${org_id}/agents/${agentID}/unit-tests`, { query, ...options });
  }

  /**
   * Delete multiple unit tests by IDs
   */
  delete(
    agentID: string,
    params: UnitTestDeleteParams,
    options?: RequestOptions,
  ): APIPromise<UnitTestDeleteResponse> {
    const { org_id, ...body } = params;
    return this._client.post(path`/org/${org_id}/agents/${agentID}/unit-tests/delete`, { body, ...options });
  }

  /**
   * Auto-generate unit tests for an agent using AI
   */
  generate(
    agentID: string,
    params: UnitTestGenerateParams,
    options?: RequestOptions,
  ): APIPromise<UnitTestGenerateResponse> {
    const { org_id, ...body } = params;
    return this._client.post(path`/org/${org_id}/agents/${agentID}/unit-tests/generate`, {
      body,
      ...options,
    });
  }
}

export interface UnitTest {
  id?: string;

  agent_id?: string;

  answer_prompt?: string;

  created_at?: string;

  function_tool_assertion?: string;

  organization_id?: string;

  question_prompt?: string;

  question_variance?: string;

  title?: string;

  updated_at?: string;

  yaml_config?: string;
}

export interface UnitTestListResponse {
  data?: Array<UnitTest>;

  meta?: UnitTestRunsAPI.PaginationMetaUnitTests;
}

export type UnitTestDeleteResponse = { [key: string]: unknown };

export type UnitTestGenerateResponse = Array<UnitTest>;

export interface UnitTestCreateParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  answer_prompt: string;

  /**
   * Body param
   */
  question_prompt: string;

  /**
   * Body param
   */
  question_variance: 'low' | 'med' | 'high';

  /**
   * Body param
   */
  function_tool_assertion?: string;

  /**
   * Body param
   */
  title?: string;

  /**
   * Body param
   */
  yaml_config?: string;
}

export interface UnitTestUpdateParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Path param: Agent ID
   */
  agent_id: string;

  /**
   * Body param
   */
  answer_prompt?: string;

  /**
   * Body param
   */
  function_tool_assertion?: string;

  /**
   * Body param
   */
  question_prompt?: string;

  /**
   * Body param
   */
  question_variance?: 'low' | 'med' | 'high';

  /**
   * Body param
   */
  title?: string;

  /**
   * Body param
   */
  yaml_config?: string;
}

export interface UnitTestListParams {
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

export interface UnitTestDeleteParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  ids: Array<string>;
}

export interface UnitTestGenerateParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  count?: number;
}

export declare namespace UnitTests {
  export {
    type UnitTest as UnitTest,
    type UnitTestListResponse as UnitTestListResponse,
    type UnitTestDeleteResponse as UnitTestDeleteResponse,
    type UnitTestGenerateResponse as UnitTestGenerateResponse,
    type UnitTestCreateParams as UnitTestCreateParams,
    type UnitTestUpdateParams as UnitTestUpdateParams,
    type UnitTestListParams as UnitTestListParams,
    type UnitTestDeleteParams as UnitTestDeleteParams,
    type UnitTestGenerateParams as UnitTestGenerateParams,
  };
}
