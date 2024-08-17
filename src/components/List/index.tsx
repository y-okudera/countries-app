import { Country } from "@/repositories/graphql";
import Component from "./component";

const List = ({ data }: { data: Country[] }) => {
  return <Component data={data} />;
};

export default List;
