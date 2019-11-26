import React, { Component } from 'react';
import {Calendar} from "primereact/calendar";
import {Button} from "primereact/button";
import PropTypes from 'prop-types';

class Registration extends Component
{
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props)
    {
        super(props);

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
            checkButtonDisabled: true,
        };

        this.reservationFromOnClick = this.reservationFromOnClick.bind(this);
        this.reservationToOnClick = this.reservationToOnClick.bind(this);
        this.makeReservationOnClick = this.makeReservationOnClick.bind(this);
    }

    reservationFromOnClick(event)
    {
        this.setState({enabledDateTo: true});
        this.setState({dateStart: event.value});
        this.setState({minDateTo: event.value});
        this.setState({dateStop: null})
        this.setState({checkButtonDisabled: true});

        if(event.value !== undefined && event.value !== "")
        {
            this.setState({enabledDateTo: false});
        }
    }

    reservationToOnClick(event)
    {
        if(event.value === "")
        {
            this.setState({checkButtonDisabled: true});
            return;
        }

        this.setState({checkButtonDisabled: false});
        this.setState({dateStop: event.value})
    }

    makeReservationOnClick(event)
    {
        this.context.router.history.push({
            pathname: '/floor',
            state: { dateStart : this.state.dateStart, dateStop : this.state.dateStop}
        });
    }

    render()
    {
        return(

            <div className="reg-item">
                przyjazd
                <Calendar minDate={this.state.minDateFrom} maxDate={this.state.maxDate}
                          value={this.state.dateStart} onChange={this.reservationFromOnClick} showIcon={true} />
                wyjazd
                <Calendar minDate={this.state.minDateTo} maxDate={this.state.maxDate}
                          value={this.state.dateStop} onChange={this.reservationToOnClick}
                          showIcon={true} disabled={this.state.enabledDateTo}/>
                <Button label="sprawdź dostępność" disabled={this.state.checkButtonDisabled} onClick={this.makeReservationOnClick}/>
            </div>
        );
    }
}

export default Registration;