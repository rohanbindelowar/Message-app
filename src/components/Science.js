import React from "react";
import CreateNewMessage from "./CreateNewMessage";

const Science = (props) => {
  const requiredata = [];
  const emptyMessage = <h3 className="emptyMessage">There is no message! create new message</h3>

  if(props.data.length != 0){
    for(let i =0;i<props.data.length ;i++){
      if(props.data[i].boards["science"])
        requiredata.push(props.data[i])
    }
  }

  const messagebox =[];
  for(let i =0;i<requiredata.length;i++){
    let stringData ="";
    for(let key in requiredata[i].boards){
      let tempData = "";
      if(requiredata[i].boards[key]){
        tempData= stringData==""? "Board: "+"/"+key+" ":"/"+key+" ";
      }
      stringData =stringData+tempData
    }
  messagebox.push(stringData)
  }
  return (
    <div>
      <CreateNewMessage />
     <h2 className="title">Science</h2>
    {
      requiredata.map((item,i)=> console.log(item.message) )
    }
    </div>
  );
};
export default Science;
