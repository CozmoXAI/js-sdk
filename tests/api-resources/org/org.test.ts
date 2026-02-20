// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cozmoai from 'cozmoai';

const client = new Cozmoai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource org', () => {
  // Mock server tests are disabled
  test.skip('createWorkflowRun: only required params', async () => {
    const responsePromise = client.org.createWorkflowRun('org_id', {
      prospect: { phone: 'phone' },
      workflow_id: 'workflow_id',
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
  test.skip('createWorkflowRun: required and optional params', async () => {
    const response = await client.org.createWorkflowRun('org_id', {
      prospect: {
        phone: 'phone',
        country: 'country',
        custom_data: { foo: 'bar' },
        email: 'email',
        external_id: 'external_id',
        first_name: 'first_name',
        last_name: 'last_name',
        timezone: 'timezone',
      },
      workflow_id: 'workflow_id',
      scheduled_at: 'scheduled_at',
    });
  });

  // Mock server tests are disabled
  test.skip('listVoices: only required params', async () => {
    const responsePromise = client.org.listVoices('org_id', { provider: 'elevenlabs' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listVoices: required and optional params', async () => {
    const response = await client.org.listVoices('org_id', {
      provider: 'elevenlabs',
      next_page: 'next_page',
      page: 0,
      size: 0,
    });
  });
});
