import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardActionArea } from "@mui/material";
import Fab from "@mui/material/Fab";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const AddCard = () => (
  <Box sx={{ maxWidth: 200, position: "relative" }}>
    <Box sx={{ maxWidth: 150, height: 60 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
        alt="green iguana"
        sx={{
          zIndex: 10,
          position: "absolute",
          width: `70%`,
          height: `50%`,
          borderRadius: `50%`,
          top: "2%",
          left: `14%`,
        }}
      />
    </Box>
    <Card>
      <CardActionArea>
        <CardContent>
          <Box
            sx={{
              marginTop: 10,
              height: 100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                "& > :not(style)": { m: 1 },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Fab
                size="small"
                color="secondary"
                aria-label="add"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgb(255,0,0,0.2)",
                }}
              >
                <HorizontalRuleIcon sx={{ color: "red" }} />
              </Fab>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  </Box>
);
export default AddCard;
