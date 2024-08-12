import { Country } from "@/repositories/graphql";

type Props = {
  countries: [Country] | undefined;
};

const Component = ({ countries }: Props) => {
  return (
    <>
      {countries?.map((country) => {
        return <div key={country.code}>{country.name}</div>;
      })}
    </>
  );
};

export default Component;
