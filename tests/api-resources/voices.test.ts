// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cozmoai from 'cozmoai';

const client = new Cozmoai({
  apiKey: 'My API Key',
  orgID: 'My Org ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource voices', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.voices.list({ provider: 'elevenlabs' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.voices.list({
      provider: 'elevenlabs',
      model: 'model',
      next_page: 'next_page',
      page: 0,
      size: 0,
    });
  });
});
