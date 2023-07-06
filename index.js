import React from "react"
import ReactDOM from "react-dom/client"
/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

const funFacts = (
    <div>
    
    <img src="./react-logo.png" width='40px'/>
    
        <h1>Fun facts about React</h1>
        <ul>
        <li>OG release in 2013</li>
        <li>Jordan Walke made it :)</li>
        <li>Over 100k stars on GH (cool)</li>
        <li>Facebook rules it and all of us</li>
        <li>Can control mobile devices and computer devices using the "React Power Core" (RPC)*</li>
        </ul>
        <p style={{fontSize:".5rem"}}> *Note some facts may be slightly embellished.</p>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(funFacts)