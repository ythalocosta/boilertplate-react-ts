import React, { Component } from "react";

// Current application state data
interface StateProps {
    heading: string
}

// Usually received from the parent component
interface OwnProps {
    // Optional as they contain the "?"
    description?: string
}

class PagePrivateBlank extends Component<OwnProps, StateProps> {
    constructor(props: OwnProps) {
        super(props);

        this.state = {
            heading: 'Página em branco - sem redux/Private'
        };
    }

    render() {
        const { heading } = this.state;

        return <>
            <h1>{ heading }</h1>
        </>;
    }
}

export default PagePrivateBlank;