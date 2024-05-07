"use client";

// LIBRARIES
import { FieldValues, useForm } from "react-hook-form";

// COMPONENTS
import { TourInfo } from "./index";

// HOOKS
import {
  useGenerateTourResponse,
  useGetExistingTour,
  useCreateNewTour,
} from "@/app/hooks/useTour";

export default function NewTour() {
  const { register, handleSubmit, reset } = useForm();
  const { generateTourResponse, isPending, tour } = useGenerateTourResponse();
  const { getExistingTour, isPending: isPending2 } = useGetExistingTour();
  const { createNewTour, isPending: isPending3 } = useCreateNewTour();

  const handleTour = (data: FieldValues) => {
    const existingTour = getExistingTour({
      city: data.city,
      country: data.country,
    });

    if (existingTour !== undefined) return existingTour;

    const newTour = generateTourResponse({
      city: data.city,
      country: data.country,
    });

    if (newTour !== undefined) createNewTour(newTour);

    reset();
  };

  if (isPending || isPending2 || isPending3)
    return <span className="loading loading-lg" />;

  return (
    <>
      <form onSubmit={handleSubmit(handleTour)} className="max-w-2xl">
        <h2 className="mb-4">Select your dream destination</h2>
        <div className="join w-full">
          <input
            type="text"
            className="input input-bordered join-item w-full capitalize"
            placeholder="city"
            required
            {...register("city", { required: true })}
          />

          <input
            type="text"
            className="input input-bordered join-item w-full capitalize"
            placeholder="country"
            required
            {...register("country", { required: true })}
          />

          <button
            className="join-item btn btn-primary capitalize"
            type="submit"
          >
            generate tour
          </button>
        </div>
      </form>

      <div className="mt-16">{tour && <TourInfo tour={tour} />}</div>
    </>
  );
}
