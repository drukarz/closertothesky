import React, { Component } from 'react';
import {Calendar} from 'primereact/calendar';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';

class UserRegistration extends Component{

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
            numberOfChildren: 0
        };

        this.reservationFromOnClick = this.reservationFromOnClick.bind(this);
        this.reservationToOnClick = this.reservationToOnClick.bind(this);
        this.roomPlusOnClick = this.roomPlusOnClick.bind(this);
        this.roomMinusOnClick = this.roomMinusOnClick.bind(this);
        this.adultsPlusOnClick = this.adultsPlusOnClick.bind(this);
        this.adultsMinusOnClick = this.adultsMinusOnClick.bind(this);
        this.childrenPlusOnClick = this.childrenPlusOnClick.bind(this);
        this.childrenMinusOnClick = this.childrenMinusOnClick.bind(this);
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
    }

    roomPlusOnClick(){
        this.setState({numberOfRooms: this.state.numberOfRooms + 1});
    }

    roomMinusOnClick(){
        let numberOfRooms = this.state.numberOfRooms - 1;

        if(numberOfRooms < 0)
            numberOfRooms = 0;

        this.setState({numberOfRooms: numberOfRooms})
    }

    adultsPlusOnClick(){
        this.setState({numberOfAdults: this.state.numberOfAdults + 1});
    }

    adultsMinusOnClick(){
        let numberOfAdults = this.state.numberOfAdults - 1;

        if(numberOfAdults < 0)
            numberOfAdults = 0;

        this.setState({numberOfAdults: numberOfAdults})
    }

    childrenPlusOnClick(){
        this.setState({numberOfChildren: this.state.numberOfChildren + 1});
    }

    childrenMinusOnClick(){
        let numberOfChildren = this.state.numberOfChildren - 1;

        if(numberOfChildren < 0)
            numberOfChildren = 0;

        this.setState({numberOfChildren: numberOfChildren})
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
                    <Button label="+" onClick={this.roomPlusOnClick}/>
                    <InputText value={this.state.numberOfRooms} disabled={true}/>
                    <Button label="-" onClick={this.roomMinusOnClick}/>
                </div>
                <h3>dorośli</h3>
                <div>
                    <Button label="+" onClick={this.adultsPlusOnClick}/>
                    <InputText value={this.state.numberOfAdults} disabled={true}/>
                    <Button label="-" onClick={this.adultsMinusOnClick}/>
                </div>
                <h3>dzieci</h3>
                <div>
                    <Button label="+" onClick={this.childrenPlusOnClick}/>
                    <InputText value={this.state.numberOfChildren} disabled={true}/>
                    <Button label="-" onClick={this.childrenMinusOnClick}/>
                </div>
            </div>
        );
    }
}

export default UserRegistration;


