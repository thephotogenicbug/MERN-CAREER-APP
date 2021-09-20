import React, { Component } from "react";
import { Link } from "react-router-dom";
class AdminDashboard extends Component {
  constructor() {
    super();
    this.state = {
      interviewlist: [],
      message: "",
    };
  }

  getInterview = () => {
    fetch("http://localhost:5000/api/interviewapi/getall")
      .then((response) => response.json())
      .then((allinterview) =>
        this.setState({
          interviewlist: allinterview,
        })
      );
  };

  componentDidMount() {
    this.getInterview();
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-sm table-bordered text-center">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.interviewlist.map((interview) => {
                  return (
                    <tr key={interview._id}>
                      <td>{interview.name}</td>
                      <td>{interview.email}</td>
                      <td>{interview.mobile}</td>
                      <td>
                        {" "}
                        <Link
                          to={`${interview._id}/edit`}
                          className="btn btn-warning btn-sm m-2 text-white"
                        >
                          Edit Interview
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default AdminDashboard;

/* 
hr interview
managers interview 
processing,
selected,
rejected

*/
