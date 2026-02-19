// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cozmoai from 'cozmoai';

const client = new Cozmoai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource runs', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.org.runs.retrieve('run_id', { org_id: 'org_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.org.runs.retrieve('run_id', { org_id: 'org_id' });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.org.runs.list('org_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.org.runs.list(
        'org_id',
        {
          batch_id: 'batch_id',
          end_date: 'end_date',
          limit: 0,
          page: 0,
          prospect_id: 'prospect_id',
          sort: 'sort',
          start_date: 'start_date',
          status: 'status',
          workflow_id: 'workflow_id',
          workflow_version_id: 'workflow_version_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cozmoai.NotFoundError);
  });
});
