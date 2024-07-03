import React from "react";
import json from "./employ.json"
import global from "./global.css"
import Employ from "./Employ.jsx";
function App()
{
    return(
        <div>
            <Employ data = {json}/>
        </div>
    )
}
export default App;