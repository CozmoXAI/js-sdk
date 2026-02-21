// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EvalsAPI from './evals';
import { Eval, Evals } from './evals';
import * as SipTrunksAPI from './sip-trunks';
import { SipTrunks } from './sip-trunks';
import * as ToolsAPI from './tools';
import { AgentTool, Tools } from './tools';
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
    return this._client.post(path`/org/${orgID}/agents`, { body, ...options, __security: {} });
  }

  /**
   * Get agent details by ID
   */
  retrieve(agentID: string, params: AgentRetrieveParams, options?: RequestOptions): APIPromise<Agent> {
    const { org_id } = params;
    return this._client.get(path`/org/${org_id}/agents/${agentID}`, { ...options, __security: {} });
  }

  /**
   * Update agent details (partial update)
   */
  update(agentID: string, params: AgentUpdateParams, options?: RequestOptions): APIPromise<Agent> {
    const { org_id, ...body } = params;
    return this._client.patch(path`/org/${org_id}/agents/${agentID}`, { body, ...options, __security: {} });
  }

  /**
   * Get a paginated list of agents for the organization
   */
  list(
    orgID: string,
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListResponse> {
    return this._client.get(path`/org/${orgID}/agents`, { query, ...options, __security: {} });
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
    return this._client.delete(path`/org/${org_id}/agents/${agentID}`, { ...options, __security: {} });
  }
}

export interface Agent {
  id?: string;

  allowed_sip_trunks?: Array<string>;

  background_sound?: Array<number>;

  created_at?: string;

  extra_config?: Array<number>;

  goodbye_config?: Array<number>;

  greeting_config?: Array<number>;

  llm_config?: Array<number>;

  name?: string;

  organization_id?: string;

  plugins?: Array<number>;

  precall_webhook?: Array<number>;

  prompt_template?: string;

  public_quota?: number;

  room_duration_config?: Array<number>;

  tools?: Array<ToolsAPI.AgentTool>;

  transcriber_config?: Array<number>;

  type?: string;

  updated_at?: string;

  vad_config?: Array<number>;

  voice_config?: Array<number>;
}

export interface AgentsThinkingSound {
  sound: string;

  probability?: number;

  volume?: number;
}

export interface BackgroundSoundConfig {
  file: string;

  enabled?: boolean;

  initial_volume?: number;

  thinking_sound?: Array<AgentsThinkingSound>;

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

  extra_config?: AgentCreateParams.ExtraConfig;

  goodbye_config?: GoodbyeConfig;

  greeting_config?: AgentCreateParams.GreetingConfig;

  llm_config?: AgentCreateParams.LlmConfig;

  plugins?: Array<unknown>;

  precall_webhook?: RecallWebhook;

  room_duration_config?: AgentCreateParams.RoomDurationConfig;

  transcriber_config?: AgentCreateParams.TranscriberConfig;

  vad_config?: AgentCreateParams.VadConfig;

  voice_config?: AgentCreateParams.VoiceConfig;
}

export namespace AgentCreateParams {
  export interface ExtraConfig {
    allow_interruptions?: boolean;

    interruption_sensitivity?: number;

    min_words?: number;

    turn_detector_enabled?: boolean;

    turn_detector_is_multilingual?: boolean;

    turn_detector_model_type?: string;
  }

  export interface GreetingConfig {
    agent_speaks_first?: boolean;

    greeting?: string;

    pause_before_first_message?: number;

    voice_mail_message?: string;

    welcome_message_is_generated?: boolean;
  }

  export interface LlmConfig {
    model: string;

    /**
     * Core (All Providers)
     */
    provider: 'openai' | 'anthropic';

    frequency_penalty?: number;

    max_tokens?: number;

    parallel_tool_calls?: boolean;

    /**
     * OpenAI Only
     */
    presence_penalty?: number;

    system_prompt?: string;

    /**
     * Sampling Parameters (All Providers)
     */
    temperature?: number;

    /**
     * Anthropic Only
     */
    top_k?: number;

    top_p?: number;
  }

  export interface RoomDurationConfig {
    close_room_message?: string;

    duration_warning_message?: string;

    max_duration_min?: number;

    max_silence_sec?: number;

    silence_message?: string;

    wait_for_message_sec?: number;
  }

  export interface TranscriberConfig {
    /**
     * Core fields (All Providers)
     */
    provider: 'deepgram' | 'elevenlabs' | 'speechmatics';

    /**
     * ElevenLabs Only
     */
    commit_strategy?: 'manual' | 'vad';

    detect_language?: boolean;

    /**
     * Unified EOT/VAD Fields
     */
    eager_eot_threshold?: number;

    enable_logging?: boolean;

    endpointing?: number;

    endpointing_ms?: number;

    energy_filter?: boolean;

    eot_threshold?: number;

    eot_timeout_ms?: number;

    filler_words?: boolean;

    include_language_detection?: boolean;

    include_timestamps?: boolean;

    /**
     * Deepgram V1 Only
     */
    interim_results?: boolean;

    /**
     * Deepgram Flux Only
     */
    keyterms?: Array<string>;

    keywords?: Array<string>;

    /**
     * Legacy fields (backward compatibility)
     */
    language?: string;

    language_code?: string;

    min_speech_duration_ms?: number;

