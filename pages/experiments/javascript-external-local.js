import React from 'react';

class JavascriptExternalLocal extends React.Component {
    render() {
        console.log("JavascriptInline.render()");

        return (
            <script src="hello-world-js.js">
                console.log(hello());
            </script>
        )
    }
}

export default JavascriptExternalLocal;
