import React from "react";

import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function CrudList({ data, openMenu }) {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: { xs: "100vw", sm: "500px" },
        // width: "100%",
        // maxWidth: 450,
        bgcolor: "background.paper",
      }}
    >
      {data.map((item) => {
        return (
          <ListItem key={item.id}>
            <ListItemButton>
              <ListItemText
                style={{ wordWrap: "break-word" }}
                primary={item.name}
              ></ListItemText>
              <IconButton
                onClick={(event) => {
                  openMenu(event, item);
                }}
                edge="end"
                aria-label="more"
              >
                <MoreVertIcon />
              </IconButton>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
