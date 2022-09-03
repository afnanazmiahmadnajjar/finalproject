import React, { Component } from "react";
import "../style/StudentCourse.css";
// import { BrowserRouter, Link } from "react-router-dom";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

export class StudentCourse extends Component {
  changeAction = () => {
    let course = this.props.course;
    const id = course.id;
    this.props.add(id);
  };
  render() {
    let course = this.props.course;
    return (
      <div className="course">
        {/* <Link to={"/StudentCourse/" + course.id}></Link> */}
        <div>
          {" "}
          {course.Name} ( {course.Time}) {course.Day}
        </div>

        <div className={"btn-add"} onClick={this.changeAction}>
          {course.isAdded ? <FaMinusCircle /> : <FaPlusCircle />}{" "}
        </div>
      </div>
    );
  }

  //   delete = () => {
  //     this.props.delete(this.props.data.Name);
  //   };
  //   render() {
  //     return (
  //       <div>
  //         <div className="StudentCourse">
  //           <h2>{this.props.data.Name}</h2>
  //           <h2>{this.props.data.Time}</h2>
  //           <h2>{this.props.data.Day}</h2>
  //           <button className="deleteButton" onClick={this.delete}>
  //             <FcMinus />
  //           </button>
  //         </div>
  //       </div>
  //     );
  //   }
}

export default StudentCourse;
