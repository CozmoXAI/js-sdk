// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConversationsAPI from './conversations';
import { Conversations } from './conversations';

export class Chat extends APIResource {
  conversations: ConversationsAPI.Conversations = new ConversationsAPI.Conversations(this._client);
}

Chat.Conversations = Conversations;

export declare namespace Chat {
  export { Conversations as Conversations };
}
