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
        numberOfPersons: 0,

        rooms : [
            {number: 1,
             originalColor: "#27A5BE",
             color: "#27A5BE",
             description: "pokój 1 z widokiem na Pana Władka co ma gęsi dwa stadka",
             numberOfPersons: 0,
             selected: false,
             price: 0},
            {number: 2,
             originalColor: "#45BFD7",
             color: "#45BFD7",
             description: "pokój 2 z widokiem na kluski oraz kilka pierogów ruskich",
             numberOfPersons: 0,
             selected: false,
             price: 0},
            {number: 3,
             originalColor: "#70CDDF",
             color: "#70CDDF",
             description: "pokój 3 z możliwością spłodzenia dzieci",
             numberOfPersons: 0,
             selected: false,
             price: 0},
            {number: 4,
             originalColor: "#89D6E5",color: "#89D6E5",
             description: "pokój 4 Karol tu mieszka i można też spotkać Leszka",
             numberOfPersons: 0,
             selected: false,
             price: 0},
            {number: 5,
             originalColor: "#9EDDE9",
             color: "#9EDDE9",
             description: "pokój angielskiej królowej co właśnie umyła głowę",
             numberOfPersons: 0,
             selected: false,
             price: 0},
            {number: 6,
             originalColor: "#9EDDE9",
             color: "#9EDDE9",
             description: "do tego pokoju przyszła Pani Hanka, co ma urwane ucho od dzbanka",
             numberOfPersons: 0,
             selected: false,
             price: 0}
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
           this.setState({rooms : newRooms});
           return;
        }
        else{newRooms[id - 1].selected = true;}
        this.setState({rooms : newRooms, dialogVisible: true, visibleRoomId: id - 1});
    }

    reservationOnClick = (e) => {
        console.log("reservation on click");
    }

    onPlusPersons = () => {

        let newNumber = this.state.numberOfPersons < this.state.rooms[this.state.visibleRoomId].numberOfPersons ?
                        this.state.numberOfPersons + 1 : this.state.numberOfPersons;

        this.setState({numberOfPersons : newNumber})
    }

    onMinusPersons = () => {
        this.setState({
                numberOfPersons: this.state.numberOfPersons - 1 < 0 ?
                this.state.numberOfPersons :
                this.state.numberOfPersons - 1
        })
    }

     onMakeReservation = ()=> {

         let newRooms = this.state.rooms;
         newRooms[this.state.visibleRoomId].color = "#11DD11";
         newRooms[this.state.visibleRoomId].numberOfPersons = this.state.numberOfPersons;
         newRooms[this.state.visibleRoomId].selected = true;

         this.setState({rooms:newRooms, dialogVisible: false,
             numberOfPersons : 0});
     }

    onHide()
    {
        let newRooms = this.state.rooms;
        newRooms[this.state.visibleRoomId].selected = false;

        this.setState({dialogVisible: false, numberOfPersons : 0});
    }

    componentDidMount()
    {
        let newRooms = this.state.rooms;

        axios.get('http://localhost:8989/rooms')
            .then( rooms => {

                console.log(rooms);

                rooms.data.forEach((room) => {
                        for (let index = 0; index < newRooms.length; index++) {
                            if (newRooms[index].number === room.number) {
                                newRooms[index].numberOfPersons = room.numberOfBeds;
                                newRooms[index].price = room.price;
                                break;
                            }
                        }
                    }
                );
            }
        )

        console.log('http://localhost:8989/reservations?fromDate=' + this.props.location.state.dateStart +
            '&toDate=' + this.props.location.state.dateStop)

        axios.get('http://localhost:8989/reservations?fromDate=' + this.props.location.state.dateStart +
            '&toDate=' + this.props.location.state.dateStop)
            .then(reservations => {

                reservations.data.forEach((res) => {
                        console.log(res.room.number);

                        newRooms[res.room.number - 1].color = "#CC0000";
                    }
                );
            })

        this.setState({rooms: newRooms});
    }

    render(){

        const footer = (
            <div>
                <Button label="Rezerwuj" icon="pi pi-check" onClick={this.onMakeReservation}
                        disabled={this.state.numberOfPersons === 0 ? true : false}/>
                <Button label="Zamknij" icon="pi pi-check" onClick={this.onHide} />
            </div>
        );

        return (
            <div className="section-1">
                <RoomsView colors={this.state.rooms.map((room)=> room.color)}
                           onClick={this.onClick}/>
                <h1 visible="false">WYBRANO POKOJE {this.state.selectedRooms}</h1>
                <div className="content-section implementation">
                    <Dialog header={this.state.rooms[this.state.visibleRoomId].description} visible={this.state.dialogVisible}
                            footer={footer} onHide={this.onHide} modal={true} maximizable>
                            {this.state.r1images}
                            <br/>
                            <br/>
                            <br/>
                            <h5>OSOBY</h5>
                            <Button label="+" onClick={this.onPlusPersons}/>
                            <InputText value={this.state.numberOfPersons} disabled={true}/>
                            <Button label="-" onClick={this.onMinusPersons}/>
                            <h5>CENA {this.state.rooms[this.state.visibleRoomId].price * this.state.numberOfPersons}</h5>
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
