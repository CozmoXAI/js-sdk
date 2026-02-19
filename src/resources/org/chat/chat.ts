// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConversationsAPI from './conversations';
import {
  ConversationDeleteParams,
  ConversationDeleteResponse,
  ConversationGetParams,
  ConversationGetResponse,
  ConversationListParams,
  ConversationListResponse,
  Conversations,
} from './conversations';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Chat extends APIResource {
  conversations: ConversationsAPI.Conversations = new ConversationsAPI.Conversations(this._client);

  /**
   * Send a message to the analytics chat assistant and receive an AI-generated
   * response
   */
  sendMessage(
    orgID: string,
    body: ChatSendMessageParams,
    options?: RequestOptions,
  ): APIPromise<ChatSendMessageResponse> {
    return this._client.post(path`/org/${orgID}/chat`, { body, ...options });
  }
}

export interface ChatSendMessageResponse {
  conversation_id?: string;

  message_id?: string;

  response?: string;

  tools_used?: Array<string>;
}

export interface ChatSendMessageParams {
  message: string;

  conversation_id?: string;
}

Chat.Conversations = Conversations;

export declare namespace Chat {
  export {
    type ChatSendMessageResponse as ChatSendMessageResponse,
    type ChatSendMessageParams as ChatSendMessageParams,
  };

  export {
    Conversations as Conversations,
    type ConversationListResponse as ConversationListResponse,
    type ConversationDeleteResponse as ConversationDeleteResponse,
    type ConversationGetResponse as ConversationGetResponse,
    type ConversationListParams as ConversationListParams,
    type ConversationDeleteParams as ConversationDeleteParams,
    type ConversationGetParams as ConversationGetParams,
  };
}
