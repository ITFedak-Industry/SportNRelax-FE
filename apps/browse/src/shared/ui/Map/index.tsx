import { ComponentProps, lazy, Suspense } from 'react';

const LazyMap = lazy(() =>
  import('./Map').then((mod) => ({ default: mod.Map })),
);

export const Map = (props: ComponentProps<typeof LazyMap>) => {
  return (
    <Suspense fallback={null}>
      <LazyMap {...props} />
    </Suspense>
  );
};
