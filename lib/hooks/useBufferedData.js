import useSWR from "swr";
import { useState } from "react";

export function useBufferedData(url) {
  let { error, data } = useSWR(url);
  let [buffer, setBuffer] = useState(data);

  if (data && !buffer) setBuffer(data);

  return {
    data: buffer,
    error,
    stale: buffer !== data,
    update: () => setBuffer(data),
  };
}
