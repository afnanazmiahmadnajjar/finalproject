import logo from "./logo.svg";
import "./App.css";
import Navbarside from "./components/Navbarside";
import StudentHome from "./components/StudentHome";
import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./components/Profile";
import CoursesResult from "./components/CoursesResult";
import StudyFeeAcount from "./components/StudyFeeAcount";
import "./App.css";
class App extends Component {
  constructor() {
    super();

    this.state = {
      courses: [
        { id: 0, Name: "css", Time: 2, Day: "Monday", isAdded: false },
        { id: 1, Name: "web", Time: 3, Day: "sunday", isAdded: false },
        { id: 2, Name: "java", Time: 1, Day: "tuesday", isAdded: false },
      ],
      arecoursesAdded: false,
    };
  }
  handleButton = (id) => {
    const courses = [...this.state.courses];
    courses[id].isAdded = !courses[id].isAdded;
    this.setState({
      courses: courses,
    });
    this.arecoursesAdded();
  };
  arecoursesAdded = () => {
    const courses = [...this.state.courses];
    let isAdded = false;
    courses.find((movie) => (movie.isAdded ? (isAdded = true) : null));
    this.setState({
      arecoursesRented: isAdded,
    });
  };
  render() {
    let state = this.state;

    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={() => (
              <StudentHome state={state} isAdded={this.handleButton} />
            )}
          />
          {/* <Route path="/" exact render={() => <StudentHome />} /> */}

          <Navbarside />
          <Route path="/profile" exact render={() => <Profile />} />
          <Route path="/CoursesResult" exact render={() => <CoursesResult />} />
          <Route
            path="/StudyFeeAcount"
            exact
            render={() => <StudyFeeAcount />}
          />
        </div>
      </Router>
    );
  }
}
export default App;
