// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EvalsAPI from './evals';
import { Eval, Evals } from './evals';
import * as SipTrunksAPI from './sip-trunks';
import { SipTrunks } from './sip-trunks';
import * as ToolsAPI from './tools';
import {
  AgentTool,
  ToolAddParams,
  ToolAddResponse,
  ToolListParams,
  ToolListResponse,
  ToolRemoveParams,
  ToolRemoveResponse,
  ToolUpdateParams,
  ToolUpdateResponse,
  Tools,
} from './tools';
import * as UnitTestRunsAPI from './unit-test-runs';
import { PaginationMetaUnitTests, UnitTestRuns } from './unit-test-runs';
import * as UnitTestsAPI from './unit-tests';
import { UnitTest, UnitTests } from './unit-tests';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Agents extends APIResource {
  sipTrunks: SipTrunksAPI.SipTrunks = new SipTrunksAPI.SipTrunks(this._client);
  tools: ToolsAPI.Tools = new ToolsAPI.Tools(this._client);
  unitTestRuns: UnitTestRunsAPI.UnitTestRuns = new UnitTestRunsAPI.UnitTestRuns(this._client);
  unitTests: UnitTestsAPI.UnitTests = new UnitTestsAPI.UnitTests(this._client);
  evals: EvalsAPI.Evals = new EvalsAPI.Evals(this._client);

  /**
   * Create a new AI agent in the organization
   */
  create(orgID: string, body: AgentCreateParams, options?: RequestOptions): APIPromise<Agent> {
    return this._client.post(path`/org/${orgID}/agents`, { body, ...options });
  }

  /**
   * Get agent details by ID
   */
  retrieve(agentID: string, params: AgentRetrieveParams, options?: RequestOptions): APIPromise<Agent> {
    const { org_id } = params;
    return this._client.get(path`/org/${org_id}/agents/${agentID}`, options);
  }

  /**
   * Update agent details (partial update)
   */
  update(agentID: string, params: AgentUpdateParams, options?: RequestOptions): APIPromise<Agent> {
    const { org_id, ...body } = params;
    return this._client.patch(path`/org/${org_id}/agents/${agentID}`, { body, ...options });
  }

  /**
   * Get a paginated list of agents for the organization
   */
  list(
    orgID: string,
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListResponse> {
    return this._client.get(path`/org/${orgID}/agents`, { query, ...options });
  }

  /**
   * Delete an agent by ID
   */
  delete(
    agentID: string,
    params: AgentDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AgentDeleteResponse> {
    const { org_id } = params;
    return this._client.delete(path`/org/${org_id}/agents/${agentID}`, options);
  }
}

export interface Agent {
  id?: string;

  allowed_sip_trunks?: Array<string>;

  background_sound?: Array<number>;

  created_at?: string;

  goodbye_config?: Array<number>;

  greeting_config?: Array<number>;

  llm_config?: Array<number>;

  name?: string;

  organization_id?: string;

  plugins?: Array<number>;

  precall_webhook?: Array<number>;

  prompt_template?: string;

  tools?: Array<ToolsAPI.AgentTool>;

  transcriber_config?: Array<number>;

  type?: string;

  updated_at?: string;

  vad_config?: Array<number>;

  voice_config?: Array<number>;
}

export interface BackgroundSoundConfig {
  file: string;

  volume?: number;
}

export interface GoodbyeConfig {
  enabled?: boolean;

  message?: string;
}

export interface PaginationMetaEvalsPostcall {
  page?: number;

  size?: number;

  total?: number;

  total_pages?: number;
}

export interface RecallWebhook {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH';

  url: string;

  body_template?: { [key: string]: unknown };

  headers?: { [key: string]: string };

  timeout_seconds?: number;
}

export interface RunTests {
  message?: string;

  workflow_id?: string;
}

export interface AgentListResponse {
  data?: Array<AgentListResponse.Data>;

  meta?: AgentListResponse.Meta;
}

export namespace AgentListResponse {
  export interface Data {
    id?: string;

    created_at?: string;

    name?: string;

    type?: string;

    updated_at?: string;
  }

  export interface Meta {
    page?: number;

    size?: number;

    total?: number;

    total_pages?: number;
  }
}

export type AgentDeleteResponse = { [key: string]: string };

export interface AgentCreateParams {
  name: string;

  prompt_template: string;

  type: 'voice' | 'chat' | 'video';

  allowed_sip_trunks?: Array<string>;

  background_sound?: BackgroundSoundConfig;

  goodbye_config?: GoodbyeConfig;

  greeting_config?: { [key: string]: unknown };

  llm_config?: { [key: string]: unknown };

  plugins?: Array<unknown>;

  precall_webhook?: RecallWebhook;

  transcriber_config?: { [key: string]: unknown };

  vad_config?: { [key: string]: unknown };

  voice_config?: { [key: string]: unknown };
}

export interface AgentRetrieveParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface AgentUpdateParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  allowed_sip_trunks?: Array<string>;

  /**
   * Body param
   */
  background_sound?: BackgroundSoundConfig;

  /**
   * Body param
   */
  goodbye_config?: GoodbyeConfig;

  /**
   * Body param
   */
  greeting_config?: { [key: string]: unknown };

  /**
   * Body param
   */
  llm_config?: { [key: string]: unknown };

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  plugins?: Array<unknown>;

  /**
   * Body param
   */
  precall_webhook?: RecallWebhook;

  /**
   * Body param
   */
  prompt_template?: string;

  /**
   * Body param
   */
  transcriber_config?: { [key: string]: unknown };

  /**
   * Body param
   */
  type?: 'voice' | 'chat' | 'video';

  /**
   * Body param
   */
  vad_config?: { [key: string]: unknown };

  /**
   * Body param
   */
  voice_config?: { [key: string]: unknown };
}

export interface AgentListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Search by agent name
   */
  search?: string;

  /**
   * Page size
   */
  size?: number;

  /**
   * Filter by agent type (voice or chat)
   */
  type?: string;
}

export interface AgentDeleteParams {
  /**
   * Organization ID
   */
  org_id: string;
}

Agents.SipTrunks = SipTrunks;
Agents.Tools = Tools;
Agents.UnitTestRuns = UnitTestRuns;
Agents.UnitTests = UnitTests;
Agents.Evals = Evals;

export declare namespace Agents {
  export {
    type Agent as Agent,
    type BackgroundSoundConfig as BackgroundSoundConfig,
    type GoodbyeConfig as GoodbyeConfig,
    type PaginationMetaEvalsPostcall as PaginationMetaEvalsPostcall,
    type RecallWebhook as RecallWebhook,
    type RunTests as RunTests,
    type AgentListResponse as AgentListResponse,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentRetrieveParams as AgentRetrieveParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentDeleteParams as AgentDeleteParams,
  };

  export { SipTrunks as SipTrunks };

  export {
    Tools as Tools,
    type AgentTool as AgentTool,
    type ToolUpdateResponse as ToolUpdateResponse,
    type ToolListResponse as ToolListResponse,
    type ToolAddResponse as ToolAddResponse,
    type ToolRemoveResponse as ToolRemoveResponse,
    type ToolUpdateParams as ToolUpdateParams,
    type ToolListParams as ToolListParams,
    type ToolAddParams as ToolAddParams,
    type ToolRemoveParams as ToolRemoveParams,
  };

  export { UnitTestRuns as UnitTestRuns, type PaginationMetaUnitTests as PaginationMetaUnitTests };

  export { UnitTests as UnitTests, type UnitTest as UnitTest };

  export { Evals as Evals, type Eval as Eval };
}
