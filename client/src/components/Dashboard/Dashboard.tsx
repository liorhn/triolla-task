import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./dashboard.scss"
import { Events } from '../../types/types';
import { NewEvent } from '../NewEvent/NewEvent';

export const Dashboard = () => {

    const [events, setEvents] = useState<Events[]>([]);

    useEffect(() => {
        axios.get("http://localhost:4000/v1/api/events", { withCredentials: true })
            .then((res) => {
                setEvents(res.data.result);
            })
            .catch((err) => {
                throw err;
            })
    }, [])

    const handleAddEvent = (newEvent : Events) => {
        setEvents([...events, newEvent]);
    };

    return (
        <>
            <div className="dashboard">
                <div className="dashboard-wrapper">
                    <h1>Dashboard</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Location</th>
                                <th>Date & Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map((event) =>
                                <tr key={event.id}>
                                    <td>{event.id}</td>
                                    <td>{event.title}</td>
                                    <td>{event.description}</td>
                                    <td>{event.location}</td>
                                    <td>{event.date_time}</td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
                <NewEvent onAddEvent={handleAddEvent} />
            </div>
        </>
    );
}