import React, { Component } from 'react';
import {Calendar} from 'primereact/calendar';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import PropTypes from 'prop-types';

class UserRegistration extends Component{

    static contextTypes = {
        router: PropTypes.object
    };

    constructor() {
        super();

        let today = new Date();

        let nextMonth = (today.getMonth() === 11) ? 0 : today.getMonth() + 1;
        let nextYear = (nextMonth === 0) ? today.getFullYear() + 1 : today.getFullYear();

        let minDateFrom = new Date();
        minDateFrom.setMonth(today.getMonth());
        minDateFrom.setFullYear(today.getFullYear());

        let maxDate = new Date();
        maxDate.setMonth(nextMonth);
        maxDate.setFullYear(nextYear)

        this.state = {
            dateStart: null,
            dateStop: null,
            minDateFrom: minDateFrom,
            minDateTo: minDateFrom,
            maxDate: maxDate,
            enabledDateTo: true,
            daysBetween: '',
            numberOfRooms: 0,
            numberOfAdults: 0,
            numberOfChildren: 0,
            errorMessage: ""
        };

        this.reservationFromOnClick = this.reservationFromOnClick.bind(this);
        this.reservationToOnClick = this.reservationToOnClick.bind(this);
        this.makeReservationOnClick = this.makeReservationOnClick.bind(this);
    }

    reservationFromOnClick(event) {

        this.setState({dateStart: event.value});
        this.setState({minDateTo: event.value});
        this.setState({dateStop: null})
        this.setState({daysBetween: ''});

        if(event.value !== undefined) {
            this.setState({enabledDateTo: false});
        }
    }

    reservationToOnClick(event) {

        this.setState({dateStop: event.value});
        let daysBetween = Math.round((event.value.getTime() - this.state.dateStart.getTime())/(1000*60*60*24));

        daysBetween++;

        if(daysBetween === 1){
            this.setState({daysBetween: 'wybrano 1 dzień'});
        }
        if(daysBetween > 1){
            this.setState({daysBetween: 'wybrano ' + daysBetween + ' dni'});
        }

        if(daysBetween > 0){
            this.setState({errorMessage: ''});
        }
    }

    makeReservationOnClick(event){

        if(this.state.daysBetween < 1) {
            this.setState({errorMessage: 'nie wybrano dni'});
            return;
        }

        if(this.state.numberOfRooms === 0) {
            this.setState({errorMessage: 'nie wybrano liczby pokoi'});
            return;
        }

        if(this.state.numberOfAdults === 0) {
            this.setState({errorMessage: 'nie wybrano liczby osob'});
            return;
        }

        this.context.router.history.push({
            pathname: '/floor',
            state: { dateStart : this.state.dateStart, dateStop : this.state.dateStop}
        });
    }

    render() {
                return (
                <div>
                <h3>rezerwuj od</h3>
                <Calendar minDate={this.state.minDateFrom} maxDate={this.state.maxDate}
                          value={this.state.dateStart} onChange={this.reservationFromOnClick} showIcon={true} />

                <h3>rezerwuj do</h3>
                <Calendar minDate={this.state.minDateTo} maxDate={this.state.maxDate}
                          value={this.state.dateStop} onChange={this.reservationToOnClick}
                          showIcon={true} disabled={this.state.enabledDateTo}/>
                <h3>{this.state.daysBetween}</h3>
                <h3>pokoje</h3>
                <div>
                    <Button label="+" onClick={(e) => {this.setState({numberOfRooms: this.state.numberOfRooms + 1})
                                                       this.setState({errorMessage: ''});}}/>
                    <InputText value={this.state.numberOfRooms} disabled={true}/>
                    <Button label="-" onClick={(e) => {let numberOfRooms = this.state.numberOfRooms - 1;
                                                       if (numberOfRooms < 0)
                                                           numberOfRooms = 0;
                                                       this.setState({numberOfRooms: numberOfRooms});
                                                       this.setState({errorMessage: ''});}
                    }/>
                </div>
                <h3>dorośli</h3>
                <div>
                    <Button label="+" onClick={(e) => {this.setState({numberOfAdults: this.state.numberOfAdults + 1})
                                                       this.setState({errorMessage: ''});}}/>
                    <InputText value={this.state.numberOfAdults} disabled={true}/>
                    <Button label="-" onClick={(e) => {let numberOfAdults = this.state.numberOfAdults - 1;
                                                       if(numberOfAdults < 0)
                                                           numberOfAdults = 0;
                                                       this.setState({numberOfAdults: numberOfAdults});
                                                       this.setState({errorMessage: ''});}
                                              }/>
                </div>
                <h3>dzieci</h3>
                <div>
                    <Button label="+" onClick={(e) => this.setState({numberOfChildren: this.state.numberOfChildren + 1})}/>
                    <InputText value={this.state.numberOfChildren} disabled={true}/>
                    <Button label="-" onClick={(e) => {let numberOfChildren = this.state.numberOfChildren - 1;
                                                       if(numberOfChildren < 0)
                                                          numberOfChildren = 0;
                                                       this.setState({numberOfChildren: numberOfChildren});}
                                               }/>
                </div>
                <div>
                    <Button label="rezerwuj" onClick={this.makeReservationOnClick}/>
                </div>
                <h3>{this.state.errorMessage}</h3>
            </div>
        );
    }
}

export default UserRegistration;


