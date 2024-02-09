
import { useState, useEffect } from 'react';

function useCover() {
  const [cover, setCover] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setCover(false);
    }, 2000);
  }, []);

  return cover;
}

export default useCover;