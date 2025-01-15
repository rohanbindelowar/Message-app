import React from 'react'
import { Link } from 'react-router-dom';

const CreateNewMessage = () => {
  return (
    <div>
        <Link to={"/create-new"}>
        <button className="itemButton create">Create Message</button>
        </Link>
    </div>
  )
}
export default CreateNewMessage;
