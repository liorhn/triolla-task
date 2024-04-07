import React from 'react';
import { SideBar } from '../SideBar/SideBar';
import { NewEvent } from '../NewEvent/NewEvent';
import { Dashboard } from '../Dashboard/Dashboard';
import "./app.scss"

export const App = () => {
    return (
        <>
            <div className="triolla-task">
                <SideBar />
                <Dashboard />
            </div>
        </>
    );
}