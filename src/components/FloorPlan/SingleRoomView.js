import React, {Component} from 'react'
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";

import R1 from '../../assets/images/gallery/rooms/R1.jpg';
import R2 from '../../assets/images/gallery/rooms/R2.jpg';
import R3 from '../../assets/images/gallery/rooms/R3.jpg';
import R5 from '../../assets/images/gallery/rooms/R4.jpg';
import R4 from '../../assets/images/gallery/rooms/R4.jpg';
import R6 from '../../assets/images/gallery/rooms/R6.jpg';

export default class SingleRoomView extends Component{

    constructor(props) {
        super(props);
    }

    state = {
            r1images : ['R6', 'R6', 'R6', 'R6'].map( (name, index) => {
            return <img key={index}
        className="gallery-img-space" alt=""
        src={require(`../../assets/images/gallery/rooms/${name}.jpg`)} />
        }),
    }

    render() {
        return(
            <div>
                {this.state.r1images}
                <br/>
                <br/>
                <div className="single-room-components">
                    <h3>OSOBY</h3>
                    <Button label="+" onClick={this.props.onPlusPersons}/>
                    <InputText value={this.props.numberOfPersons} disabled={true}/>
                    <Button label="-" onClick={this.props.onMinusPersons}/>
                      <h3>DANIA WEGE</h3>
                    <Button label="+" onClick={this.props.onPlusVege}/>
                    <InputText value={this.props.numberOfVege} disabled={true}/>
                    <Button label="-" onClick={this.props.onMinusVege}/>
                    <h3>CENA {this.props.rooms[this.props.visibleRoomId].price[this.props.numberOfPersons - 1]}</h3>
                </div>
                <br/>
                <br/>
                <div className="buttons-components">
                    <Button
                           label="Rezerwuj" icon="pi pi-check" onClick={this.props.onMakeReservation}
                           disabled={this.props.numberOfPersons === 0 ? true : false}/>
                    <Button label="Zamknij" icon="pi pi-check" onClick={this.props.onHideMakeReservation} />
                </div>
            </div>
        );
    }
}

