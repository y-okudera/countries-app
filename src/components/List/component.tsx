import { Country } from "@/repositories/graphql";
import { List } from "@mui/material";
import ListItem from "./ListItem";

const Component = ({ data }: { data: Country[] }) => {
  return (
    <List sx={{ width: "100%" }}>
      {data.map((item) => (
        <ListItem key={item.code} item={item} />
      ))}
    </List>
  );
};

export default Component;
