import React from "react";
import CreateNewMessage from "./CreateNewMessage";
import MessageBox from "./MessageBox";

const Engineer = (props) => {

  const engineerArr = props.data.filter((item)=> item.boards["engineer"]);
  
  return (
    <div>
      <CreateNewMessage />
      <h2 className="title">Engineer Message Box!</h2>
        {
          engineerArr.length==0?  <h3 className="emptyMessage">There is no message! Create a new message.</h3>:
          engineerArr.map((item,i)=><MessageBox key={i} item={item}/>)
        }
         
    </div>
  );
};
export default Engineer;
