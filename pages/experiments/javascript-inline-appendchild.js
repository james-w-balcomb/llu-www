import React from 'react';

class JavascriptInlineAppendChild extends React.Component {

    componentDidMount () {
        console.log("JavascriptInlineAppendChild.componentDidMount()");

        // <script>
        //                 console.log("hello, world");
        //             </script>

        const script = document.createElement("script");
        script.type = "text/javascript";
        // script.async = true;
        // A call to document.write() from an asynchronously-loaded external script was ignored.
        // // script.async = true;
        // A call to document.write() from an asynchronously-loaded external script was ignored.
        // script.innerHTML = 'console.log("hello, world")';
        script.innerHTML = 'console.log("hello, world")';
        this.instance.appendChild(script);

        //   script.onload = () => this.scriptLoaded();

        // const script = document.createElement("script");
        // script.src = "https://use.typekit.net/foobar.js";
        // script.async = true;
        // document.body.appendChild(script);

        // const node = ReactDOM.findDOMNode(this.refs.picker);
        //         return (
        //             <div>
        //                 <input type='text' ref='picker' />
        //             </div>
        //         )
    }

    render() {
        console.log("JavascriptInlineAppendChild.render()");

        return (
            <div ref={el => (this.instance = el)} />
        )
    }
}

export default JavascriptInlineAppendChild;
