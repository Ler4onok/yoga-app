import React from "react";
// mui
import Box from "@mui/material/Box";

export const BannerImage = (imageId) => {
    const imageUrls = {
        events: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        home: "https://images.unsplash.com/photo-1584936964770-7d9a3cd21143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    };

    return (
        <Box
            sx={{
                height: "500px",
                backgroundImage: `url(${imageUrls[imageId]})`,
                backgroundPosition: "top",
                backgroundSize: "cover"
            }}
        />
    );
};
