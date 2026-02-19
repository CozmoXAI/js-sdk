// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cozmoai from 'cozmoai';

const client = new Cozmoai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource prospects', () => {
  // Mock server tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.org.lists.prospects.add('prospect_id', {
      org_id: 'org_id',
      list_id: 'list_id',
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
  test.skip('add: required and optional params', async () => {
    const response = await client.org.lists.prospects.add('prospect_id', {
      org_id: 'org_id',
      list_id: 'list_id',
    });
  });

  // Mock server tests are disabled
  test.skip('addBulk: only required params', async () => {
    const responsePromise = client.org.lists.prospects.addBulk('list_id', {
      org_id: 'org_id',
      prospect_ids: ['string'],
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
  test.skip('addBulk: required and optional params', async () => {
    const response = await client.org.lists.prospects.addBulk('list_id', {
      org_id: 'org_id',
      prospect_ids: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('remove: only required params', async () => {
    const responsePromise = client.org.lists.prospects.remove('prospect_id', {
      org_id: 'org_id',
      list_id: 'list_id',
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
  test.skip('remove: required and optional params', async () => {
    const response = await client.org.lists.prospects.remove('prospect_id', {
      org_id: 'org_id',
      list_id: 'list_id',
    });
  });

  // Mock server tests are disabled
  test.skip('removeBulk: only required params', async () => {
    const responsePromise = client.org.lists.prospects.removeBulk('list_id', {
      org_id: 'org_id',
      prospect_ids: ['string'],
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
  test.skip('removeBulk: required and optional params', async () => {
    const response = await client.org.lists.prospects.removeBulk('list_id', {
      org_id: 'org_id',
      prospect_ids: ['string'],
    });
  });
});
