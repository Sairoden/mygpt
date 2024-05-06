type TourInfoProps = {
  tour: string;
};

export default function TourInfo({ tour }: TourInfoProps) {
  console.log(tour);

  return <h1>TourInfo</h1>;
}
