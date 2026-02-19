// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Conversations extends APIResource {
  /**
   * Get a paginated list of chat conversations for the current user
   */
  list(
    orgID: string,
    query: ConversationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConversationListResponse> {
    return this._client.get(path`/org/${orgID}/chat/conversations`, { query, ...options });
  }

  /**
   * Delete a chat conversation and all its messages
   */
  delete(
    conversationID: string,
    params: ConversationDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ConversationDeleteResponse> {
    const { org_id } = params;
    return this._client.delete(path`/org/${org_id}/chat/conversations/${conversationID}`, options);
  }

  /**
   * Get a specific chat conversation with all its messages
   */
  get(
    conversationID: string,
    params: ConversationGetParams,
    options?: RequestOptions,
  ): APIPromise<ConversationGetResponse> {
    const { org_id } = params;
    return this._client.get(path`/org/${org_id}/chat/conversations/${conversationID}`, options);
  }
}

export interface ConversationListResponse {
  conversations?: Array<ConversationListResponse.Conversation>;

  limit?: number;

  offset?: number;

  total?: number;
}

export namespace ConversationListResponse {
  export interface Conversation {
    id?: string;

    created_at?: string;

    title?: string;

    updated_at?: string;
  }
}

export type ConversationDeleteResponse = { [key: string]: string };

export interface ConversationGetResponse {
  id?: string;

  created_at?: string;

  messages?: Array<ConversationGetResponse.Message>;

  title?: string;

  updated_at?: string;
}

export namespace ConversationGetResponse {
  export interface Message {
    id?: string;

    content?: string;

    created_at?: string;

    role?: string;
  }
}

export interface ConversationListParams {
  /**
   * Number of items per page
   */
  limit?: number;

  /**
   * Number of items to skip
   */
  offset?: number;
}

export interface ConversationDeleteParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export interface ConversationGetParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export declare namespace Conversations {
  export {
    type ConversationListResponse as ConversationListResponse,
    type ConversationDeleteResponse as ConversationDeleteResponse,
    type ConversationGetResponse as ConversationGetResponse,
    type ConversationListParams as ConversationListParams,
    type ConversationDeleteParams as ConversationDeleteParams,
    type ConversationGetParams as ConversationGetParams,
  };
}
