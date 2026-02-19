// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cozmoai from 'cozmoai';

const client = new Cozmoai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource export', () => {
  // Mock server tests are disabled
  test.skip('getCount', async () => {
    const responsePromise = client.org.calls.export.getCount('org_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getCount: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.org.calls.export.getCount(
        'org_id',
        {
          agent_id: 'agent_id',
          direction: 'direction',
          end_date: 'end_date',
          min_duration: 0,
          phone: 'phone',
          prospect_external_id: 'prospect_external_id',
          prospect_id: 'prospect_id',
          start_date: 'start_date',
          status: 'status',
          workflow_id: 'workflow_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cozmoai.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getCsv', async () => {
    const responsePromise = client.org.calls.export.getCsv('org_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getCsv: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.org.calls.export.getCsv(
        'org_id',
        {
          agent_id: 'agent_id',
          direction: 'direction',
          end_date: 'end_date',
          min_duration: 0,
          phone: 'phone',
          prospect_external_id: 'prospect_external_id',
          prospect_id: 'prospect_id',
          start_date: 'start_date',
          status: 'status',
          workflow_id: 'workflow_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cozmoai.NotFoundError);
  });
});
