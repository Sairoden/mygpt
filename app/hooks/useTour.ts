// LIBRARIES
import { useMutation, useQueryClient } from "@tanstack/react-query";

// STYLES
import toast from "react-hot-toast";

// SERVICES
import {
  createNewTour as createNewTourApi,
  getExistingTour as getExistingTourApi,
  generateTourResponse as generateTourResponseApi,
  type TourProps,
} from "@/services/apiTours";

// const queryClient = useQueryClient();

export const useGetExistingTour = () => {
  const { mutate: getExistingTour, isPending } = useMutation({
    mutationFn: ({ city, country }: TourProps) =>
      getExistingTourApi({ city, country }),
  });

  return { getExistingTour, isPending };
};

export const useCreateNewTour = () => {
  const queryClient = useQueryClient();

  const { mutate: createNewTour, isPending } = useMutation({
    mutationFn: ({ city, country }: TourProps) =>
      createNewTourApi({ city, country }),
  });

  queryClient.invalidateQueries({ queryKey: ["tours"] });

  return { createNewTour, isPending };
};

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
