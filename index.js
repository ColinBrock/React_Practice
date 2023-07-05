import React from "react"
import ReactDOM from "react-dom/client"
/**
Challenge: fix our code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.
 */

const page = (
    <div>
        <h1>My awesome website in React</h1>
        <h3>Reasons I love Peeact</h3>
        <ol>
            <li>It's ?</li>
            <li>It's neat</li>
            <li>It's *indistinguishable*</li>
            <li>I don't actually love it</li>
        </ol>
    </div>
)
//Did challenge using 18
document.getElementById("root").append(JSON.stringify(page))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(page)