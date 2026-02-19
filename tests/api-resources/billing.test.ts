// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cozmoai from 'cozmoai';

const client = new Cozmoai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource billing', () => {
  // Mock server tests are disabled
  test.skip('handleWebhook: only required params', async () => {
    const responsePromise = client.billing.handleWebhook({
      'svix-id': 'svix-id',
      'svix-signature': 'svix-signature',
      'svix-timestamp': 'svix-timestamp',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('handleWebhook: required and optional params', async () => {
    const response = await client.billing.handleWebhook({
      'svix-id': 'svix-id',
      'svix-signature': 'svix-signature',
      'svix-timestamp': 'svix-timestamp',
    });
  });
});
