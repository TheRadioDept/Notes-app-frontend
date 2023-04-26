import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    userName: "",
    emailAddress: "",
    userPassword: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-reader">
              Details of user id :
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>userName:</b>
                  {user.userName}
                </li>
                <li className="list-group-item">
                  <b>Email Address:</b>
                  {user.emailAddress}
                </li>
                <li className="list-group-item">
                  <b>Password:</b>
                  {user.userPassword}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary-my-2" to={"/"}></Link>
        </div>
      </div>
    </div>
  );
}
