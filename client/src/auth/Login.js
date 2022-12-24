import React from "react";
// form
import { useFormik } from "formik";
// mui
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
// components
import { SubmitButton } from "../components/SubmitButton";
import { CancelButton } from "../components/CancelButton";
// hooks
import { useNavigate } from "react-router-dom";
import { AuthContainer } from "./AuthContainer";
import { useHttp } from "../hooks/request";

/**
 *  Login form to authorize a user
 */
export const Login = () => {
    const navigate = useNavigate();
    const { request } = useHttp();

    // a simple form initialization
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        // todo: different buttons for register and login
        onSubmit: (values) => {
            handleLogin(values);
        }
    });

    const handleLogin = (values) => {
        request("api/auth/login", "POST", {
            email: values.email,
            password: values.password
        }).then((response) => {
            if (response.status === 201) {
                const token = response.data.token;
                localStorage.setItem("token", token);
                navigate("/");
            } else {
                // todo: handle error
                alert("Something went wrong...");
            }
        });
    };

    const sharedFieldProps = {
        variant: "outlined"
    };

    // TODO: add component box with positioning props
    return (
        <AuthContainer isRegister={false}>
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
