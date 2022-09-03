import React, { Component } from "react";
// import { BrowserRouter, Route, Router } from "react-router-dom";
// import studyFeeAccount from "./StudyFeeAcount";
// import courseResult from "./CoursesResult";
import "../style/StudentHome.css";
import StudentCourse from "./StudentCourse";
class StudentHome extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      hourespayed: 15,
      amount: 3,
    };
  }
  displayRented = (courses) => {
    return (
      <div>
        <h5>CoursesRented:</h5>
        <div className="CoursesRented">
          {courses.map((course) => {
            return course.isAdded ? (
              <StudentCourse
                match={this.props.match}
                isAdded={this.props.isAdded}
                key={course.id}
                course={course}
                add={this.add}
              />
            ) : null;
          })}
        </div>
        <hr />
      </div>
    );
  };
  handleEvent = (event) => {
    let value = event.target.value;
    let key = event.target.name;
    this.setState({ [key]: value });
  };
  serach = (course) => {
    const Name = course.Name.toLowerCase();
    const searchText = this.state.search;
    return searchText === ""
      ? true
      : Name.indexOf(searchText) > -1
      ? true
      : false;
  };
  add = (id) => {
    let state = this.state;
    let coursesArray = [...this.props.state.courses];
    let hourespayed = this.state.hourespayed;
    coursesArray[id].isAdded
      ? this.changeHourespayed(id, state.amount)
      : hourespayed - state.amount < 0
      ? this.alert()
      : this.changeHourespayed(id, -this.state.amount);
  };
  changeHourespayed = (id, hourespayed) => {
    let updatehourespayed = this.state.hourespayed;
    updatehourespayed += hourespayed;
    this.props.isAdded(id);
    this.setState({
      hourespayed: updatehourespayed,
    });
  };
  alert = () => {
    alert("Your add is not allowed, there is not enough Houres");
  };

  //   constructor() {
  //     super();

  //     this.state = {
  //       courses: [
  //         { Name: "css", Time: 2, Day: "Monday" },
  //         { Name: "web", Time: 3, Day: "sunday" },
  //         { Name: "java", Time: 1, Day: "tuesday" },
  //       ],
  //     };
  //   }
  //   add = (e) => {
  //     let x = [...this.state.courses];
  //     x.push(e);
  //     this.setState({ courses: x });
  //   };

  //   delete = (Name) => {
  //     let x = [...this.state.courses];

  //     let y = 0;
  //     for (let i in x) {
  //       if (x[i].Name === Name) {
  //         y = i;
  //         break;
  //       }
  //     }
  //     x.splice(y, 1);
  //     this.setState({ courses: x });
  //   };
  render() {
    const state = this.props.state;
    const arecoursesAdded = state.arecoursesAdded;
    let courses = state.courses;
    return (
      <div className="student-home">
        <nav className="navbarItem">
          <div className="student_Image">student_Image </div>
          <div className="student_iformation">name ,age</div>
        </nav>
        <div className="title">
          {" "}
          <h1>YOUR SCHEDUAL</h1>
        </div>
        <div>
          <div className="search-houresPayed">
            <input
              name="search"
              placeholder="Search"
              onChange={this.handleEvent}
            />
            <div className="hourespayed">
              houresPayed: {this.state.hourespayed}{" "}
            </div>
          </div>
        </div>
        {/* {this.state.courses.map((t) => (
          <StudentCourse data={t} delete={this.delete} />
        ))} */}
        {arecoursesAdded ? this.displayRented(courses) : null}
        <h5>COURSES SCHEDUAL:</h5>
        <div className="STUDENTCourses">
          {courses.map((course) =>
            this.serach(course) ? (
              <StudentCourse
                match={this.props.match}
                isAdded={this.props.isAdded}
                key={course.id}
                course={course}
                add={this.add}
              />
            ) : null
          )}
        </div>
      </div>
    );
  }
}

export default StudentHome;
