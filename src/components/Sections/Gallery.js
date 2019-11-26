import React, { Component } from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import Rooms from "../../assets/images/gallery/rooms.jpg";
import Restaurant from "../../assets/images/gallery/restaurant.jpg";
import Conference from "../../assets/images/gallery/conference.jpg";
import Spa from "../../assets/images/gallery/spa.jpg";
import Attractions from "../../assets/images/gallery/attractions.jpg";

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

        this.onHide = this.onHide.bind(this);
    }

    onClick(actionId)
    {

        if(actionId === "rooms")
        {
            this.setState({header: "Pokoje",
                                 images : ['R1', 'R2', 'R3', 'R4', 'R6'].map( (name, index) => {
                                 return <img key={index}
                                         className="gallery-img-space" alt=""
                                         src={require(`../../assets/images/gallery/rooms/${name}.jpeg`)} />
                             })});
        }

        if(actionId === "restaurant")
        {
            this.setState({header: "Restauracja"});
        }

        if(actionId === "conference")
            this.setState({header: "Sala konferencyjna"});

        if(actionId === "spa")
            this.setState({header: "Strefa Spa"});

        if(actionId === "attractions")
        {
            this.setState({header: "Wokół Nas",
                images : ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'].map( (name, index) => {
                    return <img key={index}
                                className="gallery-img-space" alt=""
                                src={require(`../../assets/images/gallery/around/${name}.JPG`)} />
                })});

        }

        this.setState({visible: true});
    }

    onHide()
    {
        this.setState({visible: false});
    }

    render() {

        const footer = (
            <div>
                <Button label="zamknij" icon="pi pi-check" onClick={this.onHide} />
            </div>
        );

        return(
            <div >
                <img src={Attractions} className="img-space" onClick={() => this.onClick("attractions")}/>
                <img src={Rooms} className="img-space" onClick={() => this.onClick("rooms")}/>
                <img src={Restaurant} className="img-space" onClick={() => this.onClick("restaurant")}/>
                <img src={Conference} className="img-space" onClick={() => this.onClick("conference")}/>
                <img src={Spa} className="img-space" onClick={() => this.onClick("spa")}/>
                <div className="content-section implementation">
                    <Dialog header={this.state.header} visible={this.state.visible} style={{width: '50vw'}}
                            footer={footer} onHide={this.onHide} modal={true} maximizable>
                        {this.state.images}
                    </Dialog>
                </div>
            </div>
        );
    }
}

export default Gallery;