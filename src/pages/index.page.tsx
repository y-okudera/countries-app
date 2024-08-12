import useCountries from "@/hooks/useCountries";
import { useEffect } from "react";
import Component from "./component";

const Home = () => {
  const { countries, error, fetchCountries } = useCountries();

  useEffect(() => {
    fetchCountries({});
  }, []);

  useEffect(() => {
    console.error(error);
  }, [error]);

  return <Component countries={countries} />;
};

export default Home;
