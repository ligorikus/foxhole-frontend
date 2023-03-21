import { resolve } from 'path';
// eslint-disable-next-line import/named
import { generateApi, GenerateApiParams, ParsedRoute } from 'swagger-typescript-api';

const SERVICES: string[] = ['Foxhole'];

const getConfig: (
  input: string,
  output: string
) => GenerateApiParams = (input, output) => ({
  input,
  output,
  name: 'Foxhole.ts',
  silent: true,
  disableStrictSSL: true,
  cleanOutput: true,
  modular: true,
  extractRequestParams: true,
  // generateUnionEnums: true,
  // enumNamesAsValues: true,
  // httpClientType: 'axios',
  // singleHttpClient: false,
  hooks: {
    onCreateRoute,
    onInit
  }
});

export const onCreateRoute = (routeData: ParsedRoute) => {
  if (routeData.raw.method === 'description') {
    return false;
  }
};

export const onInit = (config: any) => {
  // новая опция, которая убирает ".data" из ответа https://github.com/acacode/swagger-typescript-api/issues/267
  config.unwrapResponseData = true;
  return config;
};


(async function () {
  for await (const service of SERVICES) {
    const output = resolve(
      `./api/swagger/${service}`
    );
    const input = resolve(`./api/spec/${service}.yaml`);
    try {
      const config = getConfig(input, output);
      await generateApi(config);
      console.log(`Generated API for: ${service} (${input})`);
    } catch (e) {
      console.error(`Cannot generate API for: ${service} (${input})\n`);
      break;
    }
  }
})();
