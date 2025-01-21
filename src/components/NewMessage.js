import React, { useState } from "react";
import '../styles/NewMessage.css'

const NewMessage = (props) => {
    const [message, setMessage] = useState("");
    const [boards, setBoards] = useState({
        all: false,
        science: false,
        arts: false,
        engineer: false,
    });

    function readyToSubmit() {
        return message.trim() !== "" && Object.values(boards).some((selected) => selected);
    }

    function handleChange(e) {
        setMessage(e.target.value);
    }

    function handleSwitch(e) {
        const { id, checked } = e.target;
        const updatedBoards = { ...boards };

        if (id === "all") {
            Object.keys(updatedBoards).forEach((key) => {
                updatedBoards[key] = checked;
            });
        } else {
            updatedBoards[id] = checked;
            if (updatedBoards.all) {
                updatedBoards.all = false;
            }
        }

        setBoards(updatedBoards);
    }

    function handleSubmit(e) {
        if (!readyToSubmit()) return;

        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const time = `${hours}:${minutes.toString().padStart(2, "0")}`;

        const newData = {
            message,
            boards,
            time,
        };

        props.handleNewData(newData);

        
        alert("Message sent successfully!");
        window.location.href="/"
        
        
    }

    return (
        <div>
            <div className="container">
                <h2 className="label">Write your message! </h2>
                <textarea
                    className="message"
                    id="message"
                    onChange={handleChange}
                    value={message}
                    placeholder="Type your message here..."
                />
                <h3 className="selectorLabel">Select your group! </h3>
                <div className="selectorBox">
                    
                    <div className="selector">
                        <input
                            className="checkbox"
                            id="all"
                            checked={boards["all"]}
                            onChange={handleSwitch}
                            type="checkbox"
                        />{" "}
                        All
                    </div>
                    <div className="selector">
                        <input
                            className="checkbox"
                            id="science"
                            checked={boards["science"]}
                            onChange={handleSwitch}
                            type="checkbox"
                        />{" "}
                        Science
                    </div>
                    <div className="selector">
                        <input
                            className="checkbox"
                            id="engineer"
                            checked={boards["engineer"]}
                            onChange={handleSwitch}
                            type="checkbox"
                        />{" "}
                        Engineer
                    </div>
                    <div className="selector">
                        <input
                            className="checkbox"
                            id="arts"
                            checked={boards["arts"]}
                            onChange={handleSwitch}
                            type="checkbox"
                        />{" "}
                        Arts
                    </div>
                </div>
                <button
                    className="sendMessage"
                    onClick={handleSubmit}
                    disabled={!readyToSubmit()}
                >
                    Send!
                </button>
            </div>
        </div>
    );
};

export default NewMessage;
