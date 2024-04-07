import React from 'react';
import "./sidebar.scss";

export const SideBar = () => {
    return (
        <>
            <div className="side-bar">
                <div className="side-bar-wrapper">
                    <div className="buttons-wrapper">
                        <button>Dashoard</button>
                        <button>Events</button>
                    </div>
                </div>
            </div>
        </>
    );
}