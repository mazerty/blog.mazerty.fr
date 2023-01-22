import ReactDOM from "react-dom/client"
import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"
import pages from "./pages.js"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <div className="bg-gray-700 text-gray-200 min-h-screen">
            <Nav/>
            <main className="max-w-4xl mx-auto pt-20">
                {pages.map(page => (
                    <div key={page.key} className="px-5 py-4 mb-4 border border-gray-500 rounded shadow-lg">
                        <div>{page.title}</div>
                        <div>{page.description}</div>
                    </div>
                ))}
            </main>
            <Footer/>
        </div>
    </React.StrictMode>
)
