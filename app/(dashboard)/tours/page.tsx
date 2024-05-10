"use server";

// LIBRARIES
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

// COMPONENTS
import { ToursPage } from "@/components";
import { getAllTour } from "@/services/apiTours";

export default async function AllToursPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["tours"],
    queryFn: () => getAllTour(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ToursPage />
    </HydrationBoundary>
  );
}
