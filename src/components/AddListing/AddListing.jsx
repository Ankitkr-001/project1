import React from 'react'
import "./AddListing.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const AddListing = () => {
  return (
    <div className='addlisting'>
        <div className="addlistings">
            <div className="addlistings-title">
            <FontAwesomeIcon className='addlistings-icon' icon={faCirclePlus} />
            <h1>Add your own</h1>
            </div>
            <div className="addlistings-para">
                <p>
                Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page
                </p>
            </div>
            <div className="addlisting-btn">
                <button type='submit'>Add new</button>
            </div>
        </div>
    </div>
  )
}

export default AddListing