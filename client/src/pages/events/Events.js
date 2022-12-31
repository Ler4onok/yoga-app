import React from "react";
// localization
import { FormattedMessage } from "react-intl";
// components
import { Header } from "../../ui/Header";
import { BannerImage } from "../../ui/BannerImage";
import { EventsList } from "./EventsList";
import { SectionContainer } from "../../ui/SectionContainer";
// mui
import { Typography } from "@mui/material";

/**
 * Events page with the list of events
 */
export const Events = () => {
    return (
        <React.Fragment>
            <Header />
            <BannerImage id="events" />
            <SectionContainer>
                <Typography
                    variant="h4"
                    sx={{ letterSpacing: 3, mb: 2, textAlign: "center" }}
                >
                    <FormattedMessage id="events.title" />
                </Typography>
                <EventsList />
            </SectionContainer>
        </React.Fragment>
    );
};
