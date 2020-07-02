import React from "react"
import ReactDOM from "react-dom"

const Messages = [
    'Well...the years start coming and they don\'t stop coming',
    'Life is a highway and I\'m gonna ride it all night long',
    'All I wanna do is have some fun'
]

const randomElement = Messages[Math.floor(Math.random() * Messages.length)];

const HappyMessage = () => {
    return <p>{ randomElement } </p>
}

const App = () => {
    return (
        <div>
            <HappyMessage />
        </div>
    )
}
	
	

ReactDOM.render(<App />, document.getElementById("root"))