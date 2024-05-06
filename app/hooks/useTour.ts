// LIBRARIES
import { useMutation, useQueryClient } from "@tanstack/react-query";

// STYLES
import toast from "react-hot-toast";

// SERVICES
import {
  createNewTour,
  getExistingTour,
  generateTourResponse as generateTourResponseApi,
  type TourProps,
} from "@/services/apiTours";

// const queryClient = useQueryClient();

export const useGetExistingTour = () => {
  useMutation({
    mutationFn: ({ city, country }: TourProps) =>
      getExistingTour({ city, country }),
  });
};

export const useCreateNewTour = () => {};

export const useGenerateTourResponse = () => {
  const {
    mutate: generateTourResponse,
    isPending,
    data: tour,
  } = useMutation({
    mutationFn: (destination: TourProps) =>
      generateTourResponseApi(destination),
    onError: err => {
      toast.error("No matching city found...");
    },
  });

  return { generateTourResponse, isPending, tour };
};
