import React, {Component} from 'react'
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputMask} from 'primereact/inputmask';
import axios from "axios";

export default class ReservationConfirmationView extends Component {

    constructor(props) {
        super(props);

        const items = [];

        let date1 = new Date(this.props.dateStart);
        let date2 = new Date(this.props.dateStop);

        let numberOfDays = (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);

        this.props.reservedRooms.forEach((room) => {
            items.push({
                "number": room.number, "persons": room.numberOfPersons,
                "vege": room.numberOfVege === undefined ? 0 : room.numberOfVege, "price": room.price[room.numberOfPersons - 1] * numberOfDays
            });
        })

        this.state = {
            surname: "",
            name: "",
            phone: "",
            email: "",
            errorMsg: "",
            items: items,
            numberOfDays: numberOfDays
        }
    }

    onChangeSurname = (e) => {
        this.setState({surname: e.target.value});
    }

    onChangeName = (e) => {
        this.setState({name: e.target.value});
    }

    onChangePhone = (e) => {
        this.setState({phone: e.target.value});
    }

    onChangeEmail = (e) => {
        this.setState({email: e.target.value});
    }

    onConfirm = () => {

        if (this.state.surname === "") {
            this.setState({errorMsg: "proszę wypełnić pole imię"});
            return;
        }

        if (this.state.name === "") {
            this.setState({errorMsg: "proszę wypełnić pole nazwisko"});
            return;
        }

        if (this.state.phone === "") {
            this.setState({errorMsg: "proszę wypełnić pole telefon"});
            return;
        }

        if (this.state.email === "") {
            this.setState({errorMsg: "proszę wypełnić pole email"});
            return;
        }

        if (!this.state.email.includes("@")) {
            this.setState({errorMsg: "nieprawidłowy email"});
            return;
        }

        this.setState({errorMsg: ""});

        let date = new Date();

        this.state.items.forEach((room) => {

                axios.post('http://localhost:8989/reservations',{
                timeStamp: date.getDate(),
                numberOfPersons: room.persons,
                fromDate: this.props.dateStart,
                toDate: this.props.dateStop,
                numberOfVege: room.vectoreffect,
                price: room.price,
                name: this.state.name,
                surname: this.state.surname,
                phone: this.state.phone,
                email: this.state.email,
                room:{ number: room.number}
        })
        .then( response => {
                    console.log(response);
                }
            )
                .catch( error => {
                        console.log(error);
                    }
                )

        })

        this.props.onHideReservationConfirmation();
    }

    render() {

        return (
            <div>
                <DataTable value={this.state.items}>
                    <Column field="number" header="numer pokoju"/>
                    <Column field="persons" header="osoby"/>
                    <Column field="vege" header="wege"/>
                    <Column field="price" header="cena za pokój"/>
                </DataTable>

                <h2 className="registration-confirmation-text">Prosimy o wprowadzenie danych w celu potwierdzenia
                    rezerwacji.</h2>
                <br/>
                <div className="registration-confirmation-components-1">
                    <h3>imię :</h3>
                    <InputText value={this.state.surname} onChange={this.onChangeSurname}/>
                    <h3>nazwisko :</h3>
                    <InputText value={this.state.name} onChange={this.onChangeName}/>
                </div>
                <br/>
                <div className="registration-confirmation-components-2">
                    <h3>telefon :</h3>
                    <InputMask mask="999-999-999" value={this.state.phone} onChange={this.onChangePhone}/>
                    <h3>email :</h3>
                    <InputText value={this.state.email} onChange={this.onChangeEmail}/>
                    <h3 className="red-color">{this.state.errorMsg}</h3>
                </div>
                <h2 className="registration-confirmation-text">Wkrótce na wskazany adres zostanie wysłany link
                    aktywujący rezerwację.</h2>
                <h2 className="registration-confirmation-text">W celu potwierdzenia rezerwacji prosimy kliknąć w link.
                    Będzie on aktywny przez godzinę.</h2>
                <br/>

                <br/>
                <div className="buttons-components">
                    <Button label="Zatwierdź" icon="pi pi-check" onClick={this.onConfirm}/>
                    <Button label="Zamknij" icon="pi pi-check" onClick={this.props.onHideReservationConfirmation}/>
                </div>
            </div>
        );
    }
}



