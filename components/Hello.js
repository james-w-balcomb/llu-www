import React from 'react'

class HelloClassComponent extends React.Component {
    render() {
        return <h1>hello, world</h1>
    }
}

function HelloFunctionES5() {
    return <h1>hello, world</h1>
}

const HelloFunctionES6ArrowExplicit = () => {
    return <h1>hello, world</h1>
};

const HelloFunctionES6ArrowImplicit = () =>
    <h1>hello, world</h1>;

class HelloClassProps extends React.Component {
    render() {
        return <h1>{props.hello}</h1>
    }
}

function HelloFunctionES5Props(props) {
    return <h1>{props.hello}</h1>
}

const HelloFunctionES6ArrowExplicitProps = (props) => {
    return <h1>{props.hello}</h1>
};

const HelloFunctionES6ArrowImplicitProps = (props) =>
    <h1>{props.hello}</h1>;

class HelloClassPropsConstructor extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h1>{this.props.hello}</h1>
    }
}

// TODO(JamesBalcomb): figure what is means for these to be purple, yellow, or grey
module.exports = {
    HelloClassComponent: HelloClassComponent,
    HelloFunctionES5: HelloFunctionES5,
    HelloFunctionES6ArrowExplicit: HelloFunctionES6ArrowExplicit,
    HelloFunctionES6ArrowImplicit: HelloFunctionES6ArrowImplicit,
    HelloClassProps: HelloClassProps,
    HelloFunctionES5Props: HelloFunctionES5Props,
    HelloFunctionES6ArrowExplicitProps: HelloFunctionES6ArrowExplicitProps,
    HelloFunctionES6ArrowImplicitProps: HelloFunctionES6ArrowImplicitProps,
    HelloClassPropsConstructor: HelloClassPropsConstructor
};
