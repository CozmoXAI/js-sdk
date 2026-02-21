// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import {
  AgentCreateParams,
  AgentDeleteParams,
  AgentDeleteResponse,
  AgentListParams,
  AgentListResponse,
  AgentResponse,
  AgentRetrieveParams,
  AgentUpdateParams,
  Agents,
  BackgroundSoundConfig,
  ExtraConfig,
  GoodbyeConfig,
  GreetingConfig,
  LlmConfig,
  RoomDurationConfig,
  TranscriberConfig,
  VadConfig,
  VoiceConfig,
} from './agents';
import * as CallsAPI from './calls';
import { CallListParams, CallListResponse, CallRetrieveParams, CallRetrieveResponse, Calls } from './calls';
import * as WorkflowsAPI from './workflows';
import {
  WorkflowListParams,
  WorkflowListResponse,
  WorkflowRetrieveParams,
  WorkflowRetrieveResponse,
  Workflows,
} from './workflows';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Org extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);
  calls: CallsAPI.Calls = new CallsAPI.Calls(this._client);
  workflows: WorkflowsAPI.Workflows = new WorkflowsAPI.Workflows(this._client);

  /**
   * Get a paginated list of available voices from the specified provider
   */
  listVoices(
    orgID: string,
    query: OrgListVoicesParams,
    options?: RequestOptions,
  ): APIPromise<OrgListVoicesResponse> {
    return this._client.get(path`/org/${orgID}/voices`, { query, ...options });
  }
}

export interface OrgListVoicesResponse {
  meta?: OrgListVoicesResponse.Meta;

  voices?: Array<OrgListVoicesResponse.Voice>;
}

export namespace OrgListVoicesResponse {
  export interface Meta {
    has_more?: boolean;

    /**
     * Cursor for next page (cartesia, elevenlabs)
     */
    next_page?: string;

    page?: number;

    size?: number;

    /**
     * May not be available with cursor pagination
     */
    total?: number;

    /**
     * May not be available with cursor pagination
     */
    total_pages?: number;
  }

  export interface Voice {
    id?: string;

    accent?: string;

    age?: string;

    category?: string;

    description?: string;

    gender?: string;

    language?: string;

    model?: string;

    name?: string;

    preview_url?: string;

    /**
     * "elevenlabs", "cartesia", "openai", "cambai", "sarvam", "inworld", "minimax"
     */
    provider?: string;

    use_case?: string;
  }
}

export interface OrgListVoicesParams {
  /**
   * Voice provider
   */
  provider: 'elevenlabs' | 'cartesia' | 'openai' | 'cambai' | 'sarvam' | 'inworld' | 'minimax';

  /**
   * Filter by model (e.g., bulbul:v2, bulbul:v3-beta) - only for sarvam provider
   */
  model?: string;

  /**
   * Cursor for next page - used for native pagination (cartesia, elevenlabs)
   */
  next_page?: string;

  /**
   * Page number (default: 1) - used for offset pagination
   */
  page?: number;

  /**
   * Page size (default: 50, max: 100)
   */
  size?: number;
}

Org.Agents = Agents;
Org.Calls = Calls;
Org.Workflows = Workflows;

export declare namespace Org {
  export {
    type OrgListVoicesResponse as OrgListVoicesResponse,
    type OrgListVoicesParams as OrgListVoicesParams,
  };

  export {
    Agents as Agents,
    type AgentResponse as AgentResponse,
    type BackgroundSoundConfig as BackgroundSoundConfig,
    type ExtraConfig as ExtraConfig,
    type GoodbyeConfig as GoodbyeConfig,
    type GreetingConfig as GreetingConfig,
    type LlmConfig as LlmConfig,
    type RoomDurationConfig as RoomDurationConfig,
    type TranscriberConfig as TranscriberConfig,
    type VadConfig as VadConfig,
    type VoiceConfig as VoiceConfig,
    type AgentListResponse as AgentListResponse,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentRetrieveParams as AgentRetrieveParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentDeleteParams as AgentDeleteParams,
  };

  export {
    Calls as Calls,
    type CallRetrieveResponse as CallRetrieveResponse,
    type CallListResponse as CallListResponse,
    type CallRetrieveParams as CallRetrieveParams,
    type CallListParams as CallListParams,
  };

  export {
    Workflows as Workflows,
    type WorkflowRetrieveResponse as WorkflowRetrieveResponse,
    type WorkflowListResponse as WorkflowListResponse,
    type WorkflowRetrieveParams as WorkflowRetrieveParams,
    type WorkflowListParams as WorkflowListParams,
  };
}
