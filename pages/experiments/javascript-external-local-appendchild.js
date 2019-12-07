import React from 'react';

class JavascriptExternalLocalAppendChild extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mainHeading: ""
        }
    }

    componentDidMount () {
        console.log("JavascriptExternalLocalAppendChild.componentDidMount()");

        const script = document.createElement("script");
        script.type = "module";
        // script.src = "../static/hello-world-console-log.js";
        script.src = "../static/hello-world-console-log-export.js";
        script.async = true;
        document.body.appendChild(script);

        this.state.mainHeading = window.aHelloWorldConsolelogExport();
        // this.state.mainHeading = window["aHelloWorldConsolelogExport"]();

    }

    render() {
        console.log("JavascriptExternalLocalAppendChild.render()");

        return (
            <div>
                <h1>{this.state.mainHeading}</h1>
            </div>
        )
    }
}

export default JavascriptExternalLocalAppendChild;
