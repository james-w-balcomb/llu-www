import React from 'react';

class JavascriptInline extends React.Component {
    render() {
        console.log("JavascriptInline.render()");

        return (
            <script>
                console.log("hello, world");
            </script>
        )
    }
}

export default JavascriptInline;
