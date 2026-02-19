// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Me extends APIResource {
  /**
   * Returns all organizations the authenticated user is a member of
   */
  listOrganizations(options?: RequestOptions): APIPromise<MeListOrganizationsResponse> {
    return this._client.get('/me/organizations', options);
  }
}

export type MeListOrganizationsResponse = Array<MeListOrganizationsResponse.MeListOrganizationsResponseItem>;

export namespace MeListOrganizationsResponse {
  export interface MeListOrganizationsResponseItem {
    id?: string;

    joined_at?: string;

    name?: string;

    role?: string;

    slug?: string;
  }
}

export declare namespace Me {
  export { type MeListOrganizationsResponse as MeListOrganizationsResponse };
}
