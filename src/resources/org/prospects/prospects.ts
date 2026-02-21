// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BulkAPI from './bulk';
import { Bulk, BulkOperationResponseProspects } from './bulk';
import * as TagsAPI from './tags';
import { Tags } from './tags';

export class Prospects extends APIResource {
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);
}

export interface ProspectResponse {
  id?: string;

  country?: string;

  created_at?: string;

  custom_data?: { [key: string]: unknown };

  email?: string;

  external_id?: string;

  first_name?: string;

  last_name?: string;

  list_id?: string;

  phone?: string;

  status?: string;

  tags?: Array<TagResponseProspect>;

  timezone?: string;

  updated_at?: string;
}

export interface ResponseError {
  data?: unknown;

  error?: unknown;

  message?: string;

  status?: boolean;
}

export interface TagResponseProspect {
  id?: string;

  color?: string;

  name?: string;
}

Prospects.Tags = Tags;
Prospects.Bulk = Bulk;

export declare namespace Prospects {
  export {
    type ProspectResponse as ProspectResponse,
    type ResponseError as ResponseError,
    type TagResponseProspect as TagResponseProspect,
  };

  export { Tags as Tags };

  export { Bulk as Bulk, type BulkOperationResponseProspects as BulkOperationResponseProspects };
}
