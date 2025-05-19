import { ZodError, z } from 'zod';

const envVariablesSchema = z.object({
  API_ENDPOINT: z.string().url(),
  API_DELAY: z.number().default(0),
  NODE_ENV: z.string(),
  ENABLE_MOCKING: z.boolean().default(false),
});

export type ENV = z.infer<typeof envVariablesSchema>;

export const IS_BROWSER = typeof window !== 'undefined';

let _env: ENV = {} as ENV;
if (!IS_BROWSER) {
  try {
    const { default: config } = await import('config');
    _env = envVariablesSchema.parse(
      Object.assign({}, process.env, config.get('env')),
    );
  } catch (err) {
    console.error(
      'Env vars is invalid, check schema in the "@/shared/lib/env.ts"',
    );

    if (err instanceof ZodError) {
      console.error(err.errors);
      throw err;
    } else {
      console.error(err);
    }
  }
}

function getAll(): ENV {
  if (!IS_BROWSER) {
    return _env;
  } else {
    return window.__APP_ENV__;
  }
}

export const env = getAll();

export const browserEnv = `window.__APP_ENV__ = ${JSON.stringify(env)};`;
