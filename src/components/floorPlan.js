import React, { Component } from 'react';
import { Stage, Layer, Shape, Rect } from 'react-konva';

class FloorPlan extends Component{

    Left0 = 1;
    Left90 = 2;
    Left180 = 3;
    Left270 = 4;
    Right0 = 5;
    Right90 = 6;
    Right270 = 7;

    MinX = 20;
    MinY = 20;
    MaxX = 720;
    MaxY = 510;

    TallToiletLength = 140;
    TallToiletWidth = 60;
    Room1Length = 220;
    Room1WidthDownLongWall = 200;
    Room1IndentationLength = 60;
    Room1IndentationWidth = 80;
    Room1WidthDown = 360;
    Room1WidthUp = 280;
    Room2WidthUp = 280;
    Room2LengthRight = 160;
    Room5Width = 250;
    Room6Width = 260;
    ToiletLength = 120;
    TallToiletLength = 140;
    TallToiletWidth = 80;
    DoorWidth=40;
    HallLength = 60;
    DoorFromWall=10;

    constructor() {
        super();

        this.shapeSceneFuncR1 = this.shapeSceneFuncR1.bind(this);
        this.shapeSceneFuncR2 = this.shapeSceneFuncR2.bind(this);
        this.shapeSceneFuncR3 = this.shapeSceneFuncR3.bind(this);
        this.shapeSceneFuncR4 = this.shapeSceneFuncR4.bind(this);
        this.shapeSceneFuncR5 = this.shapeSceneFuncR5.bind(this);
        this.shapeSceneFuncR6 = this.shapeSceneFuncR6.bind(this);

        this.drawDoor = this.drawDoor.bind(this);
        this.drawWallRoom12 = this.drawWallRoom12.bind(this);
        this.drawWallRoom34 = this.drawWallRoom34.bind(this);

        this.onClick = this.onClick.bind(this);
    }

    state = {
        opacity: [1, 1, 1, 1, 1, 1]
    };

    drawDoor(context, xStart, yStart, width, orientation){

        if(orientation === this.Left0){
            context.lineTo(xStart, yStart - width);
            context.quadraticCurveTo(xStart + width, yStart - width, xStart + width, yStart);
        }
        if(orientation === this.Left90){
            context.lineTo(xStart - width, yStart);
            context.quadraticCurveTo(xStart - width, yStart - width, xStart, yStart - width);
        }
        if(orientation === this.Left180){
            context.lineTo(xStart, yStart + width);
            context.quadraticCurveTo(xStart - width, yStart + width, xStart - width, yStart);
        }
        if(orientation === this.Left270){
            context.lineTo(xStart + width, yStart);
            context.quadraticCurveTo(xStart + width, yStart + width, xStart, yStart + width);
        }
        if(orientation === this.Right0){
            context.lineTo(xStart, yStart - width);
            context.quadraticCurveTo(xStart - width, yStart - width, xStart - width, yStart);
        }
        if(orientation === this.Right90){
            context.lineTo(xStart - width, yStart);
            context.quadraticCurveTo(xStart - width, yStart + width, xStart, yStart + width);
        }
        if(orientation === this.Right270){
            context.lineTo(xStart + width, yStart);
            context.quadraticCurveTo(xStart + width, yStart - width, xStart, yStart - width);
        }
    }

    drawWallRoom12(context){
        context.lineTo(this.Room1WidthDown,this.Room1Length);
        context.lineTo(this.Room1WidthDown,this.Room1Length- this.TallToiletLength);
        context.lineTo(this.Room1WidthUp,this.Room1Length - this.TallToiletLength);
        context.lineTo(this.Room1WidthUp,this.MinY);
    }
    drawWallRoom34(context) {
        context.lineTo(this.MaxX - this.TallToiletWidth, this.Room1Length + this.TallToiletLength);
        context.lineTo(this.MaxX - this.TallToiletWidth, this.Room1Length);
        context.lineTo(this.Room1WidthUp + this.Room2WidthUp, this.Room1Length);
    }
    shapeSceneFuncR1(context, shape){
        context.beginPath();
        context.moveTo(this.MinX,this.MinY);
        context.lineTo(this.MinX,this.Room1Length);
        context.lineTo(this.Room1WidthDownLongWall,this.Room1Length);
        let x = this.Room1WidthDownLongWall;
        let y = this.Room1Length - this.Room1IndentationLength;
        context.lineTo(x, y);
        this.drawDoor(context,x,y,this.DoorWidth,this.Left0);
        context.lineTo(this.Room1WidthDownLongWall + this.Room1IndentationWidth,
                       this.Room1Length - this.Room1IndentationLength);
        context.lineTo(this.Room1WidthDownLongWall + this.Room1IndentationWidth, this.Room1Length);
        this.drawWallRoom12(context);
        context.closePath();
        context.fillStrokeShape(shape);
    }

    shapeSceneFuncR2(context, shape){
        let doorFromRightWall = 40;
        context.beginPath();
        context.moveTo(this.Room1WidthUp,this.MinY);
        context.lineTo(this.Room1WidthUp + this.Room2WidthUp,this.MinY);
        context.lineTo(this.Room1WidthUp + this.Room2WidthUp,this.Room2LengthRight);
        let x = this.Room1WidthUp + this.Room2WidthUp - doorFromRightWall;
        let y = this.Room2LengthRight
        context.lineTo(x,y);
        this.drawDoor(context,x,y,this.DoorWidth,this.Right0);
        context.lineTo(x - this.TallToiletWidth,y);
        context.lineTo(x - this.TallToiletWidth,this.Room1Length);
        this.drawWallRoom12(context);
        context.closePath();
        context.fillStrokeShape(shape);
    }

