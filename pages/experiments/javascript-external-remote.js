import React from 'react';

class JavascriptExternalRemote extends React.Component {
    render() {
        console.log("JavascriptInline.render()");

        return (
            <script src="https://cdn.jsdelivr.net/npm/hello-world-js@0.0.2/src/index.js">
                console.log(hello());
            </script>
        )
    }
}

export default JavascriptExternalRemote;
