// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cozmoai from 'cozmoai';

const client = new Cozmoai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apiKeys', () => {
  // Mock server tests are disabled
  test.skip('createAPIKey: only required params', async () => {
    const responsePromise = client.org.apiKeys.createAPIKey('org_id', { name: 'name', scopes: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createAPIKey: required and optional params', async () => {
    const response = await client.org.apiKeys.createAPIKey('org_id', {
      name: 'name',
      scopes: ['string'],
      expires_at: 'expires_at',
    });
  });

  // Mock server tests are disabled
  test.skip('listAPIKeys', async () => {
    const responsePromise = client.org.apiKeys.listAPIKeys('org_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('revokeAllAPIKeys', async () => {
    const responsePromise = client.org.apiKeys.revokeAllAPIKeys('org_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('revokeAPIKey: only required params', async () => {
    const responsePromise = client.org.apiKeys.revokeAPIKey('key_id', { org_id: 'org_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('revokeAPIKey: required and optional params', async () => {
    const response = await client.org.apiKeys.revokeAPIKey('key_id', { org_id: 'org_id' });
  });

  // Mock server tests are disabled
  test.skip('updateAPIKeyScopes: only required params', async () => {
    const responsePromise = client.org.apiKeys.updateAPIKeyScopes('key_id', {
      org_id: 'org_id',
      scopes: ['string'],
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
  test.skip('updateAPIKeyScopes: required and optional params', async () => {
    const response = await client.org.apiKeys.updateAPIKeyScopes('key_id', {
      org_id: 'org_id',
      scopes: ['string'],
    });
  });
});
