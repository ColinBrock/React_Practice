import React from "react"
import ReactDOM from "react-dom/client"

const navbar = (
    <nav>
        <h1>Farts Inc</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)


//switched to React 18

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)