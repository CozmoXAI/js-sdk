// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cozmoai from 'cozmoai';

const client = new Cozmoai({
  apiKey: 'My API Key',
  orgID: 'My Org ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource agents', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.agents.create('org_id', {
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
    const response = await client.agents.create('org_id', {
      name: 'name',
      prompt_template: 'prompt_template',
      type: 'voice',
      allowed_sip_trunks: ['string'],
      background_sound: {
        file: 'file',
        enabled: true,
        initial_volume: 0,
        thinking_sound: [
          {
            sound: 'sound',
            probability: 0,
            volume: 0,
          },
        ],
        volume: 0,
      },
      extra_config: {
        allow_interruptions: true,
        interruption_sensitivity: 0,
        min_words: 0,
        turn_detector_enabled: true,
        turn_detector_is_multilingual: true,
        turn_detector_model_type: 'turn_detector_model_type',
      },
      goodbye_config: { enabled: true, message: 'message' },
      greeting_config: {
        agent_speaks_first: true,
        greeting: 'greeting',
        pause_before_first_message: 0,
        voice_mail_message: 'voice_mail_message',
        welcome_message_is_generated: true,
      },
      llm_config: {
        model: 'model',
        provider: 'openai',
        frequency_penalty: -2,
        max_tokens: 1,
        parallel_tool_calls: true,
        presence_penalty: -2,
        system_prompt: 'system_prompt',
        temperature: 0,
        top_k: 1,
        top_p: 0,
      },
      plugins: [{}],
      precall_webhook: {
        method: 'GET',
        url: 'url',
        body_template: { foo: 'bar' },
        headers: { foo: 'string' },
        timeout_seconds: 1,
      },
      room_duration_config: {
        close_room_message: 'close_room_message',
        duration_warning_message: 'duration_warning_message',
        max_duration_min: 1,
        max_silence_sec: 0,
        silence_message: 'silence_message',
        wait_for_message_sec: 0,
      },
      transcriber_config: {
        provider: 'deepgram',
        commit_strategy: 'manual',
        detect_language: true,
        eager_eot_threshold: 0,
        enable_logging: true,
        endpointing: 0,
        endpointing_ms: 0,
        energy_filter: true,
        eot_threshold: 0,
        eot_timeout_ms: 0,
        filler_words: true,
        include_language_detection: true,
        include_timestamps: true,
        interim_results: true,
        keyterms: ['string'],
        keywords: ['string'],
        language: 'language',
        language_code: 'language_code',
        min_speech_duration_ms: 0,
        model: 'model',
        no_delay: true,
        num_channels: 1,
        preemptive_generation: true,
        preemptive_min_confidence: 0,
        profanity_filter: true,
        punctuate: true,
        sample_rate: 8000,
        smart_format: true,
        vad_events: true,
      },
      vad_config: {
        activation_threshold: 0,
        max_buffered_speech: 1,
        min_silence_duration: 0,
        min_speech_duration: 0,
        prefix_padding_duration: 0,
        sample_rate: 8000,
      },
      voice_config: {
        model: 'model',
        provider: 'provider',
        language: 'language',
        sample_rate: 8000,
        similarity_boost: 0,
        speed: 0.1,
        stability: 0,
        style: 0,
        use_speaker_boost: true,
        voice_id: 'voice_id',
      },
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.agents.retrieve('agent_id', { org_id: 'org_id' });
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
    const response = await client.agents.retrieve('agent_id', { org_id: 'org_id' });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.agents.update('agent_id', { org_id: 'org_id' });
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
    const response = await client.agents.update('agent_id', {
      org_id: 'org_id',
      allowed_sip_trunks: ['string'],
      background_sound: {
        file: 'file',
        enabled: true,
        initial_volume: 0,
        thinking_sound: [
          {
            sound: 'sound',
            probability: 0,
            volume: 0,
          },
        ],
        volume: 0,
      },
      extra_config: {
        allow_interruptions: true,
        interruption_sensitivity: 0,
        min_words: 0,
        turn_detector_enabled: true,
        turn_detector_is_multilingual: true,
        turn_detector_model_type: 'turn_detector_model_type',
      },
      goodbye_config: { enabled: true, message: 'message' },
      greeting_config: {
        agent_speaks_first: true,
        greeting: 'greeting',
        pause_before_first_message: 0,
        voice_mail_message: 'voice_mail_message',
        welcome_message_is_generated: true,
      },
      llm_config: {
        model: 'model',
        provider: 'openai',
        frequency_penalty: -2,
        max_tokens: 1,
        parallel_tool_calls: true,
        presence_penalty: -2,
        system_prompt: 'system_prompt',
        temperature: 0,
        top_k: 1,
        top_p: 0,
      },
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
      room_duration_config: {
        close_room_message: 'close_room_message',
        duration_warning_message: 'duration_warning_message',
        max_duration_min: 1,
        max_silence_sec: 0,
        silence_message: 'silence_message',
        wait_for_message_sec: 0,
      },
      transcriber_config: {
        provider: 'deepgram',
        commit_strategy: 'manual',
        detect_language: true,
        eager_eot_threshold: 0,
        enable_logging: true,
        endpointing: 0,
        endpointing_ms: 0,
        energy_filter: true,
        eot_threshold: 0,
        eot_timeout_ms: 0,
        filler_words: true,
        include_language_detection: true,
        include_timestamps: true,
        interim_results: true,
        keyterms: ['string'],
        keywords: ['string'],
        language: 'language',
        language_code: 'language_code',
        min_speech_duration_ms: 0,
        model: 'model',
        no_delay: true,
        num_channels: 1,
        preemptive_generation: true,
        preemptive_min_confidence: 0,
        profanity_filter: true,
        punctuate: true,
        sample_rate: 8000,
        smart_format: true,
        vad_events: true,
      },
      type: 'voice',
      vad_config: {
        activation_threshold: 0,
        max_buffered_speech: 1,
        min_silence_duration: 0,
        min_speech_duration: 0,
        prefix_padding_duration: 0,
        sample_rate: 8000,
      },
      voice_config: {
        model: 'model',
        provider: 'provider',
        language: 'language',
        sample_rate: 8000,
        similarity_boost: 0,
        speed: 0.1,
        stability: 0,
        style: 0,
        use_speaker_boost: true,
        voice_id: 'voice_id',
      },
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.agents.list('org_id');
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
      client.agents.list(
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
    const responsePromise = client.agents.delete('agent_id', { org_id: 'org_id' });
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
    const response = await client.agents.delete('agent_id', { org_id: 'org_id' });
  });
});
