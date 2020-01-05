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
            images: [],
            backIndex: "back-1",
            backs : ["back-1", 'back-2', 'back-3',
                     'back-4', 'back-5', 'back-6'],
        }

        this.onHide = this.onHide.bind(this);
    }

    onClick(actionId)
    {

        if(actionId === "attractions")
        {
            this.setState({header: "WOKÓŁ NAS",
                images : ['A1', 'A2', 'A3', 'A6', 'A7', 'A8', 'A10', 'A13'].map( (name, index) => {
                    return <img key={index}
                                className="gallery-img-space" alt=""
                                src={require(`../../assets/images/gallery/around/${name}.JPG`)} />
                }), backIndex: this.state.backs[4]}, ()=> {console.log("attractions loaded")} );

        }

        if(actionId === "rooms")
        {
            this.setState({header: "POKOJE",
                                 images : ['R1', 'R2', 'R3', 'R4', 'R5', 'R6'].map( (name, index) => {
                                 return <img key={index}
                                         className="gallery-img-space" alt=""
                                         src={require(`../../assets/images/gallery/rooms/${name}.jpg`)} />
                             }),
            backIndex: this.state.backs[0]});
        }

        if(actionId === "restaurant")
        {
            this.setState({header: "RESTAURACJA",
                                 images : ['R2', 'R6', 'R7', 'R7'].map( (name, index) => {
                                 return <img key={index}
                                         className="gallery-img-space-1" alt=""
                                         src={require(`../../assets/images/gallery/restaurant/${name}.jpg`)} />
                }),
            backIndex: this.state.backs[1]});
        }

        if(actionId === "conference")
            this.setState({header: "SALA KONFERENCYJNA", backIndex: this.state.backs[2]});

        if(actionId === "spa")
        {
            this.setState({
                header: "STREFA SPA",
                images: ['S1', 'S2', 'S3', 'S4'].map((name, index) => {
                    return <img key={index}
                                className="gallery-img-space-1" alt=""
                                src={require(`../../assets/images/gallery/spa/${name}.jpg`)}/>
                }),
                backIndex: this.state.backs[3]});
        }
        if(actionId === "library")
            this.setState({header: "BIBLIOTEKA", backIndex: this.state.backs[3]});

        this.setState({visible: true});
    }

    onHide()
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
                    <img src={Attractions} className="img-space" onClick={() => this.onClick("attractions")}/>
                    <img src={Rooms} className="img-space" onClick={() => this.onClick("rooms")}/>
                    <img src={Restaurant} className="img-space" onClick={() => this.onClick("restaurant")}/>
                </p>
                <p>
                    <img src={Conference} className="img-space" onClick={() => this.onClick("conference")}/>
                    <img src={Spa} className="img-space" onClick={() => this.onClick("spa")}/>
                    <img src={Library} className="img-space" onClick={() => this.onClick("library")}/>
                </p>
                <Dialog style={{width: '80vw'}}
                        header={this.state.header}
                        visible={this.state.visible}
                        onHide={this.onHide} modal={true}
                        resizable={false}>
                    <div className={this.state.backIndex}>
                        <br/>
                        <br/>
                        <br/>
                        {this.state.images}
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Button className="button-size" label="zamknij" icon="pi pi-check" onClick={this.onHide} />
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default Gallery;