import { ZodError, z } from 'zod';

const booleanSchema = z
  .enum(['true', 'false', '1', '0'])
  .transform((value) => value === 'true' || value === '1');

/**
 * ✅ DX Best practice (Type safe env variables)
 * Validate env variables with zod
 */
const envVariablesSchema = z.object({
  VITE_API_ENDPOINT: z.string().url(),
  VITE_API_STORAGE_MODE: z.enum(['session', 'local']).optional(),
  // number 👍
  VITE_API_DELAY: z.coerce.number().positive().default(100).optional(),
  VITE_API_USER_EMAIL: z.string().min(1).email(),
  VITE_API_USER_PASSWORD: z.string().min(6),
  VITE_JWT_SECRET: z.string().min(1),
  // boolean 👍
  VITE_IS_ENABLE_ANALYTICS: booleanSchema.optional(),
});

// eslint-disable-next-line import/no-mutable-exports
let env: z.infer<typeof envVariablesSchema>;

try {
  env = envVariablesSchema.parse(process.env);
} catch (err) {
  console.error(
    'Env vars is invalid, check schema in the "@/shared/lib/env.ts"',
  );

  // if (err instanceof ZodError) {
  //   console.error(err.errors);
  // }

  // throw err;
  env = {
    VITE_API_ENDPOINT: 'https://localhost:8080',
    VITE_API_USER_EMAIL: 'string',
    VITE_API_USER_PASSWORD: 'string',
    VITE_JWT_SECRET: 'string',
    VITE_API_STORAGE_MODE: 'local',
    VITE_API_DELAY: 2,
    VITE_IS_ENABLE_ANALYTICS: true,
  };
}

export { env };
