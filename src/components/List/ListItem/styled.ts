import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import { Theme, styled } from "@mui/material/styles";

const ListItemArea = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
}));

const ItemLink = () => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  alignSelf: "stretch",
  textDecoration: "none",
});

const EmojiArea = (theme: Theme) => ({
  ...theme.typography.h2,
  border: "none",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
});

const ItemBox = (theme: Theme) => ({
  display: "flex",
  gap: theme.spacing(1),
  width: "100%",
});

const ItemTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  ...theme.typography.h5,
  color: theme.palette.text.primary,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
}));

const ItemCaption = styled(Typography)<TypographyProps>(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.primary,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
}));

const Styled = {
  ListItemArea,
  ItemLink,
  EmojiArea,
  ItemBox,
  ItemTitle,
  ItemCaption,
};

export default Styled;
