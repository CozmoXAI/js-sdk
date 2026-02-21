// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Voices extends APIResource {
  /**
   * Get a paginated list of available voices from the specified provider
   */
  list(query: VoiceListParams, options?: RequestOptions): APIPromise<VoiceListResponse> {
    return this._client.get('/voices', { query, ...options });
  }
}

export interface VoiceListResponse {
  meta?: VoiceListResponse.Meta;

  voices?: Array<VoiceListResponse.Voice>;
}

export namespace VoiceListResponse {
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

export interface VoiceListParams {
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

export declare namespace Voices {
  export { type VoiceListResponse as VoiceListResponse, type VoiceListParams as VoiceListParams };
}
