import React, {Component} from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';

class ConfirmReservationDialog extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <Dialog visible={this.props.show}/>
            </div>
        );

    }
}

export default ConfirmReservationDialog;


