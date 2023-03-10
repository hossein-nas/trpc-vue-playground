import React from "react";
import { trpc } from "../utils/trpc";

const HomeView = () => {

  /**
   * TODO 1: Display `greeting` message on UI
   */
  const {
    data: greeting,
    isFetched,
    isFetching,
    isLoading,
  } = trpc.greeting.useQuery();

  if (isLoading) {
    return <div>Is loading ...</div>;
  }

  return (
    <>
      {isFetching && <div> Is Fetching...</div>}
      {isFetched && greeting && <div> {greeting}</div>}
    </>
  );
};

export default HomeView;
