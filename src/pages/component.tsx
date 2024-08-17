import List from "@/components/List";
import { Country } from "@/repositories/graphql";

type Props = {
  countries: [Country] | undefined;
};

const Component = ({ countries }: Props) => {
  return <>{!!countries && <List data={countries} />}</>;
};

export default Component;
