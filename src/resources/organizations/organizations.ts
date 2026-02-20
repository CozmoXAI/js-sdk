// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MembersAPI from './members';
import { Members } from './members';

export class Organizations extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
}

Organizations.Members = Members;

export declare namespace Organizations {
  export { Members as Members };
}
