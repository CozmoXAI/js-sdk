// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Agents extends APIResource {
  /**
   * Create a new AI agent in the organization
   */
  create(body: AgentCreateParams, options?: RequestOptions): APIPromise<AgentResponse> {
    return this._client.post('/agents', { body, ...options });
  }

  /**
   * Get agent details by ID
   */
  retrieve(agentID: string, options?: RequestOptions): APIPromise<AgentResponse> {
    return this._client.get(path`/agents/${agentID}`, options);
  }

  /**
   * Update agent details (partial update)
   */
  update(agentID: string, body: AgentUpdateParams, options?: RequestOptions): APIPromise<AgentResponse> {
    return this._client.patch(path`/agents/${agentID}`, { body, ...options });
  }

  /**
   * Get a paginated list of agents for the organization
   */
  list(
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListResponse> {
    return this._client.get('/agents', { query, ...options });
  }

  /**
   * Delete an agent by ID
   */
  delete(agentID: string, options?: RequestOptions): APIPromise<AgentDeleteResponse> {
    return this._client.delete(path`/agents/${agentID}`, options);
  }
}

export interface AgentResponse {
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

  tools?: Array<AgentResponse.Tool>;

  transcriber_config?: Array<number>;

  type?: string;

  updated_at?: string;

  vad_config?: Array<number>;

  voice_config?: Array<number>;
}

export namespace AgentResponse {
  export interface Tool {
    config_override?: { [key: string]: unknown };

    description?: string;

    is_enabled?: boolean;

    method?: string;

    name?: string;

    parameters?: Array<Tool.Parameter>;

    tool_id?: string;

    url?: string;
  }

  export namespace Tool {
    export interface Parameter {
      description?: string;

      name?: string;

      required?: boolean;

      type?: string;
    }
  }
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

export interface ExtraConfig {
  allow_interruptions?: boolean;

  interruption_sensitivity?: number;

  min_words?: number;

  turn_detector_enabled?: boolean;

  turn_detector_is_multilingual?: boolean;

  turn_detector_model_type?: string;
}

export interface GoodbyeConfig {
  enabled?: boolean;

  message?: string;
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

  extra_config?: ExtraConfig;

  goodbye_config?: GoodbyeConfig;

  greeting_config?: GreetingConfig;

  llm_config?: LlmConfig;

  plugins?: Array<unknown>;

  precall_webhook?: AgentCreateParams.PrecallWebhook;

  room_duration_config?: RoomDurationConfig;

  transcriber_config?: TranscriberConfig;

  vad_config?: VadConfig;

  voice_config?: VoiceConfig;
}

export namespace AgentCreateParams {
  export interface PrecallWebhook {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH';

    url: string;

    body_template?: { [key: string]: unknown };

    headers?: { [key: string]: string };

    timeout_seconds?: number;
  }
}

export interface AgentUpdateParams {
  allowed_sip_trunks?: Array<string>;

  background_sound?: BackgroundSoundConfig;

  extra_config?: ExtraConfig;

  goodbye_config?: GoodbyeConfig;

  greeting_config?: GreetingConfig;

  llm_config?: LlmConfig;

  name?: string;

  plugins?: Array<unknown>;

  precall_webhook?: AgentUpdateParams.PrecallWebhook;

  prompt_template?: string;

  room_duration_config?: RoomDurationConfig;

  transcriber_config?: TranscriberConfig;

  type?: 'voice' | 'chat' | 'video';

  vad_config?: VadConfig;

  voice_config?: VoiceConfig;
}

export namespace AgentUpdateParams {
  export interface PrecallWebhook {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH';

    url: string;

    body_template?: { [key: string]: unknown };

    headers?: { [key: string]: string };

    timeout_seconds?: number;
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

export declare namespace Agents {
  export {
    type AgentResponse as AgentResponse,
    type AgentsThinkingSound as AgentsThinkingSound,
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
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
  };
}
