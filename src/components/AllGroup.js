import React from 'react'
import CreateNewMessage from './CreateNewMessage';
import MessageBox from './MessageBox';


const AllGroup = (props) => {
  
  const dataArr = props.data;
  console.log(dataArr);
  return (
    <div>
         <CreateNewMessage/>
         <h2 className="title">All Message Box!</h2>
        {
          dataArr.length==0?  <h3 className="emptyMessage">There is no message! Create a new message.</h3>:
          dataArr.map((item,i)=><MessageBox item={item}/>)
        }
         
    </div>
  )
}
export default AllGroup;
