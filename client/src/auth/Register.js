import React from "react";
// form
import { useFormik } from "formik";
// hooks
import { useNavigate } from "react-router-dom";
import { useHttp } from "../hooks/request";
// mui
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
// components
import { SubmitButton } from "../components/SubmitButton";
import { CancelButton } from "../components/CancelButton";
import { AuthContainer } from "./AuthContainer";

/**
 *  Register form to add a new user
 */
export const Register = () => {
    const navigate = useNavigate();
    const { request } = useHttp();

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            handleRegister(values);
        }
    });

    const handleRegister = (values) => {
        request("/api/auth/register", "POST", {
            email: values.email,
            password: values.password
        }).then((response) => {
            if (response.status === 201) {
                // todo: create beautiful notification
                alert("User was successfully created!");
                navigate("/login");
            } else {
                // todo: handle error
                alert("Something went wrong...");
            }
        });
    };

    const sharedFieldProps = {
        variant: "outlined"
    };

    return (
        <AuthContainer isRegister={true}>
            <Box component="form" onSubmit={formik.handleSubmit}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: (theme) => theme.spacing(2),
                        py: 2
                    }}
                >
                    <TextField
                        label="Usermane"
                        id="username"
                        name="username"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        {...sharedFieldProps}
                    />
                    <TextField
                        label="Email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        {...sharedFieldProps}
                    />
                    <TextField
                        label="Password"
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        {...sharedFieldProps}
                    />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        gap: (theme) => theme.spacing(1),
                        alignItems: "center",
                        justifyContent: "flex-end"
                    }}
                >
                    <CancelButton />
                    <SubmitButton />
                </Box>
            </Box>
        </AuthContainer>
    );
};
