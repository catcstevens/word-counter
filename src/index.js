import React from "react"
import ReactDOM from "react-dom"

const Greeting = () => {
    return <h1> Hi there, my good friend!</h1>
}

const App = () => {
    return (
        <div>
            <Greeting />
            <Greeting />
        </div>
    )
}
	
	

ReactDOM.render(<App />, document.getElementById("root"))