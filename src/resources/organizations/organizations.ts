// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MembersAPI from './members';
import { MemberListResponse, MemberRemoveParams, MemberUpdateRoleParams, Members } from './members';
import * as ProspectsAPI from '../org/prospects/prospects';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Organizations extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);

  /**
   * Leave organization
   */
  leave(orgID: string, options?: RequestOptions): APIPromise<ProspectsAPI.ResponseError> {
    return this._client.post(path`/organizations/${orgID}/leave`, options);
  }
}

Organizations.Members = Members;

export declare namespace Organizations {
  export {
    Members as Members,
    type MemberListResponse as MemberListResponse,
    type MemberRemoveParams as MemberRemoveParams,
    type MemberUpdateRoleParams as MemberUpdateRoleParams,
  };
}
