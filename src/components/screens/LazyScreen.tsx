import React, { Suspense } from 'react';

// https://webpack.js.org/api/module-methods/#magic-comments
export function withLazyScreen(modulePath: string) {
  const ScreenComponent = React.lazy(
    () =>
      import(
        /* webpackPrefetch: true */
        /* webpackChunkName: "[request]" */
        `./${modulePath}`
      )
  );
  return function LoadedScreen(props) {
    return (
      <Suspense fallback={'Loading..'}>
        <ScreenComponent {...props} />
      </Suspense>
    );
  };
}
