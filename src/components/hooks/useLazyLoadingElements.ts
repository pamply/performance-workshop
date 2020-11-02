import React from 'react';

export const useLazyLoadingElements = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const containerRef = React.useRef();

  const options: IntersectionObserverInit = {
    threshold: 1.0,
  };
  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  };
  const observer = React.useRef(
    new IntersectionObserver(observerCallback, options)
  );

  React.useLayoutEffect(() => {
    let targetToUnobserve = null;
    if (containerRef.current) {
      observer.current.observe(containerRef.current);
      targetToUnobserve = containerRef.current;
    }
    return () => {
      observer.current.unobserve(targetToUnobserve);
    };
  }, [observer, containerRef]);

  return { isVisible, containerRef };
};
