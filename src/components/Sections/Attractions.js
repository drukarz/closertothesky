import React, { Component } from 'react';
import image from '../../assets/images/attractions/map.jpg';
import ImageMapper from 'react-image-mapper';

class Attractions extends Component
{

    clicked(area) {
        console.log(`You clicked on ${area.shape} at coords ${JSON.stringify(
                area.coords
            )} !`);
    }

    render() {

        var MAP = {
            name: "my-map",
            areas: [
                {
                    name: "ciecien",
                    shape: "circle",
                    coords: [303, 127, 50],
                    preFillColor: "rgb(255,255,255,0.1)",
                    lineWidth: 4
                },
                {
                    name: "szczyrzyc",
                    shape: "circle",
                    coords: [528, 47, 50],
                    preFillColor: "rgb(255,255,255,0.1)",
                    lineWidth: 4
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
                    name: "cwilin",
                    shape: "circle",
                    coords: [551, 822, 50],
                    preFillColor: "rgb(255,255,255,0.1)",
                    lineWidth: 4
                },
                {
                    name: "lopien",
                    shape: "circle",
                    coords: [897, 713, 50],
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
            <div className="img-center">
                <ImageMapper
                    src={image}
                    map={MAP}
                    onClick={area => this.clicked(area)}
                    lineWidth={4}
                    strokeColor={"transparent"}/>
            </div>
        );
    }
}

export default Attractions;