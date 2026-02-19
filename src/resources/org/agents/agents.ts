// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EvalsAPI from './evals';
import {
  Eval,
  EvalCreateParams,
  EvalDeleteParams,
  EvalListParams,
  EvalListResponse,
  EvalUpdateParams,
  Evals,
} from './evals';
import * as SipTrunksAPI from './sip-trunks';
import {
  SipTrunkAddParams,
  SipTrunkAddResponse,
  SipTrunkListParams,
  SipTrunkListResponse,
  SipTrunkRemoveParams,
  SipTrunkRemoveResponse,
  SipTrunks,
} from './sip-trunks';
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
import {
  PaginationMetaUnitTests,
  UnitTestRunLatestParams,
  UnitTestRunLatestResponse,
  UnitTestRuns,
} from './unit-test-runs';
import * as UnitTestsAPI from './unit-tests';
import {
  UnitTest,
  UnitTestCreateParams,
  UnitTestDeleteParams,
  UnitTestDeleteResponse,
  UnitTestGenerateParams,
  UnitTestGenerateResponse,
  UnitTestListParams,
  UnitTestListResponse,
  UnitTestUpdateParams,
  UnitTests,
} from './unit-tests';
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

  /**
   * Get evaluation runs with pagination
   */
  listEvalRuns(
    orgID: string,
    query: AgentListEvalRunsParams,
    options?: RequestOptions,
  ): APIPromise<AgentListEvalRunsResponse> {
    return this._client.get(path`/org/${orgID}/agents/eval-runs`, { query, ...options });
  }

  /**
   * Trigger execution of specific unit tests
   */
  runSpecificTests(
    agentID: string,
    params: AgentRunSpecificTestsParams,
    options?: RequestOptions,
  ): APIPromise<RunTests> {
    const { org_id, ...body } = params;
    return this._client.post(path`/org/${org_id}/agents/${agentID}/run-specific-tests`, { body, ...options });
  }

  /**
   * Trigger execution of all unit tests for an agent
   */
  runTests(agentID: string, params: AgentRunTestsParams, options?: RequestOptions): APIPromise<RunTests> {
    const { org_id } = params;
    return this._client.post(path`/org/${org_id}/agents/${agentID}/run-tests`, options);
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

export interface AgentListEvalRunsResponse {
  data?: Array<AgentListEvalRunsResponse.Data>;

  meta?: PaginationMetaEvalsPostcall;
}

export namespace AgentListEvalRunsResponse {
  export interface Data {
    id?: number;

    agent_id?: string;

    call_id?: string;

    created_at?: string;

    eval_id?: number;

    eval_title?: string;

    has_passed?: boolean;

    org_id?: string;

    reasoning?: string;
  }
}

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

export interface AgentListEvalRunsParams {
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

export interface AgentRunSpecificTestsParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  unit_test_ids: Array<string>;
}

export interface AgentRunTestsParams {
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
    type AgentListEvalRunsResponse as AgentListEvalRunsResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentRetrieveParams as AgentRetrieveParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentDeleteParams as AgentDeleteParams,
    type AgentListEvalRunsParams as AgentListEvalRunsParams,
    type AgentRunSpecificTestsParams as AgentRunSpecificTestsParams,
    type AgentRunTestsParams as AgentRunTestsParams,
  };

  export {
    SipTrunks as SipTrunks,
    type SipTrunkListResponse as SipTrunkListResponse,
    type SipTrunkAddResponse as SipTrunkAddResponse,
    type SipTrunkRemoveResponse as SipTrunkRemoveResponse,
    type SipTrunkListParams as SipTrunkListParams,
    type SipTrunkAddParams as SipTrunkAddParams,
    type SipTrunkRemoveParams as SipTrunkRemoveParams,
  };

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

  export {
    UnitTestRuns as UnitTestRuns,
    type PaginationMetaUnitTests as PaginationMetaUnitTests,
    type UnitTestRunLatestResponse as UnitTestRunLatestResponse,
    type UnitTestRunLatestParams as UnitTestRunLatestParams,
  };

  export {
    UnitTests as UnitTests,
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

  export {
    Evals as Evals,
    type Eval as Eval,
    type EvalListResponse as EvalListResponse,
    type EvalCreateParams as EvalCreateParams,
    type EvalUpdateParams as EvalUpdateParams,
    type EvalListParams as EvalListParams,
    type EvalDeleteParams as EvalDeleteParams,
  };
}
