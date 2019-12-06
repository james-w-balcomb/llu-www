import React from "react";
import ReactDOM from "react-dom";

class JavascriptExternal extends React.Component {

    componentDidMount() {
        console.log("JavascriptExternal.componentDidMount()");

        const script = document.createElement("script");

        script.async = true;

        script.src = "https://some-scripturl.js";

        this.div.appendChild(script);

    }

    render() {
        console.log("JavascriptExternal.render()");

        return (

            <div className="App" ref={el => (this.div = el)}>
                <h1>Hello react</h1>
                {/* Script is inserted here */}
            </div>

        );
    }

}
export default JavascriptExternal;
