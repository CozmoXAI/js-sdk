// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AgentSessions extends APIResource {
  /**
   * Start a new agent session, optionally associating it with an existing prospect
   * or creating one inline.
   */
  create(body: AgentSessionCreateParams, options?: RequestOptions): APIPromise<AgentSessionResponse> {
    return this._client.post('/agent-sessions', { body, ...options });
  }

  /**
   * Returns full details for a specific agent session.
   */
  retrieve(sessionID: string, options?: RequestOptions): APIPromise<AgentSessionResponse> {
    return this._client.get(path`/agent-sessions/${sessionID}`, options);
  }
}

export interface AgentSessionResponse {
  id?: string;

  organization_id?: string;

  root_agent_id?: string;

  prospect_id?: string;

  workflow_run_id?: string;

  call_id?: string;

  /**
   * Auto-generated 6-character alphanumeric case identifier (e.g. 'ABC123').
   */
  case_id?: string;

  title?: string;

  channel?: string;

  entrypoint?: string;

  status?: string;

  agent_binding?: unknown;

  bootstrap?: unknown;

  external_refs?: unknown;

  metadata?: unknown;

  last_event_sequence?: number;

  last_journal_sequence?: number;

  last_handle_version?: number;

  last_event_at?: string;

  last_activity_at?: string;

  started_at?: string;

  ended_at?: string;

  created_by?: string;

  created_at?: string;

  updated_at?: string;
}

export interface AgentSessionCreateParams {
  /**
   * UUID of an existing prospect to associate with the session.
   * Mutually exclusive with new_prospect.
   */
  prospect_id?: string;

  /**
   * Inline prospect to create and associate with the session.
   * Mutually exclusive with prospect_id.
   */
  new_prospect?: AgentSessionCreateParams.NewProspect;

  /**
   * UUID of the agent to run in this session.
   */
  root_agent_id?: string;

  /**
   * Title for the session.
   */
  title?: string;

  /**
   * Communication channel.
   */
  channel?: string;

  /**
   * Entry point description.
   */
  entrypoint?: string;

  /**
   * UUID of an associated workflow run.
   */
  workflow_run_id?: string;

  /**
   * UUID of an associated call.
   */
  call_id?: string;
}

export namespace AgentSessionCreateParams {
  export interface NewProspect {
    /**
     * Phone number in E.164 format.
     */
    phone: string;

    first_name?: string;

    last_name?: string;

    email?: string;

    external_id?: string;
  }
}

export declare namespace AgentSessions {
  export {
    type AgentSessionResponse as AgentSessionResponse,
    type AgentSessionCreateParams as AgentSessionCreateParams,
  };
}
