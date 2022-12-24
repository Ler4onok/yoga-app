import React from "react";
// translation
import { FormattedMessage } from "react-intl";
// mui
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Link } from "../ui/Link";

/**
 * A page where log in and sign in are handled
 */
export const AuthContainer = ({ children, isRegister }) => {
    return (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // todo: change
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1611094607507-8c8173e5cf33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)"
            }}
        >
            <Card sx={{ p: (theme) => theme.spacing(2) }}>
                <Typography variant="h4" sx={{ textAlign: "center" }}>
                    <FormattedMessage
                        id={isRegister ? "auth.register" : "auth.login"}
                    />
                </Typography>
                {children}
                {/* todo: override link styles in theme */}
                <Link
                    to={isRegister ? "/login" : "/register"}
                    sx={{
                        color: "black",
                        textDecorationColor: "black",
                        textAlign: "center"
                    }}
                >
                    <FormattedMessage
                        id={isRegister ? "auth.toLogin" : "auth.toRegister"}
                    />
                </Link>
            </Card>
        </Box>
    );
};
