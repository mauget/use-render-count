import React, {useState} from 'react';
import './App.css';
import useRenderCount from "./useRenderCount";

function App() {
    const renderCount = useRenderCount();
    console.warn(`Render count: ${renderCount}`);

    const [clicks, setClicks] = useState(0);
    const handleClick = () => setClicks(clicks + 1);

    return (
        <div className="App">
            <div><p>{clicks} clicks</p></div>
            <div>
                <button onClick={handleClick}>Click me</button>
            </div>
        </div>
    );
}

export default App;
