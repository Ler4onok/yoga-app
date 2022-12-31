import React from "react";
// localization
import { FormattedMessage } from "react-intl";
// components
import { Header } from "../ui/Header";
import { BannerImage } from "../ui/BannerImage";
import { SectionContainer } from "../ui/SectionContainer";
// mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// todo: redo paddings in sections
export const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Box>
                <BannerImage id="home" position="top" />
                <SectionContainer>
                    <Typography
                        variant="h4"
                        sx={{ letterSpacing: 3, mb: 2, textAlign: "center" }}
                    >
                        <FormattedMessage id="home.welcome.title" />
                    </Typography>
                    <Typography variant="p" sx={{ textAlign: "center" }}>
                        <FormattedMessage id="home.welcome.text" />
                    </Typography>
                </SectionContainer>
            </Box>
        </React.Fragment>
    );
};
