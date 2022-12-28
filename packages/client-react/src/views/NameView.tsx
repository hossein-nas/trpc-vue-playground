import React from "react";
import { trpc } from "../utils/trpc";

const NameView = () => {
  /**
   * TODO 2: Send and object containing `name` field and then get greeting
   * response with your name and display it in UI
   */
  const {} =
    trpc.greeting.useQuery(/* An object containing name field with your name */);

  // if (isLoading) {
  //   return <div>Is loading ...</div>;
  // }

  return <div>{/* Display greeting message here */}</div>;
};

export default NameView;
