// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from './agents';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Evals extends APIResource {
  /**
   * Create a new evaluation for an agent
   */
  create(orgID: string, body: EvalCreateParams, options?: RequestOptions): APIPromise<Eval> {
    return this._client.post(path`/org/${orgID}/agents/evals`, { body, ...options });
  }

  /**
   * Update an existing evaluation
   */
  update(evalID: number, params: EvalUpdateParams, options?: RequestOptions): APIPromise<Eval> {
    const { org_id, ...body } = params;
    return this._client.put(path`/org/${org_id}/agents/evals/${evalID}`, { body, ...options });
  }

  /**
   * Get all evaluations for a specific agent
   */
  list(orgID: string, query: EvalListParams, options?: RequestOptions): APIPromise<EvalListResponse> {
    return this._client.get(path`/org/${orgID}/agents/evals`, { query, ...options });
  }

  /**
   * Delete an evaluation by ID
   */
  delete(evalID: number, params: EvalDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { org_id } = params;
    return this._client.delete(path`/org/${org_id}/agents/evals/${evalID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Eval {
  id?: number;

  agent_id?: string;

  category?: string;

  created_at?: string;

  org_id?: string;

  prompt?: string;

  score?: number;

  title?: string;
}

export interface EvalListResponse {
  data?: Array<Eval>;

  meta?: AgentsAPI.PaginationMetaEvalsPostcall;
}

export interface EvalCreateParams {
  agent_id: string;

  category: string;

  prompt: string;

  score: number;

  title: string;
}

export interface EvalUpdateParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  category?: string;

  /**
   * Body param
   */
  prompt?: string;

  /**
   * Body param
   */
  score?: number;

  /**
   * Body param
   */
  title?: string;
}

export interface EvalListParams {
  /**
   * Agent ID
   */
  agentId: string;

  /**
   * Page number
   */
  page?: number;

  /**
   * Page size
   */
  size?: number;
}

export interface EvalDeleteParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export declare namespace Evals {
  export {
    type Eval as Eval,
    type EvalListResponse as EvalListResponse,
    type EvalCreateParams as EvalCreateParams,
    type EvalUpdateParams as EvalUpdateParams,
    type EvalListParams as EvalListParams,
    type EvalDeleteParams as EvalDeleteParams,
  };
}
