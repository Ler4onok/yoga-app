import React, { useEffect, useState } from "react";
// localization
import { FormattedMessage } from "react-intl";
// hooks
import { useHttp } from "../../hooks/request";
// mui
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

/**
 * List of planned events which is shown on the events page
 */
export const EventsList = () => {
  const { request } = useHttp();
  const [eventList, setEventList] = useState([]);

  // get event list
  useEffect(() => {
    request("api/event/events").then((response) => {
      setEventList(response.data);
    });
  }, []);

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: (theme) => theme.spacing(2),
      }}
    >
      {eventList.map((event) => {
        return (
          <Card
            key={event.name}
            sx={{
              px: 4,
              py: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h6">{event.name}</Typography>
              <Typography>{event.price}</Typography>
            </Box>
            <Box>
              <Button>
                <FormattedMessage id="events.join" />
              </Button>
            </Box>
          </Card>
        );
      })}
    </Container>
  );
};
