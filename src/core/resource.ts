// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Cozmoai } from '../client';

export abstract class APIResource {
  protected _client: Cozmoai;

  constructor(client: Cozmoai) {
    this._client = client;
  }
}
