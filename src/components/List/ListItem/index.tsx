import { Country } from "@/repositories/graphql";
import Component from "./component";

const ListItem = ({ item }: { item: Country }) => {
  return <Component item={item} />;
};

export default ListItem;
