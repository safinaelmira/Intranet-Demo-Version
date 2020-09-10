import React, {Component} from 'react';
import ErrorIndicator from '../ErrorIndicator';

export default class ErrorBoundry extends Component{

    state = {
        error: false
    }

    componentDidCatch(){
        this.setState({
            error: true
        });
    }


    render(){
        return(
            <React.Fragment>
                {this.state.error? <ErrorIndicator/> : this.props.children}
            </React.Fragment>
        )
    }
}