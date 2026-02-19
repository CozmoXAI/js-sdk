// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class UnitTestRuns extends APIResource {
  /**
   * Get the latest test run results for an agent
   */
  latest(
    agentID: string,
    params: UnitTestRunLatestParams,
    options?: RequestOptions,
  ): APIPromise<UnitTestRunLatestResponse> {
    const { org_id, ...query } = params;
    return this._client.get(path`/org/${org_id}/agents/${agentID}/unit-test-runs/latest`, {
      query,
      ...options,
    });
  }
}

export interface PaginationMetaUnitTests {
  page?: number;

  size?: number;

  total?: number;

  total_pages?: number;
}

export interface UnitTestRunLatestResponse {
  data?: Array<UnitTestRunLatestResponse.Data>;

  meta?: PaginationMetaUnitTests;
}

export namespace UnitTestRunLatestResponse {
  export interface Data {
    id?: string;

    agent_id?: string;

    answer_prompt?: string;

    batch_id?: string;

    created_at?: string;

    details?: string;

    is_success?: boolean;

    organization_id?: string;

    question_prompt?: string;

    run_at?: string;

    test_title?: string;

    title?: string;

    unit_test_id?: string;
  }
}

export interface UnitTestRunLatestParams {
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

export declare namespace UnitTestRuns {
  export {
    type PaginationMetaUnitTests as PaginationMetaUnitTests,
    type UnitTestRunLatestResponse as UnitTestRunLatestResponse,
    type UnitTestRunLatestParams as UnitTestRunLatestParams,
  };
}
