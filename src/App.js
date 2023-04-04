import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className='App'>
            <Navbar />
            <div className='try'>{[32, " ", 23, " ", 42, " ", 23]}</div>
            <div className='content'>
                <Home />
            </div>
        </div>
    );
}

export default App;
