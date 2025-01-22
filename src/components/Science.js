import React from "react";
import CreateNewMessage from "./CreateNewMessage";
import MessageBox from "./MessageBox";

const Science = (props) => {
  const scienceMessages = props.data.filter((item) => item.boards["science"]);

  return (
    <div>
      <CreateNewMessage />
      <h2 className="title">Science Message Box!</h2>
      {scienceMessages.length === 0 ? (
        <h3 className="emptyMessage">There is no message! Create a new message.</h3>
      ) : (
        scienceMessages.map((item, i) => <MessageBox key={i} item={item} />)
      )}
    </div>
  );
};

export default Science;
