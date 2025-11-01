import { getQueryClient, trpc } from '@/trpc/server';
import ClientPage from './client';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';


const Home = async () => {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  return (
    <div className="flex min-h-screen items-center justify-center text-red-500 font-sans dark:bg-black">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>Loading...</div>}>
          <ClientPage />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
}

export default Home;
