
import TopBar from "./Components/topbar/TopBar";
import Settings from "./pages/settings/Settings";
import Home from "./pages/home/Home";
import SinglePost from "./Components/singlePost/SinglePost";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  const currentUser = true;
  return (
    <Router>
    <TopBar />
    <Routes>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/posts">
        <Home />
      </Route>
      <Route path="/register">
        {currentUser ? <Home /> : <Register />}
      </Route>
      <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
      <Route path="/post/:id">
        <SinglePost />
      </Route>
      <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
      <Route path="/settings">
        {currentUser ? <Settings /> : <Login />}
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
