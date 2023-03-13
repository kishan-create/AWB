import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
function DeleteConfirmation({ onDelete }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleDelete = () => {
    onDelete();
    setIsVisible(false);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  return (
    <>
<DeleteIcon/>
     
        <div className="confirmation-popup">
          <p>Are you sure you want to delete?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={handleCancel}>No</button>
        </div>
 
    </>
  );
}

export default DeleteConfirmation;