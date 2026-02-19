// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cozmoai, { toFile } from 'cozmoai';

const client = new Cozmoai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bulk', () => {
  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.org.prospects.bulk.update('org_id', {
      prospect_ids: ['string'],
      updates: {},
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
  test.skip('update: required and optional params', async () => {
    const response = await client.org.prospects.bulk.update('org_id', {
      prospect_ids: ['string'],
      updates: {
        country: 'country',
        custom_data: { foo: 'bar' },
        email: 'email',
        external_id: 'external_id',
        first_name: 'first_name',
        last_name: 'last_name',
        list_id: 'list_id',
        remove_from_list: true,
        status: 'status',
        timezone: 'timezone',
      },
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.org.prospects.bulk.delete('org_id', { prospect_ids: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.org.prospects.bulk.delete('org_id', { prospect_ids: ['string'] });
  });

  // Mock server tests are disabled
  test.skip('import: only required params', async () => {
    const responsePromise = client.org.prospects.bulk.import('org_id', {
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      list_name: 'list_name',
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
  test.skip('import: required and optional params', async () => {
    const response = await client.org.prospects.bulk.import('org_id', {
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      list_name: 'list_name',
    });
  });
});
