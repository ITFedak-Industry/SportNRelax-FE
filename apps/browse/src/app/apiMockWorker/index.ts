import { env, IS_BROWSER } from '@src/shared/lib';

async function enableMocking() {
  if (env.NODE_ENV !== 'dev') {
    return;
  }

  if (IS_BROWSER) {
    const { worker } = await import(`./browser`);
    return worker.start();
  } else {
    const { server } = await import(`./node`);
    server.listen();
  }
}

enableMocking();
