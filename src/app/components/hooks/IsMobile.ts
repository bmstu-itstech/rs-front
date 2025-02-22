'use client';
import {useEffect, useState} from 'react';

const useMobile = () => {
  const [state, setState] = useState<boolean>(
    () => typeof document !== "undefined" && document.body.clientWidth <= 700,
  );

  useEffect(() => {
    if (!document) return;
    const onResize = () => setState(document.body.clientWidth <= 700);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return state;
};

export default useMobile;
