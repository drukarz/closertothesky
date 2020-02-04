import React, { Component } from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import Rooms from "../../assets/images/gallery/rooms.png";
import Restaurant from "../../assets/images/gallery/restaurant.png";
import Conference from "../../assets/images/gallery/conference.png";
import Spa from "../../assets/images/gallery/spa.png";
import Attractions from "../../assets/images/gallery/attractions.png";
import Library from "../../assets/images/gallery/library.png";

class Gallery extends Component
{
    constructor() {
        super();

        this.state =
        {
            visible: false,
            header: "",
            images: []
        }
    }

    onClick(actionId) {

        if (actionId === "around") {
            this.setState({
                header: "WOKÓŁ NAS",
                images: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'].map((name, index) => {
                    return <img key={index}
                                className="gallery-img-space" alt=""
                                src={require(`../../assets/images/gallery/around/${name}.JPG`)}/>
                })

            })
        }

        if (actionId === "rooms") {
            this.setState({
                header: "POKOJE",
                images: ['R1', 'R2', 'R3', 'R4', 'R5', 'R6'].map((name, index) => {
                    return <img key={index}
                                className="gallery-img-space" alt=""
                                src={require(`../../assets/images/gallery/rooms/${name}.jpg`)}/>
                })
            })
        }

        if (actionId === "restaurant") {
            this.setState({
                header: "RESTAURACJA",
                images: ['R1', 'R2', 'R3', 'R4', 'R5', 'R6'].map((name, index) => {
                    return <img key={index}
                                className="gallery-img-space" alt=""
                                src={require(`../../assets/images/gallery/restaurant/${name}.jpg`)}/>
                })
            })
        }

        if (actionId === "conference") {
            this.setState({
                header: "SALA KONFERENCYJNA",
                images: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'].map((name, index) => {
                    return <img key={index}
                                className="gallery-img-space" alt=""
                                src={require(`../../assets/images/gallery/conference/${name}.jpg`)}/>
                })
            });
        }
        if (actionId === "spa") {
            this.setState({
                header: "STREFA SPA",
                images: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'].map((name, index) => {
                    return <img key={index}
                                className="gallery-img-space" alt=""
                                src={require(`../../assets/images/gallery/spa/${name}.jpg`)}/>
                })
            });
        }
        if (actionId === "library") {
            this.setState({
                header: "BIBLIOTEKA",
                images: ['L1', 'L2', 'L3', 'L4', 'L5', 'L6'].map((name, index) => {
                    return <img key={index}
                                className="gallery-img-space" alt=""
                                src={require(`../../assets/images/gallery/library/${name}.jpg`)}/>
                })
            });
        }

        this.setState({visible: true});
    }

    onHide = () =>
    {
        this.setState({visible: false});
    }

    render() {
        return(
            <div >
                <br/>
                <br/>
                <br/>
                <p>
                    <img src={Attractions} className="img-space" onClick={() => this.onClick("around")}/>
                    <img src={Rooms} className="img-space" onClick={() => this.onClick("rooms")}/>
                    <img src={Restaurant} className="img-space" onClick={() => this.onClick("restaurant")}/>
                </p>
                <p>
                    <img src={Conference} className="img-space" onClick={() => this.onClick("conference")}/>
                    <img src={Spa} className="img-space" onClick={() => this.onClick("spa")}/>
                    <img src={Library} className="img-space" onClick={() => this.onClick("library")}/>
                </p>
                <Dialog style={{width: '90vw'}}
                        header={this.state.header}
                        visible={this.state.visible}
                        onHide={this.onHide} modal={true}
                        resizable={false}>
                    <div className="back-3">
                        {this.state.images}
                        <br/>
                        <Button className="button-size" label="zamknij" icon="pi pi-check" onClick={this.onHide} />
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default Gallery;