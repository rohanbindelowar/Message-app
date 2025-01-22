import React from "react";
import CreateNewMessage from "./CreateNewMessage";
import MessageBox from "./MessageBox";

const Arts = (props) => {
  const artsArr = props.data.filter((item)=> item.boards["arts"])
  return (
    <div>
      <CreateNewMessage />
      <h2 className="title">Arts Message Box!</h2>
      {artsArr.length === 0 ? (
        <h3 className="emptyMessage">There is no message! Create a new message.</h3>
      ) : (
        artsArr.map((item, i) => <MessageBox key={i} item={item} />)
      )}
    </div>
  );
};
export default Arts;
