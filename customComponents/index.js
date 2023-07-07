import React from "react"
import ReactDOM from "react-dom/client"
/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)


Render your list to the page

 */

function Page(){
    return(
        <div>
        <h1>Why can't these tutorials ever seem to come up with anything other than why you're excited to learn X language?</h1>
        <ol>
        <li>It's the law</li>
        <li>Don't question it</li>
        <li>Be excited or face the consequences</li>
        </ol>
        
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page/>);