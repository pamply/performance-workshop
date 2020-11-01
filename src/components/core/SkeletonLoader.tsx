import React from 'react';
import { Skeleton } from '@material-ui/lab';

const SkeletonItem = () => (
  <div style={{ marginBottom: '40px' }}>
    <Skeleton variant="rect" width={400} height={130} />
    <Skeleton variant="text" width={400} />
  </div>
);
const elements = [1, 2, 3];
export const SkeletonLoader = () => {
  return (
    <>
      {elements.map((el) => (
        <SkeletonItem key={el} />
      ))}
    </>
  );
};
