import React, {Component} from 'react'
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";

export default class SingleRoomView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: null
        }
    }

    componentDidMount(){
        this.MapVisaulRoomIdToImagesSet();
    }

    MapVisaulRoomIdToImagesSet() {
        if (this.props.visibleRoomId === 5)
            this.setState({images: ['01', '02', '03', '04', '05'].map((name, index) => {
                    return <img key={index}
                                className="single-room-img-space" alt=""
                                src={require(`../../assets/images/rooms/R1/${name}.jpg`)}/>})})
        if (this.props.visibleRoomId === 2)
            this.setState({images: ['01', '02', '03', '04', '05', '06'].map((name, index) => {
                    return <img key={index}
                                className="single-room-img-space" alt=""
                                src={require(`../../assets/images/rooms/R2/${name}.jpg`)}/>})})
        if (this.props.visibleRoomId === 4)
            this.setState({images: ['01', '02', '03', '04', '05'].map((name, index) => {
                    return <img key={index}
                                className="single-room-img-space" alt=""
                                src={require(`../../assets/images/rooms/R3/${name}.jpg`)}/>})})
        if (this.props.visibleRoomId === 3)
            this.setState({images: ['01', '02', '03', '04', '05', '06'].map((name, index) => {
                    return <img key={index}
                                className="single-room-img-space" alt=""
                                src={require(`../../assets/images/rooms/R4/${name}.jpg`)}/>})})
        if (this.props.visibleRoomId === 0)
            this.setState({images: ['01', '02', '03', '04'].map((name, index) => {
                    return <img key={index}
                                className="single-room-img-space" alt=""
                                src={require(`../../assets/images/rooms/R5/${name}.jpg`)}/>})})
        if (this.props.visibleRoomId === 1)
            this.setState({images: ['01', '02', '03', '04'].map((name, index) => {
                    return <img key={index}
                                className="single-room-img-space" alt=""
                                src={require(`../../assets/images/rooms/R6/${name}.jpg`)}/>})})
        if (this.props.visibleRoomId === 11)
            this.setState({images: ['01', '02', '03', '04', '05'].map((name, index) => {
                    return <img key={index}
                                className="single-room-img-space" alt=""
                                src={require(`../../assets/images/rooms/R7/${name}.jpg`)}/>})})
        if (this.props.visibleRoomId === 6)
            this.setState({images: ['01', '02', '03', '04', '05'].map((name, index) => {
                    return <img key={index}
                                className="single-room-img-space" alt=""
                                src={require(`../../assets/images/rooms/R8/${name}.jpg`)}/>})})
        if (this.props.visibleRoomId === 10)
            this.setState({images: ['01', '02', '03', '04', '05'].map((name, index) => {
                    return <img key={index}
                                className="single-room-img-space" alt=""
                                src={require(`../../assets/images/rooms/R9/${name}.jpg`)}/>})})
        if (this.props.visibleRoomId === 9)
            this.setState({images: ['01', '02', '03', '04', '05', '06'].map((name, index) => {
                    return <img key={index}
                                className="single-room-img-space" alt=""
                                src={require(`../../assets/images/rooms/R10/${name}.jpg`)}/>})})
        if (this.props.visibleRoomId === 7)
            this.setState({images: ['01', '02', '03', '04'].map((name, index) => {
                    return <img key={index}
                                className="single-room-img-space" alt=""
                                src={require(`../../assets/images/rooms/R11/${name}.jpg`)}/>})})
        if (this.props.visibleRoomId === 8)
            this.setState({images: ['01', '02', '03', '04', '05'].map((name, index) => {
                    return <img key={index}
                                className="single-room-img-space" alt=""
                                src={require(`../../assets/images/rooms/R12/${name}.jpg`)}/>})})
    }

    render() {
        return (
            <div>
                {this.state.images}
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
                <div className="buttons-components">
                    <Button
                        label="Rezerwuj" icon="pi pi-check" onClick={this.props.onMakeReservation}
                        disabled={this.props.numberOfPersons === 0 ? true : false}/>
                    <Button label="Zamknij" icon="pi pi-check" onClick={this.props.onHideMakeReservation}/>
                </div>
            </div>
        );
    }
}

