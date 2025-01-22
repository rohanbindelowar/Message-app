import React from 'react';
import "../styles/MessageBox.css"

const MessageBox = (props) => {
  console.log(props);


  const selectedBoards = Object.keys(props.item.boards)
    .filter((key) => props.item.boards[key]) // Only include selected boards
    .join('/ ').toUpperCase(); // Join them into a comma-separated string

  return (
    <div className='messageBox'>
        <div className="messageInfo">
        <h3 className="boards">{selectedBoards}</h3>
        <h3 className="time">Time: {props.item.time}</h3>
        </div>
      <h1 className="messageBody">{props.item.message}</h1>
      
    </div>
  );
};

export default MessageBox;
