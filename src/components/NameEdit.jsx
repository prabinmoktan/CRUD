import React from "react";
import { useState } from "react";
import axios from "axios";




const NameEdit = ({ item, deleteId, setDeleteId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [addName, setAddName] = useState([]);
  
  const [errorMsg, setErrorMsg] = useState([]);

  
 

  const editHandler = (e, id) => {
    e.preventDefault();
    console.log(id);
    setIsEditing(true);
  };

  const deleteButton = async () => {
    await axios
      .delete(`http://localhost:3000/user/${deleteId}`)
      .then((res) => {});
      setIsEditing(false)
     
      
  };

 

  const changeHandler = (e) => {
    
    setAddName(e.target.value);
  };

  const saveHandler = async (e, id) => {
    e.preventDefault();
    // if( addName = ""){
    //   setErrorMsg("edit the name")
    // }
    // else
    // {
      const response = await axios.patch(
        `http://localhost:3000/user/${item.id}`,
        { name: addName }
      );
      setErrorMsg("edit the name")
      
    // }
  };

  return (
    <>
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>
          <button
            className="btn btn-secondary me-5"
            onClick={(e) => editHandler(e, item.id)}
            data-bs-toggle="modal"
            data-bs-target="#editModal"
          >
            Edit
          </button>
          {isEditing ? (
            <>
           
              <div
                className="modal fade"
                id="editModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Edit Name
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <input
                        type="text"
                        className="w-100 p-2  rounded border"
                        onChange={changeHandler}
                        placeholder={item.name}
                        // value={addName}
                      />
                      <p className="text-danger ">{errorMsg}</p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                        
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={saveHandler}
                        data-bs-dismiss="modal"
                        disabled={!item.name}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-danger ms-5 "
                data-bs-toggle="modal"
                data-bs-target="#deleteModal"
                onClick={(e) => setDeleteId(item.id)}
              >
                Delete
              </button>
            </>
          ) : (
            <>
            
              <button
                className="btn btn-danger ms-5 "
                data-bs-toggle="modal"
                data-bs-target="#deleteModal"
                onClick={(e) => setDeleteId(item.id)}
              >
                Delete
              </button>
            </>
          )}

          <div
            className="modal fade"
            id="deleteModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog h-25 ">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Are You sure?
                  </h1>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    No
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={(e) => deleteButton()}
                  >
                    Yes, Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default NameEdit;
