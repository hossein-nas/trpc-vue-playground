import React from 'react'
import { trpc } from '../utils/trpc';

const NameView = () => {
  const {
    data: greeting,
    isFetched,
    isFetching,
    isLoading,
  } = trpc.greeting.useQuery({name: 'Hossein Nasiri'});

  if (isLoading) {
    return <div>Is loading ...</div>;
  }

  return (
    <>
      {isFetching && <div> Is Fetching...</div>}
      {isFetched && greeting && <div> {greeting}</div>}
    </>
  );
}

export default NameView