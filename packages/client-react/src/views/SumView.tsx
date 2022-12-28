import { useState } from "react";
import { trpc } from "../utils/trpc";

const SumView = () => {
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");

  /**
   * TODO 3: Send and object containing `a` and `b` field as input to `sum` API
   * and then display result in UI
   */
  const {} = trpc.sum.useQuery({
    /* Create query object according to what you have learn so far */
    /* Hint: You should send inputs query to backend when both of them are ready, then, you need use Dependent Queries mechanism*/
  });

  return (
    <>
      {/* {isLoading && fetchStatus === "fetching" && <div> Is Loading...</div>}
      {isFetching && !isLoading && <div> Is Fetching...</div>} */}
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
      <div>
        {/* Show Result of two numbers here (note: You should display result when data is ready) */}
      </div>
    </>
  );
};

export default SumView;
