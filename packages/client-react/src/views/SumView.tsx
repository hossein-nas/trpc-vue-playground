import { useState } from "react";
import { trpc } from "../utils/trpc";

const SumView = () => {
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");

  const {
    data: sum,
    isLoading,
    isFetching,
    isFetched,
    fetchStatus,
    isError,
    error,
  } = trpc.sum.useQuery(
    {
      a: Number(inputA),
      b: Number(inputB),
    },
    {
      enabled: !!(inputA && inputB),
      staleTime: 60 * 60 * 5,
      retry: 0
    }
  );

  return (
    <>
      {isLoading && fetchStatus === "fetching" && <div> Is Loading...</div>}
      {isFetching && !isLoading && <div> Is Fetching...</div>}
      <div>
        <input
          type="text"
          value={inputA}
          onInput={(e) => setInputA(e.currentTarget.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={inputB}
          onInput={(e) => setInputB(e.currentTarget.value)}
        />
      </div>
      {sum && isFetched && !isError && <div>{sum}</div>}
      {isError && <div>{error.message}</div>}
    </>
  );
};

export default SumView;
