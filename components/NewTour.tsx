"use client";

// LIBRARIES
import { FieldValues, useForm } from "react-hook-form";

// COMPONENTS
import { TourInfo } from "./index";

export default function NewTour() {
  const { register, handleSubmit, reset } = useForm();

  const handleTour = (data: FieldValues) => {
    console.log(data);

    reset();
  };

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

      <div className="mt-16">
        <TourInfo />
      </div>
    </>
  );
}
