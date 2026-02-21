// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProspectsAPI from './prospects';
import { ListProspectOperationResponse, Prospects } from './prospects';

export class Lists extends APIResource {
  prospects: ProspectsAPI.Prospects = new ProspectsAPI.Prospects(this._client);
}

export interface DeleteListResponse {
  message?: string;

  prospects_deleted_count?: number;

  status?: string;
}

export interface ListResponse {
  id?: string;

  created_at?: string;

  deleted_at?: string;

  name?: string;

  prospect_count?: number;

  source?: string;
}

Lists.Prospects = Prospects;

export declare namespace Lists {
  export { type DeleteListResponse as DeleteListResponse, type ListResponse as ListResponse };

  export { Prospects as Prospects, type ListProspectOperationResponse as ListProspectOperationResponse };
}
