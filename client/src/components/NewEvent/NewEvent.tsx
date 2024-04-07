import React, { useState } from 'react';
import axios from 'axios';
import { Events } from '../../types/types';


export const NewEvent = ({ onAddEvent }: { onAddEvent: (newEvent: Events) => void}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [datetime, setDatetime] = useState('');

    const addNewEvent = () => {
        axios.post("http://localhost:4000/v1/api/events", { title, description, location, datetime })
            .then((res) => {
                onAddEvent(res.data.event);
            })
            .catch((err) => {
                throw err;
            })
    }

    return (
        <div className="new-event">
            <div className="new-event-wrapper">
                <h1>Add Event</h1>
                <form>
                    <div>
                        <label htmlFor="title1">Title:</label><br />
                        <input type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)} /><br />

                        <label htmlFor="description1">Description:</label><br />
                        <input type="text" id="description" name="description" onChange={(e) => setDescription(e.target.value)} /><br />

                        <label htmlFor="location1">Location:</label><br />
                        <input type="text" id="location" name="location" onChange={(e) => setLocation(e.target.value)} /><br />

                        <label htmlFor="datetime1">Date & Time:</label><br />
                        <input type="datetime-local" id="datetime" name="datetime" onChange={(e) => setDatetime(e.target.value)} /><br /><br />

                    </div>
                </form>
                <button onClick={addNewEvent}>Create new Event</button>
            </div>
        </div>
    );
}

