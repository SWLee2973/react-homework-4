
import PocketBase from 'pocketbase';

function usePb() {

  const END_POINT = import.meta.env.VITE_PB_URL;
  const pb = new PocketBase(END_POINT)

  return pb;
}

export default usePb;