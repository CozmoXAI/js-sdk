// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Calls extends APIResource {
  /**
   * Returns full details for a specific call including prospect and agent info
   */
  retrieve(
    callID: string,
    params: CallRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<CallRetrieveResponse> {
    const { org_id } = params;
    return this._client.get(path`/org/${org_id}/calls/${callID}`, options);
  }

  /**
   * Returns a paginated list of calls for the organization with optional filters
   */
  list(
    orgID: string,
    query: CallListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CallListResponse> {
    return this._client.get(path`/org/${orgID}/calls`, { query, ...options });
  }
}

export interface CallRetrieveResponse {
  id?: string;

  agent_name?: string;

  call_type?: string;

  callback_for?: string;

  cost_usd?: string;

  detected_intents?: Array<string>;

  direction?: string;

  duration_seconds?: number;

  ended_at?: string;

  /**
   * Related data
   */
  evaluations?: Array<CallRetrieveResponse.Evaluation>;

  from_number?: string;

  initial_agent_id?: string;

  organization_id?: string;

  participating_agent_ids?: Array<string>;

  prospect_email?: string;

  prospect_external_id?: string;

  prospect_first_name?: string;

  prospect_id?: string;

  prospect_last_name?: string;

  prospect_phone?: string;

  recording_analysis?: Array<number>;

  recording_slug?: string;

  recording_url?: string;

  scheduled_at?: string;

  selected_outbound_number_id?: string;

  sip_trunk_id?: string;

  started_at?: string;

  status?: string;

  stt_duration_seconds?: number;

  /**
   * Call summary (AI-generated summary of the call)
   */
  summary?: string;

  telephony_code?: number;

  to_number?: string;

  tokens_input?: number;

  tokens_output?: number;

  tool_logs?: Array<CallRetrieveResponse.ToolLog>;

  /**
   * Transcript summary (null if call has no transcript yet)
   */
  transcript_text?: string;

  tts_characters?: number;

  workflow_node_id?: string;

  workflow_run_id?: string;

  workflow_version_id?: string;
}

export namespace CallRetrieveResponse {
  export interface Evaluation {
    id?: string;

    created_at?: string;

    extracted_value?: string;

    outcome_definition_id?: string;

    outcome_key?: string;

    reasoning?: string;

    result_boolean?: boolean;
  }

  export interface ToolLog {
    id?: string;

    arguments?: Array<number>;

    created_at?: string;

    error_message?: string;

    result?: Array<number>;

    status?: string;

    tool_name?: string;
  }
}

export interface CallListResponse {
  data?: Array<CallListResponse.Data>;

  meta?: CallListResponse.Meta;
}

export namespace CallListResponse {
  export interface Data {
    id?: string;

    agent_name?: string;

    call_type?: string;

    callback_for?: string;

    direction?: string;

    duration_seconds?: number;

    ended_at?: string;

    from_number?: string;

    initial_agent_id?: string;

    prospect_external_id?: string;

    prospect_first_name?: string;

    prospect_id?: string;

    prospect_last_name?: string;

    prospect_phone?: string;

    scheduled_at?: string;

    started_at?: string;

    status?: string;

    to_number?: string;
  }

  export interface Meta {
    page?: number;

    size?: number;

    total?: number;

    total_pages?: number;
  }
}

export interface CallRetrieveParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface CallListParams {
  /**
   * Filter by agent ID
   */
  agent_id?: string;

  /**
   * Filter by direction (INBOUND, OUTBOUND)
   */
  direction?: string;

  /**
   * Filter by end date (ISO 8601)
   */
  end_date?: string;

  /**
   * Filter by minimum duration in seconds
   */
  min_duration?: number;

  /**
   * Page number
   */
  page?: number;

  /**
   * Search by phone number
   */
  phone?: string;

  /**
   * Filter by prospect external ID
   */
  prospect_external_id?: string;

  /**
   * Filter by prospect ID
   */
  prospect_id?: string;

  /**
   * Filter by prospect name (first or last)
   */
  prospect_name?: string;

  /**
   * Page size
   */
  size?: number;

  /**
   * Filter by start date (ISO 8601)
   */
  start_date?: string;

  /**
   * Filter by status (SCHEDULED, RINGING, IN_PROGRESS, completed, no-answer, failed,
   * busy)
   */
  status?: string;

  /**
   * Filter by workflow ID
   */
  workflow_id?: string;
}

export declare namespace Calls {
  export {
    type CallRetrieveResponse as CallRetrieveResponse,
    type CallListResponse as CallListResponse,
    type CallRetrieveParams as CallRetrieveParams,
    type CallListParams as CallListParams,
  };
}
