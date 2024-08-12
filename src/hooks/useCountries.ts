import { Country, getSdk } from "@/repositories/graphql";
import { GraphQLClient } from "graphql-request";
import { useRef, useState } from "react";

const useCountries = () => {
  const processing = useRef(false);
  const [countries, setCountries] = useState<[Country]>();
  const [error, setError] = useState<Error>();

  const fetchCountries = async ({ code }: { code?: string }) => {
    processing.current = true;
    const endpoint = process.env.NEXT_PUBLIC_COUNTRIES_API_URL;
    const client = new GraphQLClient(endpoint ? endpoint : "");
    const sdk = getSdk(client);

    const listCountriesQuery = code
      ? sdk.ListCountriesByCode({ code: code })
      : sdk.ListCountries();

    listCountriesQuery
      .then((res) => {
        setTimeout(() => {
          processing.current = false;
        }, 2000);
        const data = res.countries as [Country];
        setCountries(data);
      })
      .catch((err) => {
        setTimeout(() => {
          processing.current = false;
        }, 2000);
        setError(err);
      });
  };

  return { countries, error, fetchCountries };
};

export default useCountries;
