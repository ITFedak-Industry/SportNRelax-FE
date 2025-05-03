import { ZodError, z } from 'zod';

const envVariablesSchema = z.object({
  ENDPOINT: z.string().url(),
});

let env: z.infer<typeof envVariablesSchema>;

try {
  env = envVariablesSchema.parse(process.env);
} catch (err) {
  console.error(
    'Env vars is invalid, check schema in the "@/shared/lib/env.ts"',
  );

  if (err instanceof ZodError) {
    console.error(err.errors);
  }

  env = {
    ENDPOINT: 'https://localhost:8080',
  };
}

export { env };
