import React, { Component } from 'react';
import {Calendar} from "primereact/calendar";
import {Button} from "primereact/button";
import PropTypes from 'prop-types';
import {InputText} from "primereact/inputtext";
import {Dialog} from "primereact/dialog";
import FloorPlan from "../FloorPlan/FloorPlan";

class Registration extends Component
{
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
            dialogVisible: false,
        };

        this.reservationFromOnClick = this.reservationFromOnClick.bind(this);
        this.reservationToOnClick = this.reservationToOnClick.bind(this);
        this.makeReservationOnClick = this.makeReservationOnClick.bind(this);
    }

    reservationFromOnClick(event)
    {
        if(event.value === undefined)
            return;

        let date = new Date(event.value);

        date.setHours(date.getHours() + 24);

        this.setState({enabledDateTo: true});
        this.setState({dateStart: date.toISOString().substring(0, 10)});
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

        let date = new Date(event.value);
        date.setHours(date.getHours() + 24);

        this.setState({checkButtonDisabled: false});
        this.setState({dateStop: date.toISOString().substring(0, 10)})
    }

    makeReservationOnClick(event)
    {
        this.setState({dialogVisible : true});
    }

    onHide = () => {

        this.setState({dialogVisible : false});
    }

    render()
    {
        return(
                <div>
                    <br/>
                    <h3>
                        przyjazd
                    </h3>
                    <Calendar minDate={this.state.minDateFrom}
                              maxDate={this.state.maxDate}
                              value={this.state.dateStart}
                              onChange={this.reservationFromOnClick} showIcon={true} />
                    <h3>
                        wyjazd
                    </h3>
                    <Calendar minDate={this.state.minDateTo}
                              maxDate={this.state.maxDate}
                              value={this.state.dateStop}
                              onChange={this.reservationToOnClick}
                              showIcon={true} disabled={this.state.enabledDateTo}/>
                    <br/>
                    <br/>
                    <br/>
                    <Button className="button-size"
                            label="sprawdź dostępność" disabled={this.state.checkButtonDisabled} onClick={this.makeReservationOnClick}/>
                <Dialog
                        header={"REZERWACJA POKOI OD " + this.state.dateStart + " DO " + this.state.dateStop}
                        visible={this.state.dialogVisible}
                        style={{width: '80vw'}}
                        footer="" onHide={this.onHide}
                        modal={true}
                        maximizable>
                    <FloorPlan dateStart={this.state.dateStart} dateStop={this.state.dateStop} onHide = {this.onHide}/>
                </Dialog>

            </div>
        );
    }
}

export default Registration;