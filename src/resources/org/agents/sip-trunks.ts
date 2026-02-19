// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class SipTrunks extends APIResource {
  /**
   * Get all inbound SIP trunks allowed for an agent
   */
  list(
    agentID: string,
    params: SipTrunkListParams,
    options?: RequestOptions,
  ): APIPromise<SipTrunkListResponse> {
    const { org_id } = params;
    return this._client.get(path`/org/${org_id}/agents/${agentID}/sip-trunks`, options);
  }

  /**
   * Add an inbound SIP trunk to an agent's allowed list. Only INBOUND trunks can be
   * added.
   */
  add(agentID: string, params: SipTrunkAddParams, options?: RequestOptions): APIPromise<SipTrunkAddResponse> {
    const { org_id, ...body } = params;
    return this._client.post(path`/org/${org_id}/agents/${agentID}/sip-trunks`, { body, ...options });
  }

  /**
   * Remove a SIP trunk from an agent's allowed list
   */
  remove(
    trunkID: string,
    params: SipTrunkRemoveParams,
    options?: RequestOptions,
  ): APIPromise<SipTrunkRemoveResponse> {
    const { org_id, agent_id } = params;
    return this._client.delete(path`/org/${org_id}/agents/${agent_id}/sip-trunks/${trunkID}`, options);
  }
}

export type SipTrunkListResponse = Array<SipTrunkListResponse.SipTrunkListResponseItem>;

export namespace SipTrunkListResponse {
  export interface SipTrunkListResponseItem {
    id?: string;

    is_active?: boolean;

    name?: string;

    provider?: string;

    type?: string;
  }
}

export type SipTrunkAddResponse = { [key: string]: string };

export type SipTrunkRemoveResponse = { [key: string]: string };

export interface SipTrunkListParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface SipTrunkAddParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  sip_trunk_id: string;
}

export interface SipTrunkRemoveParams {
  /**
   * Organization ID
   */
  org_id: string;

  /**
   * Agent ID
   */
  agent_id: string;
}

export declare namespace SipTrunks {
  export {
    type SipTrunkListResponse as SipTrunkListResponse,
    type SipTrunkAddResponse as SipTrunkAddResponse,
    type SipTrunkRemoveResponse as SipTrunkRemoveResponse,
    type SipTrunkListParams as SipTrunkListParams,
    type SipTrunkAddParams as SipTrunkAddParams,
    type SipTrunkRemoveParams as SipTrunkRemoveParams,
  };
}