    shapeSceneFuncR3(context, shape){
        context.beginPath();
        context.moveTo(this.Room1WidthUp + this.Room2WidthUp,this.MinY);
        context.lineTo(this.MaxX,this.MinY);
        context.lineTo(this.MaxX,this.Room1Length + this.TallToiletLength);
        this.drawWallRoom34(context);
        let x = this.Room1WidthUp + this.Room2WidthUp;
        let y = this.Room1Length - this.DoorFromWall
        context.lineTo(x,y);
        this.drawDoor(context,x,y,this.DoorWidth, this.Right270);
        context.closePath();
        context.fillStrokeShape(shape);
    }
    shapeSceneFuncR4(context, shape){
        context.beginPath();
        context.moveTo(this.MaxX,this.Room1Length + this.TallToiletLength);
        this.drawWallRoom34(context);
        context.lineTo(this.Room1WidthUp + this.Room2WidthUp,this.Room1Length + this.HallLength);
        let x = this.Room1WidthUp + this.Room2WidthUp - this.DoorFromWall;
        let y = this.Room1Length + this.HallLength;
        context.lineTo(x, y);
        this.drawDoor(context, x, y, this.DoorWidth, this.Right0);
        context.lineTo(x - this.DoorWidth - this.DoorFromWall,y);
        context.lineTo(x - this.DoorWidth - this.DoorFromWall,this.MaxY);
        context.lineTo(this.MaxX,this.MaxY);
        context.closePath();
        context.fillStrokeShape(shape);
    }

    shapeSceneFuncR5(context, shape) {
        context.beginPath();
        context.moveTo(2 * this.Room5Width, this.Room1Length + this.HallLength);
        let x = 2 * this.Room5Width - this.DoorFromWall;
        let y = this.Room1Length + this.HallLength;
        context.lineTo(x, y);
        this.drawDoor(context,x,y, this.DoorWidth, this.Left180);
        context.lineTo(x - this.DoorWidth - this.DoorFromWall - this.TallToiletWidth, y);
        context.lineTo(x - this.DoorWidth - this.DoorFromWall - this.TallToiletWidth, y + this.ToiletLength);
        context.lineTo(this.MinX + this.Room6Width, y + this.ToiletLength);
        context.lineTo(this.MinX + this.Room6Width, this.MaxY);
        context.lineTo(2 * this.Room5Width, this.MaxY);
        context.closePath();
        context.fillStrokeShape(shape);
    }

    shapeSceneFuncR6(context, shape) {
        context.beginPath();
        context.moveTo(this.MinX + this.Room6Width + this.TallToiletWidth, this.Room1Length + this.HallLength);

        let x = this.MinX + this.Room6Width - this.DoorFromWall;
        let y = this.Room1Length + this.HallLength;

        context.lineTo(x, y);
        this.drawDoor(context,x,y, this.DoorWidth, this.Left180);
        context.lineTo(x - this.DoorWidth - this.DoorFromWall,  y);
        context.lineTo(x - this.DoorWidth - this.DoorFromWall,  y + this.HallLength);
        context.lineTo(this.MinX,  y + this.HallLength);
        context.lineTo(this.MinX,  this.MaxY);
        context.lineTo(this.MinX + this.Room6Width ,  this.MaxY);
        context.lineTo(this.MinX + this.Room6Width ,  this.Room1Length + this.HallLength + this.ToiletLength);
        context.lineTo(this.MinX + this.Room6Width + this.TallToiletWidth,  this.Room1Length + this.HallLength + this.ToiletLength);

        context.closePath();
        context.fillStrokeShape(shape);
    }

    onClick = (id, e) => {

        const newItems = [...this.state.opacity];

        for(let index = 0; index < 6; index++){
            newItems[index] = 1;
        }

        if(newItems[id -1] == 1){
            newItems[id -1] = 0.5;
        }
        else{
            newItems[id - 1] = 1;
        }

        this.setState({ opacity:newItems });
    }

    render() {
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Shape sceneFunc={this.shapeSceneFuncR1} fill="#00D2FF" stroke="black" opacity={this.state.opacity[0]} strokeWidth={4} onClick={(e) => this.onClick(1, e)}/>
                    <Shape sceneFunc={this.shapeSceneFuncR2} fill="#00D2FF" stroke="black" opacity={this.state.opacity[1]} strokeWidth={4} onClick={(e) => this.onClick(2, e)}/>
                    <Shape sceneFunc={this.shapeSceneFuncR3} fill="#00D2FF" stroke="black" opacity={this.state.opacity[2]} strokeWidth={4} onClick={(e) => this.onClick(3, e)}/>
                    <Shape sceneFunc={this.shapeSceneFuncR4} fill="#00D2FF" stroke="black" opacity={this.state.opacity[3]} strokeWidth={4} onClick={(e) => this.onClick(4, e)}/>
                    <Shape sceneFunc={this.shapeSceneFuncR5} fill="#00D2FF" stroke="black" opacity={this.state.opacity[4]} strokeWidth={4} onClick={(e) => this.onClick(5, e)}/>
                    <Shape sceneFunc={this.shapeSceneFuncR6} fill="#00D2FF" stroke="black" opacity={this.state.opacity[5]} strokeWidth={4} onClick={(e) => this.onClick(6, e)}/>
                </Layer>
            </Stage>
        );
    }
}

export default FloorPlan;