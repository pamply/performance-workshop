import React, { Suspense, useEffect } from 'react';
import { useQueryLoader, usePreloadedQuery } from 'react-relay/hooks';
import { SkeletonLoader } from '../core/SkeletonLoader';

// https://webpack.js.org/api/module-methods/#magic-comments
export function withLazyScreen(modulePath: string) {
  const ScreenComponent = React.lazy(
    () => import(/* webpackChunkName: "[request]" */ `./${modulePath}`)
  );
  return function LoadedScreen(props) {
    return (
      <Suspense fallback={'Loading..'}>
        <ScreenComponent {...props} />
      </Suspense>
    );
  };
}

export function useFetchThenRender(modulePath: string, query) {
  const Component = withLazyScreen(modulePath);
  return function Fetch(props) {
    const [queryReference, loadQuery] = useQueryLoader(query);
    useEffect(() => {
      loadQuery({});
    }, [loadQuery]);
    return (
      <Suspense fallback={<SkeletonLoader />}>
        {queryReference && (
          <ComponentWithPreloadedQuery
            {...props}
            queryReference={queryReference}
            query={query}
            Component={Component}
          />
        )}
      </Suspense>
    );
  };
}

function ComponentWithPreloadedQuery({
  queryReference,
  props,
  query,
  Component,
}) {
  const data = usePreloadedQuery(query, queryReference);
  return <Component {...props} data={data} />;
}
