import React, { Component } from 'react';
import {Button} from "primereact/button";
import axios from "axios/index";
import RoomsView from "./RoomsView";
import SingleRoomView from "./SingleRoomView";
import ReservationConfirmationView from "./ReservationConfirmationView";

export default class FloorPlan extends Component{

    constructor(props) {
        super(props);

        this.state = {
            visibleRoomId : 0,
            numberOfPersons: 0,
            numberOfVege: 0,
            activeReservation: false,
            rooms : [
                {number: 1, originalColor: "#D7D6D6", color: "#D7D6D6", numberOfPersons: 0, numberOfVege: 0, price: []},
                {number: 2, originalColor: "#D7D6D6", color: "#D7D6D6", numberOfPersons: 0, numberOfVege: 0, price: []},
                {number: 3, originalColor: "#D7D6D6", color: "#D7D6D6", numberOfPersons: 0, numberOfVege: 0, price: []},
                {number: 4, originalColor: "#D7D6D6", color: "#D7D6D6", numberOfPersons: 0, numberOfVege: 0, price: []},
                {number: 5, originalColor: "#D7D6D6", color: "#D7D6D6", numberOfPersons: 0, numberOfVege: 0, price: []},
                {number: 6, originalColor: "#D7D6D6", color: "#D7D6D6", numberOfPersons: 0, numberOfVege: 0, price: []},
                {number: 7, originalColor: "#D7D6D6", color: "#D7D6D6", numberOfPersons: 0, numberOfVege: 0, price: []},
                {number: 8, originalColor: "#D7D6D6", color: "#D7D6D6", numberOfPersons: 0, numberOfVege: 0, price: []},
                {number: 9, originalColor: "#D7D6D6", color: "#D7D6D6", numberOfPersons: 0, numberOfVege: 0, price: []},
                {number: 10, originalColor: "#D7D6D6", color: "#D7D6D6", numberOfPersons: 0, numberOfVege: 0, price: []},
                {number: 11, originalColor: "#D7D6D6", color: "#D7D6D6", numberOfPersons: 0, numberOfVege: 0, price: []},
                {number: 12, originalColor: "#D7D6D6", color: "#D7D6D6", numberOfPersons: 0, numberOfVege: 0, price: []}
            ],

            reservedRooms : [],
            viewMode: 'roomsView',
            message: 'wybierz pokój',
            error : false
        };
    }

    onClick = (id, e) => {

        let newRooms = this.state.rooms;

        if(newRooms[id - 1].color === "#CC0000")
            return;

        newRooms[id - 1].selected = !newRooms[id - 1].selected;

        if(newRooms[id - 1].selected === false)
            newRooms[id - 1].color = newRooms[id - 1].originalColor;
        else
            this.setState({visibleRoomId: id - 1, viewMode: 'singleRoomView'});

        this.setState({rooms : newRooms});

        this.prepareMessage();
    }

    onPlusPersons = () => {

        let newNumber = this.state.numberOfPersons < this.state.rooms[this.state.visibleRoomId].numberOfBeds ?
                        this.state.numberOfPersons + 1 : this.state.numberOfPersons;

        this.setState({numberOfPersons : newNumber, numberOfVege : 0})
    }

    onMinusPersons = () => {
        this.setState({ numberOfPersons: this.state.numberOfPersons - 1 < 0 ?
                this.state.numberOfPersons : this.state.numberOfPersons - 1, numberOfVege : 0})
    }

    onPlusVege = () => {
        let newNumber = this.state.numberOfVege < this.state.numberOfPersons ?
            this.state.numberOfVege + 1 : this.state.numberOfVege;

        this.setState({numberOfVege : newNumber})
    }

    onMinusVege = () => {
        this.setState({ numberOfVege: this.state.numberOfVege - 1 < 0 ?
                this.state.numberOfVege : this.state.numberOfVege - 1})
    }

    onHideMakeReservation = ()=> {

        let newRooms = this.state.rooms;
        newRooms[this.state.visibleRoomId].selected = false;
        this.setState({numberOfPersons : 0, numberOfVege : 0, viewMode: 'roomsView'});

        this.prepareMessage();
    }

    onMakeReservation = ()=> {
        let newRooms = this.state.rooms;
        newRooms[this.state.visibleRoomId].color = "#11DD11";
        newRooms[this.state.visibleRoomId].numberOfPersons = this.state.numberOfPersons;
        newRooms[this.state.visibleRoomId].numberOfVege = this.state.numberOfVege;
        newRooms[this.state.visibleRoomId].selected = true;
        this.setState({rooms:newRooms, numberOfPersons : 0, numberOfVege : 0, activeReservation : true,
                       viewMode: 'roomsView'});
    }

    onHideReservationConfirmation = ()=> {
        this.setState({viewMode: 'roomsView'});
        this.props.onHide();
    }

