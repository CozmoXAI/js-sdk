// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Billing extends APIResource {
  /**
   * Handle payment provider webhook (FlexPrice via Svix)
   */
  handleWebhook(
    params: BillingHandleWebhookParams,
    options?: RequestOptions,
  ): APIPromise<BillingHandleWebhookResponse> {
    const { 'svix-id': svixID, 'svix-signature': svixSignature, 'svix-timestamp': svixTimestamp } = params;
    return this._client.post('/billing/webhook', {
      ...options,
      headers: buildHeaders([
        { 'svix-id': svixID, 'svix-signature': svixSignature, 'svix-timestamp': svixTimestamp },
        options?.headers,
      ]),
    });
  }
}

export type BillingHandleWebhookResponse = { [key: string]: string };

export interface BillingHandleWebhookParams {
  /**
   * Svix message ID
   */
  'svix-id': string;

  /**
   * Svix signature
   */
  'svix-signature': string;

  /**
   * Svix timestamp
   */
  'svix-timestamp': string;
}

export declare namespace Billing {
  export {
    type BillingHandleWebhookResponse as BillingHandleWebhookResponse,
    type BillingHandleWebhookParams as BillingHandleWebhookParams,
  };
}
