import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import NameEdit from "../components/NameEdit";

const NameLister = () => {
  const [user, setUser] = useState([]);
  const [updName, setUpdName] = useState("");
  const [deleteId, setDeleteId] = useState(0);
  

  useEffect(() => {
    axios
      .get(" http://localhost:3000/user")
      .then((response) => setUser(response.data));
      
  }, [user]);
  

  const saveHandler = async () => {
    // preventDefault();
    // console.log(updId, updName);
    const response = await axios.post(
      "http://localhost:3000/user",

      { name: updName }
      
    );

    console.log(response.data);
    setUpdName("");
  };

  return (
    <>
      <div className="container text-center">
        <h1>Name List</h1>
        <table className="table table-bordered ">
          <thead className="bg-dark table-dark ">
            <tr>
              <td>#id</td>
              <td className="w-50">Name</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {user &&
              user.map((item) => {
                return (
                  <NameEdit
                  
                    key={item.id}
                    itemkey={item.id}
                    item={item}
                    setDeleteId={setDeleteId}
                    deleteId={deleteId}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
      {/* <Modal className="mt-5"/> */}
      <div className="mt-5 container ">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Name
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add Name
                </h1>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="w-100 p-2  rounded border"
                  placeholder="Enter Name"
                  onChange={(e) => setUpdName(e.target.value)}
                />
                
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={saveHandler}
                  disabled={!updName}
                  data-bs-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NameLister;
