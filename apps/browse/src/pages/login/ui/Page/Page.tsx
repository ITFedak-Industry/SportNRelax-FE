import { env } from '../../../../shared/lib';

export function LoginPage() {
  return (
    <div>
      <h1>Login page</h1>
      <p>
        Use {env.VITE_API_USER_EMAIL} / {env.VITE_API_USER_PASSWORD} as test
        user credentials
      </p>
    </div>
  );
}
