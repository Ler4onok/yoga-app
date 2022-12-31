import React from "react";
// localization
import { FormattedMessage } from "react-intl";
// hooks
import { useFormik } from "formik";
import { useHttp } from "../../hooks/request";
// components
import { SubmitButton } from "../../components/SubmitButton";
import { CancelButton } from "../../components/CancelButton";
// mui
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

/**
 * Modal in profile for adding events by admin
 */
export const AddEventModal = ({ eventModalOpen, setEventModalOpen }) => {
    const { request } = useHttp();

    const openModal = () => setEventModalOpen(true);
    const closeModal = () => setEventModalOpen(false);

    const addEvent = (values) => {
        request("/api/event/add", "POST", {
            name: values.name,
            date: values.date,
            participants: values.participants,
            price: values.price
        }).then((response) => alert("ok"));
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            date: "",
            participants: 0,
            price: 0
        },
        onSubmit: (values) => addEvent(values)
    });

    // todo: make outline field default
    const sharedFieldProps = {
        variant: "outlined"
    };

    return (
        <React.Fragment>
            <Button onClick={openModal}>Add Event</Button>
            <Modal open={eventModalOpen} onClose={closeModal}>
                <Paper
                    elevation={0}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        p: 4
                    }}
                >
                    <Typography variant="h4" sx={{ textAlign: "center" }}>
                        <FormattedMessage id="profile.addEvent" />
                    </Typography>
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
                            {/* todo: map it */}
                            <TextField
                                label="Event Name"
                                id="name"
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                {...sharedFieldProps}
                            />
                            <TextField
                                label="Date"
                                id="date"
                                name="date"
                                onChange={formik.handleChange}
                                value={formik.values.date}
                                {...sharedFieldProps}
                            />
                            <TextField
                                label="Number of participains"
                                id="participants"
                                name="participants"
                                type="number"
                                onChange={formik.handleChange}
                                value={formik.values.participants}
                                {...sharedFieldProps}
                            />
                            <TextField
                                label="Price"
                                id="price"
                                name="price"
                                type="number"
                                onChange={formik.handleChange}
                                value={formik.values.price}
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
                </Paper>
            </Modal>
        </React.Fragment>
    );
};
