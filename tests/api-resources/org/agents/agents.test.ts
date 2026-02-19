// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cozmoai from 'cozmoai';

const client = new Cozmoai({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource agents', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.org.agents.create('org_id', {
      name: 'name',
      prompt_template: 'prompt_template',
      type: 'voice',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.org.agents.create('org_id', {
      name: 'name',
      prompt_template: 'prompt_template',
      type: 'voice',
      allowed_sip_trunks: ['string'],
      background_sound: { file: 'file', volume: 0 },
      goodbye_config: { enabled: true, message: 'message' },
      greeting_config: { foo: 'bar' },
      llm_config: { foo: 'bar' },
      plugins: [{}],
      precall_webhook: {
        method: 'GET',
        url: 'url',
        body_template: { foo: 'bar' },
        headers: { foo: 'string' },
        timeout_seconds: 1,
      },
      transcriber_config: { foo: 'bar' },
      vad_config: { foo: 'bar' },
      voice_config: { foo: 'bar' },
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.org.agents.retrieve('agent_id', { org_id: 'org_id' });
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
    const response = await client.org.agents.retrieve('agent_id', { org_id: 'org_id' });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.org.agents.update('agent_id', { org_id: 'org_id' });
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
    const response = await client.org.agents.update('agent_id', {
      org_id: 'org_id',
      allowed_sip_trunks: ['string'],
      background_sound: { file: 'file', volume: 0 },
      goodbye_config: { enabled: true, message: 'message' },
      greeting_config: { foo: 'bar' },
      llm_config: { foo: 'bar' },
      name: 'name',
      plugins: [{}],
      precall_webhook: {
        method: 'GET',
        url: 'url',
        body_template: { foo: 'bar' },
        headers: { foo: 'string' },
        timeout_seconds: 1,
      },
      prompt_template: 'prompt_template',
      transcriber_config: { foo: 'bar' },
      type: 'voice',
      vad_config: { foo: 'bar' },
      voice_config: { foo: 'bar' },
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.org.agents.list('org_id');
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
      client.org.agents.list(
        'org_id',
        {
          page: 0,
          search: 'search',
          size: 0,
          type: 'type',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cozmoai.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.org.agents.delete('agent_id', { org_id: 'org_id' });
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
    const response = await client.org.agents.delete('agent_id', { org_id: 'org_id' });
  });

  // Mock server tests are disabled
  test.skip('listEvalRuns: only required params', async () => {
    const responsePromise = client.org.agents.listEvalRuns('org_id', { agentId: 'agentId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listEvalRuns: required and optional params', async () => {
    const response = await client.org.agents.listEvalRuns('org_id', {
      agentId: 'agentId',
      page: 0,
      size: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('runSpecificTests: only required params', async () => {
    const responsePromise = client.org.agents.runSpecificTests('agent_id', {
      org_id: 'org_id',
      unit_test_ids: ['string'],
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
  test.skip('runSpecificTests: required and optional params', async () => {
    const response = await client.org.agents.runSpecificTests('agent_id', {
      org_id: 'org_id',
      unit_test_ids: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('runTests: only required params', async () => {
    const responsePromise = client.org.agents.runTests('agent_id', { org_id: 'org_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('runTests: required and optional params', async () => {
    const response = await client.org.agents.runTests('agent_id', { org_id: 'org_id' });
  });
});
