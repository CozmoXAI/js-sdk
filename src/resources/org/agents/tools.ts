// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tools extends APIResource {
  /**
   * Update tool configuration for an agent
   */
  update(toolID: string, params: ToolUpdateParams, options?: RequestOptions): APIPromise<ToolUpdateResponse> {
    const { org_id, agent_id, ...body } = params;
    return this._client.patch(path`/org/${org_id}/agents/${agent_id}/tools/${toolID}`, { body, ...options });
  }

  /**
   * Get all tools configured for an agent
   */
  list(agentID: string, params: ToolListParams, options?: RequestOptions): APIPromise<ToolListResponse> {
    const { org_id } = params;
    return this._client.get(path`/org/${org_id}/agents/${agentID}/tools`, options);
  }

  /**
   * Add or update a tool configuration for an agent
   */
  add(agentID: string, params: ToolAddParams, options?: RequestOptions): APIPromise<ToolAddResponse> {
    const { org_id, ...body } = params;
    return this._client.post(path`/org/${org_id}/agents/${agentID}/tools`, { body, ...options });
  }

  /**
   * Remove a tool from an agent
   */
  remove(toolID: string, params: ToolRemoveParams, options?: RequestOptions): APIPromise<ToolRemoveResponse> {
    const { org_id, agent_id } = params;
    return this._client.delete(path`/org/${org_id}/agents/${agent_id}/tools/${toolID}`, options);
  }
}

export interface AgentTool {
  config_override?: { [key: string]: unknown };

  description?: string;

  is_enabled?: boolean;

  method?: string;

  name?: string;

  parameters?: Array<AgentTool.Parameter>;

  tool_id?: string;

  url?: string;
}

export namespace AgentTool {
  export interface Parameter {
    description?: string;

    name?: string;

    required?: boolean;

    type?: string;
  }
}

export type ToolUpdateResponse = { [key: string]: string };

export type ToolListResponse = Array<AgentTool>;

export type ToolAddResponse = { [key: string]: string };

export type ToolRemoveResponse = { [key: string]: string };

export interface ToolUpdateParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Path param: Agent ID
   */
  agent_id: string;

  /**
   * Body param
   */
  config_override?: { [key: string]: unknown };

  /**
   * Body param
   */
  is_enabled?: boolean;
}

export interface ToolListParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface ToolAddParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  tool_id: string;

  /**
   * Body param
   */
  config_override?: { [key: string]: unknown };

  /**
   * Body param
   */
  is_enabled?: boolean;
}

export interface ToolRemoveParams {
  /**
   * Organization ID
   */
  org_id: string;

  /**
   * Agent ID
   */
  agent_id: string;
}

export declare namespace Tools {
  export {
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
}
