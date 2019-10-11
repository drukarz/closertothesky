import React, { Component } from 'react';

import {Dialog} from 'primereact/dialog';
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";

import axios from "axios/index";

import R1 from '../../assets/images/gallery/rooms/R1.jpeg';
import R2 from '../../assets/images/gallery/rooms/R2.jpeg';
import R3 from '../../assets/images/gallery/rooms/R3.jpeg';
import R5 from '../../assets/images/gallery/rooms/R4.jpeg';
import R4 from '../../assets/images/gallery/rooms/R4.jpeg';
import R6 from '../../assets/images/gallery/rooms/R6.jpeg';
import RoomsView from "./RoomsView";

class FloorPlan extends Component{

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.reservationOnClick = this.reservationOnClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }

    state = {
            r1images : ['R1', 'R2', 'R3'].map( (name, index) => {
                return <img key={index}
                            className="gallery-img-space" alt=""
                            src={require(`../../assets/images/gallery/rooms/${name}.jpeg`)} />
            }),

        dialogVisible : false,
        visibleRoomId : 0,
        numberOfAdults: 0,
        numberOfChildren: 0,

        rooms : [
            {originalColor: "#27A5BE",
             color: "#27A5BE",
             opacity: 0.3,
             description: "pokój 1 z widokiem na Pana Władka co ma gęsi dwa stadka",
             numberOfAdults: 0,
             numberOfChildren: 0,
             selected: false},
            {originalColor: "#45BFD7",
             color: "#45BFD7",
             opacity: 0.3,
             description: "pokój 2 z widokiem na kluski oraz kilka pierogów ruskich",
             numberOfAdults: 0,
             numberOfChildren: 0,
             selected: false},
            {originalColor: "#70CDDF",
             color: "#70CDDF",
             opacity: 0.3,
             description: "pokój 3 z możliwością spłodzenia dzieci",
             numberOfAdults: 0,
             numberOfChildren: 0,
             selected: false},
            {originalColor: "#89D6E5",color: "#89D6E5",
             opacity: 0.3,
             description: "pokój 4 Karol tu mieszka i można też spotkać Leszka",
             numberOfAdults: 0,
             numberOfChildren: 0,
             selected: false},
            {originalColor: "#9EDDE9",
             color: "#9EDDE9",
             opacity: 0.3,
             description: "pokój angielskiej królowej co właśnie umyła głowę",
             numberOfAdults: 0,
             numberOfChildren: 0,
             selected: false},
            {originalColor: "#9EDDE9",
             color: "#9EDDE9",
             opacity: 0.3,
             description: "do tego pokoju przyszła Pani Hanka, co ma urwane ucho od dzbanka",
             numberOfAdults: 0,
             numberOfChildren: 0,
             selected: false}
        ]

    };

    onClick = (id, e) => {
        /*
        if(this.state.colors[id - 1] === "#CC0000")
            enableReservation = false;*/

        let newRooms = this.state.rooms;

        if(newRooms[id - 1].selected === true) {
           newRooms[id - 1].selected = false;
           newRooms[id - 1].color =  newRooms[id - 1].originalColor ;
           newRooms[id - 1].opacity = 0.3;
           this.setState({rooms : newRooms});
           return;
        }
        else{
            newRooms[id - 1].selected = true;
        }
        this.setState({rooms : newRooms, dialogVisible: true, visibleRoomId: id - 1});
    }

    reservationOnClick = (e) => {
        console.log("reservation on click");
    }

    onPlusAdult = () => {
        this.setState({numberOfAdults : this.state.numberOfAdults + 1})
    }

    onMinusAdult = () => {
        this.setState({
                numberOfAdults: this.state.numberOfAdults - 1 < 0 ?
                this.state.numberOfAdults :
                this.state.numberOfAdults - 1
        },()=>{if (this.state.numberOfAdults === 0)
                      this.setState({numberOfChildren: 0})})
    }

    onPlusChild = ()=> {
        this.setState({numberOfChildren : this.state.numberOfChildren + 1})
    }

    onMinusChild = () => {
        this.setState({numberOfChildren : this.state.numberOfChildren - 1 < 0 ?
                                               this.state.numberOfChildren :
                                               this.state.numberOfChildren - 1})
    }

     onMakeReservation = ()=> {

         let newRooms = this.state.rooms;
         newRooms[this.state.visibleRoomId].color = "#11DD11";
         newRooms[this.state.visibleRoomId].opacity = 1;

         this.setState({rooms:newRooms, dialogVisible: false,
                             numberOfAdults : 0, numberOfChildren : 0});
     }

    onHide()
    {
       this.setState({dialogVisible: false, numberOfAdults : 0, numberOfChildren : 0});
    }

    render(){

        const footer = (
            <div>
                <Button label="Rezerwuj" icon="pi pi-check" onClick={this.onMakeReservation}
                        disabled={this.state.numberOfAdults === 0 ? true : false}/>
                <Button label="Zamknij" icon="pi pi-check" onClick={this.onHide} />
            </div>
        );

        return (
            <div className="section-1">
                <RoomsView colors={this.state.rooms.map((room)=> room.color)}
                           opacity={this.state.rooms.map((room)=> room.opacity)}
                           onClick={this.onClick}/>
                <h1 visible="false">WYBRANO POKOJE {this.state.selectedRooms}</h1>
                <div className="content-section implementation">
                    <Dialog header={this.state.rooms[this.state.visibleRoomId].description} visible={this.state.dialogVisible}
                            footer={footer} onHide={this.onHide} modal={true} maximizable>
                            {this.state.r1images}
                            <br/>
                            <br/>
                            <br/>
                            <h5>DOROSLI</h5>
                            <Button label="+" onClick={this.onPlusAdult}/>
                            <InputText value={this.state.numberOfAdults} disabled={true}/>
                            <Button label="-" onClick={this.onMinusAdult}/>
                            <h5>DZIECI</h5>
                            <Button label="+" onClick={this.onPlusChild} disabled={this.state.numberOfAdults === 0 ? true : false}/>
                            <InputText value={this.state.numberOfChildren} disabled={true}/>
                            <Button label="-" onClick={this.onMinusChild} disabled={this.state.numberOfAdults === 0 ? true : false}/>
                    </Dialog>
                </div>
            </div>
        );
    }
}

export default FloorPlan;




/*
componentDidMount()
{
    /!*console.log('http://localhost:8989/reservations?fromDate=' + this.props.location.state.dateStart +
        '&toDate=' + this.props.location.state.dateStop);

    axios.get('http://localhost:8989/reservations?fromDate=' + this.props.location.state.dateStart +
                   '&toDate=' + this.props.location.state.dateStop)
        .then(reservations => {

            const newColors = [...this.state.colors];

            reservations.data.forEach((res) => {
                    console.log(res.room.number);
                    newColors[res.room.number - 1] = "#CC0000";
                }
            );

            this.setState({colors : newColors})
        })*!/
}
*/
