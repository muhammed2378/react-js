import Home from "./components/home/Home";
import BlogList from "./components/home/BlogList";
import Navbar from "./components/Navbar";
import BlogDetails from "./components/home/BlogDetails";
import Create from "./components/Create";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { Switch } from "react-router";

function App() {
    return (
        <Router>
            <div className='App'>
                <Navbar />
                <div className='content'>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/create' element={<Create />}></Route>
                        <Route
                            path='/blogs/:id'
                            element={<BlogDetails />}
                        ></Route>
                        <Route path='/blogs/*' element={<NotFound />}></Route>
                        <Route path='*' element={<NotFound />}></Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
