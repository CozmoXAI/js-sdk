// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cozmoai from 'cozmoai';

const client = new Cozmoai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource calls', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.org.calls.retrieve('call_id', { org_id: 'org_id' });
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
    const response = await client.org.calls.retrieve('call_id', { org_id: 'org_id' });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.org.calls.list('org_id');
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
      client.org.calls.list(
        'org_id',
        {
          agent_id: 'agent_id',
          direction: 'direction',
          end_date: 'end_date',
          min_duration: 0,
          page: 0,
          phone: 'phone',
          prospect_external_id: 'prospect_external_id',
          prospect_id: 'prospect_id',
          prospect_name: 'prospect_name',
          size: 100,
          start_date: 'start_date',
          status: 'status',
          workflow_id: 'workflow_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cozmoai.NotFoundError);
  });
});
