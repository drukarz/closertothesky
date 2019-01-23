import React, { Component } from 'react';
import {Calendar} from 'primereact/calendar';

class UserRegistration extends Component{

    constructor() {
        super();

        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month - 1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;

        let minDate = new Date();
        minDate.setMonth(prevMonth);
        minDate.setFullYear(prevYear);
        let maxDate = new Date();
        maxDate.setMonth(nextMonth);
        maxDate.setFullYear(nextYear);

        this.state = {
            dateStart: null,
            dateStop: null,
            minDate: minDate,
            maxDate: maxDate,
            invalidDates: [today]
        };

        this.dateTemplate = this.dateTemplate.bind(this);
    }

    dateTemplate(date) {
        if (date.day > 10 && date.day < 15) {
            return (
                <div style={{backgroundColor: '#1dcbb3', color: '#ffffff', fontWeight: 'bold', borderRadius: '50%', width: '2em', height: '2em', lineHeight: '2em', padding: 0}}>{date.day}</div>
            );
        }
        else {
            return date.day;
        }
    }

    render() {

        return (
            <div>
                <div className="p-col-12 p-md-4">
                    <h3>Od</h3>
                    <Calendar value={this.state.dateStart} onChange={(e) => this.setState({dateStart: e.value})} showIcon={true} />
                </div>
                <div className="p-col-12 p-md-4">
                    <h3>Do</h3>
                    <Calendar value={this.state.dateStop} onChange={(e) => this.setState({dateStop: e.value})} showIcon={true} />
                </div>
            </div>
        );
    }
}

export default UserRegistration;


