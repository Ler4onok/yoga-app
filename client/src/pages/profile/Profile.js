import React, { useState } from "react";
// components
import { SectionContainer } from "../../ui/SectionContainer";
import { AddEventModal } from "./AddEventModal";

/**
 * User profile with his personal infro and the list of his reservations
 * Admin can add events in profile
 */
export const Profile = () => {
    const [eventModalOpen, setEventModalOpen] = useState(false);

    return (
        <SectionContainer>
            <h1>You can add an event by clicking the button below:</h1>
            <AddEventModal
                eventModalOpen={eventModalOpen}
                setEventModalOpen={setEventModalOpen}
            />
        </SectionContainer>
    );
};