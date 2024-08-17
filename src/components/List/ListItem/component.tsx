import { Country } from "@/repositories/graphql";
import { Box, Divider, ListItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import Styled from "./styled";

const Component = ({ item }: { item: Country }) => {
  const theme = useTheme();

  return (
    <>
      <ListItem sx={{ display: "block", padding: 0 }}>
        <Styled.ListItemArea>
          <Link
            href={`/countries/${item.code}/detail`}
            style={Styled.ItemLink()}
          >
            <div style={{ ...Styled.EmojiArea(theme) }}>{item.emoji}</div>
            <Box sx={{ width: "85%", display: "block" }}>
              <div
                style={{ ...Styled.ItemBox(theme), flexDirection: "column" }}
              >
                <Styled.ItemTitle>{item.name}</Styled.ItemTitle>
                <Styled.ItemCaption>{item.capital ?? ""}</Styled.ItemCaption>
              </div>
              {item.languages.length > 0 ? (
                <Styled.ItemCaption>
                  {item.languages.map((l) => l.name).join(",")}
                </Styled.ItemCaption>
              ) : (
                <span></span>
              )}
            </Box>
          </Link>
        </Styled.ListItemArea>
        <Divider />
      </ListItem>
    </>
  );
};

export default Component;
