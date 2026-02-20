// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProspectsAPI from './prospects';
import {
  BulkOperationResponseTags,
  ProspectCreateParams,
  ProspectDeleteAllParams,
  Prospects,
} from './prospects';

export class Tags extends APIResource {
  prospects: ProspectsAPI.Prospects = new ProspectsAPI.Prospects(this._client);
}

export interface TagResponseTag {
  id?: string;

  color?: string;

  created_at?: string;

  description?: string;

  name?: string;

  prospect_count?: number;
}

Tags.Prospects = Prospects;

export declare namespace Tags {
  export { type TagResponseTag as TagResponseTag };

  export {
    Prospects as Prospects,
    type BulkOperationResponseTags as BulkOperationResponseTags,
    type ProspectCreateParams as ProspectCreateParams,
    type ProspectDeleteAllParams as ProspectDeleteAllParams,
  };
}
