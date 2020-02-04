import React, { Component } from 'react';
import image from '../../assets/images/attractions/map.jpg';
import ImageMapper from 'react-image-mapper';
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";

class Attractions extends Component
{

    constructor() {
        super();

        this.state = {
            visible: false,
            header: "",
            images: []
        }
    }

    clicked(area) {
        /*if(area.name === "szczyrzyc")
        {
            this.setState({header: "SZCZYRZYC",
                images : ['A1', 'A2', 'A3', 'A6', 'A7', 'A8', 'A10', 'A13'].map( (name, index) => {
                    return <img key={index}
                                className="gallery-img-space" alt=""
                                src={require(`../../assets/images/gallery/around/${name}.JPG`)} />
                })});
        }
        if(area.name === "kolejka")
        {
            this.setState({header: "KOLEJKA W KASINIE",
                images : ['A1', 'A2', 'A3', 'A6', 'A7', 'A8', 'A10', 'A13'].map( (name, index) => {
                    return <img key={index}
                                className="gallery-img-space" alt=""
                                src={require(`../../assets/images/gallery/around/${name}.JPG`)} />
                })});
        }
        if(area.name === "narty")
        {
            this.setState({header: "WYCIĄG W KASINIE",
                images : ['A1', 'A2', 'A3', 'A6', 'A7', 'A8', 'A10', 'A13'].map( (name, index) => {
                    return <img key={index}
                                className="gallery-img-space" alt=""
                                src={require(`../../assets/images/gallery/around/${name}.JPG`)} />
                })});
        }
        if(area.name === "snieznica")
        {
            this.setState({header: "ŚNIEŻNICA",
                images : ['S1', 'S2', 'S3'].map( (name, index) => {
                    return <img key={index}
                                className="gallery-img-space" alt=""
                                src={require(`../../assets/images/attractions/sniezica/${name}.jpg`)} />
                })});
        }
        if(area.name === "mogielica-widok")
        {
            this.setState({header: "MOGIELICA WIDOK Z WIEŻY",
                images : ['A1', 'A2', 'A3', 'A6', 'A7', 'A8', 'A10', 'A13'].map( (name, index) => {
                    return <img key={index}
                                className="gallery-img-space" alt=""
                                src={require(`../../assets/images/gallery/around/${name}.JPG`)} />
                })});
        }
        if(area.name === "mogielica")
        {
            this.setState({header: "MOGIELICA",
                images : ['A1', 'A2', 'A3', 'A6', 'A7', 'A8', 'A10', 'A13'].map( (name, index) => {
                    return <img key={index}
                                className="gallery-img-space" alt=""
                                src={require(`../../assets/images/gallery/around/${name}.JPG`)} />
                })});
        }

        this.setState({visible: true});*/
    }

    onHide = ()=>{
        this.setState({visible: false});
    }

    render() {

        const footer = (
            <div>
                <Button label="zamknij" icon="pi pi-check" onClick={this.onHide} />
            </div>
        );

        let MAP = {
            name: "my-map",
            areas: [
                {
                    name: "szczyrzyc",
                    shape: "circle",
                    coords: [528, 47, 50],
                    preFillColor: "rgb(255,255,255,0.1)",
                    lineWidth: 4,
                },
                {
                    name: "kolejka",
                    shape: "circle",
                    coords: [303, 578, 50],
                    preFillColor: "rgb(255,255,255,0.1)",
                    lineWidth: 4
                },
                {
                    name: "narty",
                    shape: "circle",
                    coords: [426, 578, 50],
                    preFillColor: "rgb(255,255,255,0.1)",
                    lineWidth: 4
                },
                {
                    name: "snieznica",
                    shape: "circle",
                    coords: [545, 632, 50],
                    preFillColor: "rgb(255,255,255,0.1)",
                    lineWidth: 4
                },
                {
                    name: "mogielica-widok",
                    shape: "circle",
                    coords: [898, 1013, 50],
                    preFillColor: "rgb(255,255,255,0.1)",
                    lineWidth: 4
                },
                {
                    name: "mogielica",
                    shape: "circle",
                    coords: [1020, 1013, 50],
                    preFillColor: "rgb(255,255,255,0.1)",
                    lineWidth: 4
                }

            ]
        }

        return(
            <div>
                <br/>
                <br/>
                <br/>
                <div className="img-center">
                    <ImageMapper
                        src={image}
                        map={MAP}
                        onClick={area => this.clicked(area)}
                        lineWidth={4}
                        strokeColor={"transparent"}/>
                </div>
                <Dialog style={{width: '80vw'}}
                        header={this.state.header}
                        visible={false}
                        onHide={this.onHide} modal={true}
                        resizable={false}>
                    <div>
                        {this.state.images}
                        <br/>
                        <br/>
                        <Button className="button-size" label="zamknij" icon="pi pi-check" onClick={this.onHide} />
                        <br/>
                        <br/>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default Attractions;