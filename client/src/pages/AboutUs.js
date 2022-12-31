import React from "react";
// localization
import { FormattedMessage } from "react-intl";
// mui
import { Typography } from "@mui/material";
// components
import { BannerImage } from "../ui/BannerImage";
import { Header } from "../ui/Header";
import { SectionContainer } from "../ui/SectionContainer";

/**
 * About us page with the infromation about studio
 */
export const AboutUs = () => {
    return (
        <React.Fragment>
            <Header />
            <BannerImage id="about" />
            <SectionContainer>
                <Typography
                    variant="h4"
                    sx={{ letterSpacing: 3, mb: 2, textAlign: "center" }}
                >
                    <FormattedMessage id="about.title" />
                </Typography>
            </SectionContainer>
        </React.Fragment>
    );
};
