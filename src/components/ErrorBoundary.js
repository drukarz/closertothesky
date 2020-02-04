import React, {Component} from 'react';

export default class ErrorBoundary extends Component {

    constructor(props)
    {
        super(props);
        this.state = { hasError: false, message: ""};
    }

    static getDerivedStateFromError(error)
    {
        return { hasError: true };
    }

    componentDidCatch(error, info)
    {
        console.log('componentDidCatch');
        console.log(error.message);
        console.log(info);
        this.setState({message : error.message})
    }

    render()
    {
        console.log('EB render')
        console.log(this.state.message)

        if (this.state.hasError)
        {
            return <h1>{this.state.message}</h1>;
        }

        return this.props.children;
    }
}