    onConfirmReservation = ()=> {

        let reservedRooms = [];
        this.state.rooms.forEach((room) => {
            if(room.selected === true){
                reservedRooms.push(room);
            }
        })

        this.setState({viewMode: 'confirmationView', reservedRooms : reservedRooms});
    }

    prepareMessage = () => {

        let newRooms = this.state.rooms;
        let activeReservation = false;
        let numberOfSelectedRooms = 0;
        let message = "";

        newRooms.forEach((room) => {
            if(room.selected === true) {
                activeReservation = true;
                numberOfSelectedRooms = numberOfSelectedRooms + 1;
            }
        })

        if(numberOfSelectedRooms === 0)
            message = 'wybierz pokój';

        if(numberOfSelectedRooms === 1)
            message = 'wybrano 1 pokój';

        if(numberOfSelectedRooms > 1 && numberOfSelectedRooms < 5)
            message = 'wybrano ' + numberOfSelectedRooms + ' pokoje';

        if(numberOfSelectedRooms > 4)
            message = 'wybrano ' + numberOfSelectedRooms + ' pokoi';

        this.setState({activeReservation : activeReservation, message: message});
    }

    componentWillReceiveProps(nextProps, nextContext) {

        // when newly appearing on the screen reset to rooms view
        let newRooms = this.state.rooms;

        newRooms.forEach((room) => {
            room.selected = false;
            room.color = room.originalColor;
        })

        this.setState({viewMode: 'roomsView',
                       reservedRooms : [],
                       rooms: newRooms,
                       activeReservation: false});

        axios.get('http://localhost:8989/rooms')
            .then( rooms => {
                    rooms.data.forEach((room) => {
                            for (let index = 0; index < newRooms.length; index++) {
                                if (newRooms[index].number === room.number) {
                                    newRooms[index].numberOfBeds = room.numberOfBeds;
                                    newRooms[index].description = room.description;
                                    newRooms[index].price = [];
                                    newRooms[index].price[0] = room.price1;
                                    newRooms[index].price[1] = room.price2;
                                    newRooms[index].price[2] = room.price3;
                                    newRooms[index].price[3] = room.price4;
                                    break;
                                }
                            }
                        }
                    );
                }
            )
            .catch(error => {
                    console.log('componentWillReceiveProps 1 catch')
                    this.setState({error : true})

                }
            )


        let allRoomsReserved = true;

        axios.get('http://localhost:8989/reservations?fromDate=' + this.props.dateStart +
            '&toDate=' + this.props.dateStop)
            .then(reservations => {
                    reservations.data.forEach((res) => {
                            newRooms[res.room.number - 1].color = "#CC0000";
                        }
                );

                newRooms.forEach((room) => {
                    if(room.color !== "#CC0000")
                        allRoomsReserved = false;
                })

                let message = allRoomsReserved === true ? 'przepraszamy w podanym terminie nie ma wolnych pokoi' :
                                                          'wybierz pokój';

                this.setState({rooms: newRooms, message: message});

            })
            .catch( error => {
                    this.setState({error : true})}
            )
    }

    render()
    {
        if(this.state.error === true){
           /* this.setState({error : false});
            throw new Error('Przepraszamy, system rezerwacji chwilowo niedostpny.');*/
        }

        return (
            <div className="back-5">
                {this.state.viewMode === 'roomsView' &&
                    <RoomsView colors={this.state.rooms.map((room) => room.color)}
                               onClick={this.onClick}/>

                }
                <div className="img-space-around">
                    {this.state.viewMode === 'roomsView' &&
                        <h1 className="offer-text">{this.state.message} </h1>
                    }
                    {this.state.viewMode === 'roomsView' &&
                        <Button style={this.state.activeReservation ? {visibility: "visible",
                                                                       width: "300px",
                                                                       height: "50px"} :
                                                                      {visibility: "hidden"}}
                                label="Zatwierdź" icon="pi pi-check"
                                onClick={this.onConfirmReservation}/>
                    }
                </div>
                {this.state.viewMode === 'singleRoomView' &&
                    <SingleRoomView
                     onPlusPersons={this.onPlusPersons}
                     numberOfPersons={this.state.numberOfPersons}
                     onMinusPersons={this.onMinusPersons}
                     onPlusVege={this.onPlusVege}
                     numberOfVege={this.state.numberOfVege}
                     onMinusVege={this.onMinusVege}
                     rooms={this.state.rooms}
                     visibleRoomId={this.state.visibleRoomId}
                     onMakeReservation={this.onMakeReservation}
                     onHideMakeReservation={this.onHideMakeReservation}/>
                }
                {this.state.viewMode === 'confirmationView' &&
                    <ReservationConfirmationView
                     reservedRooms={this.state.reservedRooms}
                     dateStart={this.props.dateStart}
                     dateStop={this.props.dateStop}
                     onHideReservationConfirmation={this.onHideReservationConfirmation}/>
                }
            </div>
        );
    }
}











