// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProspectsAPI from '../org/prospects/prospects';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Members extends APIResource {
  /**
   * List members
   */
  list(orgID: string, options?: RequestOptions): APIPromise<MemberListResponse> {
    return this._client.get(path`/organizations/${orgID}/members`, options);
  }

  /**
   * Remove member
   */
  remove(
    userID: string,
    params: MemberRemoveParams,
    options?: RequestOptions,
  ): APIPromise<ProspectsAPI.ResponseError> {
    const { org_id } = params;
    return this._client.delete(path`/organizations/${org_id}/members/${userID}`, options);
  }

  /**
   * Update member role
   */
  updateRole(
    userID: string,
    params: MemberUpdateRoleParams,
    options?: RequestOptions,
  ): APIPromise<ProspectsAPI.ResponseError> {
    const { org_id, ...body } = params;
    return this._client.patch(path`/organizations/${org_id}/members/${userID}`, { body, ...options });
  }
}

export interface MemberListResponse {
  members?: Array<MemberListResponse.Member>;
}

export namespace MemberListResponse {
  export interface Member {
    email?: string;

    joined_at?: string;

    organization_id?: string;

    role?: string;

    user_id?: string;
  }
}

export interface MemberRemoveParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface MemberUpdateRoleParams {
  /**
   * Path param: Organization ID
   */
  org_id: string;

  /**
   * Body param
   */
  role: 'OWNER' | 'ADMIN' | 'MANAGER' | 'MEMBER';
}

export declare namespace Members {
  export {
    type MemberListResponse as MemberListResponse,
    type MemberRemoveParams as MemberRemoveParams,
    type MemberUpdateRoleParams as MemberUpdateRoleParams,
  };
}
