import React from "react";
// mui
import Box from "@mui/material/Box";

/**
 * Container for page sections, which adds paddings and space between sections
 */
export const SectionContainer = ({ children }) => {
    return (
        <Box
            sx={{
                p: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "gray.main"
            }}
        >
            {children}
        </Box>
    );
};
