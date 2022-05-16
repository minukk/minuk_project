import { useEffect, useState } from 'react';

const useScroll = () => {
  const [height, setHeight] = useState(0);

  const onScroll = () => {
    setHeight(((window.scrollY + window.innerHeight) / document.body.clientHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return height;
};

export default useScroll;
