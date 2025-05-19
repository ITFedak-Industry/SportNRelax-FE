import { env, IS_BROWSER } from '@src/shared/lib';

async function enableMocking() {
  if (env.ENABLE_MOCKING === false) {
    return;
  }

  if (IS_BROWSER) {
    const { worker } = await import(`./browser`);
    worker.start();
  } else {
    // const { server } = await import(`./server`);
    // server.listen();
  }
}

enableMocking();