    model?: string;

    no_delay?: boolean;

    num_channels?: number;

    /**
     * Preemptive Generation (All Providers)
     */
    preemptive_generation?: boolean;

    preemptive_min_confidence?: number;

    profanity_filter?: boolean;

    punctuate?: boolean;

    sample_rate?: number;

    smart_format?: boolean;

    vad_events?: boolean;
  }

  export interface VadConfig {
    activation_threshold?: number;

    max_buffered_speech?: number;

    min_silence_duration?: number;

    min_speech_duration?: number;

    prefix_padding_duration?: number;

    sample_rate?: number;
  }

  export interface VoiceConfig {
    model: string;

    provider: string;

    language?: string;

    sample_rate?: number;

    similarity_boost?: number;

    speed?: number;

    stability?: number;

    style?: number;

    use_speaker_boost?: boolean;

    voice_id?: string;
  }
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
  extra_config?: AgentUpdateParams.ExtraConfig;

  /**
   * Body param
   */
  goodbye_config?: GoodbyeConfig;

  /**
   * Body param
   */
  greeting_config?: AgentUpdateParams.GreetingConfig;

  /**
   * Body param
   */
  llm_config?: AgentUpdateParams.LlmConfig;

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
  room_duration_config?: AgentUpdateParams.RoomDurationConfig;

  /**
   * Body param
   */
  transcriber_config?: AgentUpdateParams.TranscriberConfig;

  /**
   * Body param
   */
  type?: 'voice' | 'chat' | 'video';

  /**
   * Body param
   */
  vad_config?: AgentUpdateParams.VadConfig;

  /**
   * Body param
   */
  voice_config?: AgentUpdateParams.VoiceConfig;
}

export namespace AgentUpdateParams {
  export interface ExtraConfig {
    allow_interruptions?: boolean;

    interruption_sensitivity?: number;

    min_words?: number;

    turn_detector_enabled?: boolean;

    turn_detector_is_multilingual?: boolean;

    turn_detector_model_type?: string;
  }

  export interface GreetingConfig {
    agent_speaks_first?: boolean;

    greeting?: string;

    pause_before_first_message?: number;

    voice_mail_message?: string;

    welcome_message_is_generated?: boolean;
  }

  export interface LlmConfig {
    model: string;

    /**
     * Core (All Providers)
     */
    provider: 'openai' | 'anthropic';

    frequency_penalty?: number;

    max_tokens?: number;

    parallel_tool_calls?: boolean;

    /**
     * OpenAI Only
     */
    presence_penalty?: number;

    system_prompt?: string;

    /**
     * Sampling Parameters (All Providers)
     */
    temperature?: number;

    /**
     * Anthropic Only
     */
    top_k?: number;

    top_p?: number;
  }

  export interface RoomDurationConfig {
    close_room_message?: string;

    duration_warning_message?: string;

    max_duration_min?: number;

    max_silence_sec?: number;

    silence_message?: string;

    wait_for_message_sec?: number;
  }

  export interface TranscriberConfig {
    /**
     * Core fields (All Providers)
     */
    provider: 'deepgram' | 'elevenlabs' | 'speechmatics';

    /**
     * ElevenLabs Only
     */
    commit_strategy?: 'manual' | 'vad';

    detect_language?: boolean;

    /**
     * Unified EOT/VAD Fields
     */
    eager_eot_threshold?: number;

    enable_logging?: boolean;

    endpointing?: number;

    endpointing_ms?: number;

    energy_filter?: boolean;

    eot_threshold?: number;

    eot_timeout_ms?: number;

    filler_words?: boolean;

    include_language_detection?: boolean;

    include_timestamps?: boolean;

    /**
     * Deepgram V1 Only
     */
    interim_results?: boolean;

    /**
     * Deepgram Flux Only
     */
    keyterms?: Array<string>;

    keywords?: Array<string>;

    /**
     * Legacy fields (backward compatibility)
     */
    language?: string;

    language_code?: string;

    min_speech_duration_ms?: number;

    model?: string;

    no_delay?: boolean;

    num_channels?: number;

    /**
     * Preemptive Generation (All Providers)
     */
    preemptive_generation?: boolean;

    preemptive_min_confidence?: number;

    profanity_filter?: boolean;

    punctuate?: boolean;

    sample_rate?: number;

    smart_format?: boolean;

    vad_events?: boolean;
  }

  export interface VadConfig {
    activation_threshold?: number;

    max_buffered_speech?: number;

    min_silence_duration?: number;

    min_speech_duration?: number;

    prefix_padding_duration?: number;

    sample_rate?: number;
  }

  export interface VoiceConfig {
    model: string;

    provider: string;

    language?: string;

    sample_rate?: number;

    similarity_boost?: number;

    speed?: number;

    stability?: number;

    style?: number;

    use_speaker_boost?: boolean;

    voice_id?: string;
  }
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
    type AgentsThinkingSound as AgentsThinkingSound,
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

  export { Tools as Tools, type AgentTool as AgentTool };

  export { UnitTestRuns as UnitTestRuns, type PaginationMetaUnitTests as PaginationMetaUnitTests };

  export { UnitTests as UnitTests, type UnitTest as UnitTest };

  export { Evals as Evals, type Eval as Eval };
}
