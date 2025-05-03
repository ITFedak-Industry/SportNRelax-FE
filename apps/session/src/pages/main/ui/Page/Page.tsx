import { useMeQuery } from '@src/entities/user';

export function MainPage() {
  // * .upsertQueryEntries do not triggers any .matchFullfilled, etc. So, hydration may not be complete
  // To resolve it we may use custom actions (i.e saveCategory()) and trigger/subscribe it where it is needed
  // const ssrPreloadActions = [
  //   categoryApi.util.upsertQueryEntries([
  //     {
  //       endpointName: 'popularCategories',
  //       arg: undefined,
  //       value: categories,
  //     },
  //   ]),
  //   saveCategory(categories),
  // ];
  const { data } = useMeQuery();

  return <div>Main page {data?.email}</div>;
}
