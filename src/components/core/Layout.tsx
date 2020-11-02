import React, { ReactChild, Suspense } from 'react';
import './layout.css';

interface LayoutProps {
  children: ReactChild;
}

export const Layout = (props: LayoutProps) => {
  const LazyHeader = React.lazy(
    () =>
      import(
        /* webpackPrefetch: true */
        /* webpackChunkName: "NonCritical" */
        './Header'
      )
  );
  return (
    <div className="layout">
      <Suspense fallback={''}>
        <LazyHeader />
      </Suspense>
      {props.children}
    </div>
  );
};
