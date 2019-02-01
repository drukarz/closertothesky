import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Rect, Text, Circle, Line, Shape } from 'react-konva';

class FloorPlan extends Component{

    Left0 = 1;
    Left90 = 2;
    Right0 = 3;
    Right270 = 4;

    FirstLineUpperY = 20;
    FirstLineDownY = 220;

    constructor() {
        super();
        this.shapeSceneFuncR1 = this.shapeSceneFuncR1.bind(this);
        this.shapeSceneFuncR2 = this.shapeSceneFuncR2.bind(this);
        this.shapeSceneFuncR3 = this.shapeSceneFuncR3.bind(this);

        this.shapeSceneFuncT1 = this.shapeSceneFuncT1.bind(this);
        this.shapeSceneFuncT2 = this.shapeSceneFuncT2.bind(this);

        this.drawDoor = this.drawDoor.bind(this);
    }

    drawDoor(context, xStart, yStart, width, orientation){

        if(orientation === this.Left0){
            context.lineTo(xStart, yStart - width);
            context.quadraticCurveTo(xStart + width, yStart - width, xStart + width, yStart);
        }
        if(orientation === this.Left90){
            context.lineTo(xStart - width, yStart);
            context.quadraticCurveTo(xStart - width, yStart - width, xStart, yStart - width);
        }
        if(orientation === this.Right0){
            context.lineTo(xStart, yStart - width);
            context.quadraticCurveTo(xStart - width, yStart - width, xStart - width, yStart);
        }
        if(orientation === this.Right270){
            context.lineTo(xStart + width, yStart);
            context.quadraticCurveTo(xStart + width, yStart - width, xStart, yStart - width);
        }
    }

    shapeSceneFuncR1(context, shape){
        context.beginPath();
        context.moveTo(20,20);
        context.lineTo(20,this.FirstLineDownY);
        context.lineTo(200,this.FirstLineDownY);
        context.lineTo(200,160);
        this.drawDoor(context,200,160,40, this.Left0);
        context.lineTo(280,160);
        context.lineTo(280,120);
        this.drawDoor(context,280,120,40, this.Left90);
        context.lineTo(280,20);
        context.closePath();
        context.fillStrokeShape(shape);
    }

    shapeSceneFuncT1(context, shape){
        context.beginPath();
        context.moveTo(280,this.FirstLineDownY);
        context.lineTo(280, 120);
        this.drawDoor(context,280,120,40, this.Left90);
        context.lineTo(340, 80);
        context.lineTo(340, this.FirstLineDownY);
        context.closePath();
        context.fillStrokeShape(shape);
    }

    shapeSceneFuncT2(context, shape){
        context.beginPath();
        context.lineTo(340, this.FirstLineDownY);
        context.lineTo(400, this.FirstLineDownY);
        context.lineTo(400, 120);
        this.drawDoor(context,400,120,40, this.Right270);
        context.lineTo(340, 80);
        context.closePath();
        context.fillStrokeShape(shape);
    }

    shapeSceneFuncR2(context, shape){
        context.beginPath();
        context.moveTo(280,20);
        context.lineTo(540,20);
        context.lineTo(540,160);
        context.lineTo(480,160);
        this.drawDoor(context,480,160,40, this.Right0);
        context.lineTo(400,160);
        context.lineTo(400,120);
        this.drawDoor(context,400,120,40, this.Right270);
        context.lineTo(280,80);
        context.closePath();
        context.fillStrokeShape(shape);
    }

    shapeSceneFuncR3(context, shape){
        context.beginPath();
        context.moveTo(540,20);
        context.lineTo(700,20);
        context.lineTo(700,this.FirstLineDownY);
        context.lineTo(680,this.FirstLineDownY);
        this.drawDoor(context,680,this.FirstLineDownY,40, this.Right0);
        context.lineTo(540,this.FirstLineDownY);
        context.lineTo(540,this.FirstLineDownY - 10);
        this.drawDoor(context,540,this.FirstLineDownY - 10,40, this.Right270);
        context.closePath();
        context.fillStrokeShape(shape);
    }

    render() {
        return (
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Shape sceneFunc={this.shapeSceneFuncR1} fill="#00D2FF" stroke="black" strokeWidth={4}/>
                    <Shape sceneFunc={this.shapeSceneFuncT1} fill="#00D2AF" stroke="black" strokeWidth={4}/>
                    <Shape sceneFunc={this.shapeSceneFuncT2} fill="#00D2AF" stroke="black" strokeWidth={4}/>
                    <Shape sceneFunc={this.shapeSceneFuncR2} fill="#00D2FF" stroke="black" strokeWidth={4}/>
                    <Shape sceneFunc={this.shapeSceneFuncR3} fill="#00D2FF" stroke="black" strokeWidth={4}/>
                </Layer>
            </Stage>
        );
    }
}

export default FloorPlan;