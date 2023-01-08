import ReactDOM from "react-dom/client"
import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Nav/>
        <Footer/>
    </React.StrictMode>
)
