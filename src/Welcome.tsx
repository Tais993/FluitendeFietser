import React from "react";

export default class Welcome extends React.Component<any> {
    render() {
        return <h1>Hello, {
            this.props.name
        }</h1>;
    }
}