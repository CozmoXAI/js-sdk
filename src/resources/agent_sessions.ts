// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';
import { uuid4 } from '../internal/utils/uuid';

export class AgentSessions extends APIResource {
  /**
   * Returns full details for a specific agent session.
   */
  retrieve(sessionID: string, options?: RequestOptions): APIPromise<AgentSessionResponse> {
    return this._client.get(path`/agent-sessions/${sessionID}`, options);
  }

  /**
   * Starts a new agent session — creates it, initializes it, and triggers the agent
   * workflow in one call. Generates a UUID v4 session ID automatically.
   */
  start(body: AgentSessionStartParams, options?: RequestOptions): APIPromise<AgentSessionResponse> {
    const sessionID = uuid4();
    return this._client.post(path`/agent-sessions/${sessionID}/start`, { body, ...options });
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

export interface AgentSessionStartParams {
  /**
   * UUID of the agent to run in this session.
   */
  agentId: string;

  /**
   * Instruction to pass to the agent.
   */
  instruction: string;

  /**
   * Title for the session.
   */
  title?: string;

  /**
   * Source identifier (e.g. 'command-center').
   */
  source?: string;

  /**
   * UUID of an existing prospect to associate with the session.
   */
  prospectId?: string | null;
}

export declare namespace AgentSessions {
  export {
    type AgentSessionResponse as AgentSessionResponse,
    type AgentSessionStartParams as AgentSessionStartParams,
  };
}
