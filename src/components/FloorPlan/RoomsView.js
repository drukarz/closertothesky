import React, {Component} from 'react'
import { Stage, Layer, Shape, Rect, Text} from 'react-konva';

export default class RoomsView extends Component{

    Level1=220;
    MinY = 30;
    MinX = 95;
    Level2 = 310;
    Level3 = 520;
    ShortWallLength = 60;
    Break = 10;

    constructor(props){
        super(props);
    }

    beginRoom = (context, x, y ) => {
        context.beginPath();
        context.moveTo(x, y);
    }

    finishRoom = (context, shape, x, y ) => {
        context.lineTo(x, y);
        context.closePath();
        context.fillStrokeShape(shape);
    }

    shapeSceneFuncR1 = (context, shape) => {

        this.beginRoom(context, this.MinX, this.MinY);

        context.lineTo(this.MinX + 2 * this.ShortWallLength,  this.MinY);
        context.lineTo(this.MinX + 2 * this.ShortWallLength,  this.MinY + this.Level1);
        context.lineTo(this.MinX + this.ShortWallLength,  this.MinY + this.Level1);
        context.lineTo(this.MinX + this.ShortWallLength,  this.MinY + 340);
        context.lineTo(this.MinX,  this.MinY + 340);

        this.finishRoom(context, shape, this.MinX, this.MinY);
    }

    shapeSceneFuncR2 = (context, shape) => {

        let startX = this.MinX + 2 * this.ShortWallLength + this.Break;

        this.beginRoom(context, startX, this.MinY);

        context.lineTo(startX + 195,  this.MinY);
        context.lineTo(startX + 195,  this.MinY + 115);
        context.lineTo(startX + 195 - this.ShortWallLength,  this.MinY + 115);
        context.lineTo(startX + 195 - this.ShortWallLength,  this.MinY + this.Level1);
        context.lineTo(startX + 85,  this.MinY + this.Level1);
        context.lineTo(startX + 85,  this.MinY + 180);
        context.lineTo(startX,  this.MinY + 180);

        this.finishRoom(context, shape, startX, this.MinY);
    }

    shapeSceneFuncR3 = (context, shape) => {

        let startX = this.MinX + 2 * this.ShortWallLength + this.Break + 195 + this.Break;

        this.beginRoom(context, startX, this.MinY);

        context.lineTo(startX + 190,  this.MinY);
        context.lineTo(startX + 190,  this.MinY + this.Level1);
        context.lineTo(startX + 60,  this.MinY + this.Level1);
        context.lineTo(startX + 60,  this.MinY + 180);
        context.lineTo(startX,  this.MinY + 180);
        context.lineTo(startX,  this.MinY + this.Level1);
        context.lineTo(startX - this.ShortWallLength,  this.MinY + this.Level1);
        context.lineTo(startX - this.ShortWallLength,  this.MinY + 125);
        context.lineTo(startX,  this.MinY + 125);

        this.finishRoom(context, shape, startX, this.MinY);
    }

    shapeSceneFuncR4 = (context, shape) => {

        let startX = this.MinX;
        let startY = this.MinY + 340 + this.Break;

        this.beginRoom(context, startX, startY);

        context.lineTo(this.MinX + this.ShortWallLength + this.Break, startY);
        context.lineTo(this.MinX + this.ShortWallLength + this.Break, this.MinY + this.Level1 + 10);
        context.lineTo(this.MinX + 2 * this.ShortWallLength + this.Break, this.MinY + this.Level1 + 10);
        context.lineTo(this.MinX + 2 * this.ShortWallLength + this.Break, this.Level2);
        context.lineTo(this.MinX + 2 * this.ShortWallLength + this.Break + 50, this.Level2);
        context.lineTo(this.MinX + 2 * this.ShortWallLength + this.Break + 50, this.Level3);
        context.lineTo(this.MinX, this.Level3);

        this.finishRoom(context, shape, startX, startY);
    }

    shapeSceneFuncR5 = (context, shape) => {

        let startX = this.MinX + 2 * this.ShortWallLength + 2 * this.Break + 50;

        this.beginRoom(context, startX, this.Level2);

        context.lineTo(startX + 115, this.Level2);
        context.lineTo(startX + 115, this.Level2 + 100);
        context.lineTo(startX + 115 + this.ShortWallLength, this.Level2 + 100);
        context.lineTo(startX + 115 + this.ShortWallLength, this.Level3 + 20);
        context.lineTo(startX, this.Level3 + 20);

        this.finishRoom(context, shape, startX, this.Level2);
    }

    shapeSceneFuncR6 = (context, shape) => {

        let startX = this.MinX + 2 * this.ShortWallLength + 3 * this.Break + 50 + 115;

        this.beginRoom(context, startX, this.Level2);

        context.lineTo(startX + this.ShortWallLength + 40, this.Level2);
        context.lineTo(startX + this.ShortWallLength + 40, this.Level2 + 60);
        context.lineTo(startX + this.ShortWallLength + 150, this.Level2 + 60);
        context.lineTo(startX + this.ShortWallLength + 150, this.Level3);
        context.lineTo(startX + this.ShortWallLength, this.Level3);
        context.lineTo(startX + this.ShortWallLength, this.Level2 + 100 - this.Break);
        context.lineTo(startX, this.Level2 + 100 - this.Break);

        this.finishRoom(context, shape, startX, this.Level2);
    }


    shapeSceneFuncR7 = (context, shape) => {

        let startX = 935;

        this.beginRoom(context, startX, this.MinY);

        context.lineTo(startX + 190,  this.MinY);
        context.lineTo(startX + 190,  this.MinY + 125);
        context.lineTo(startX + 190 + this.ShortWallLength,  this.MinY + 125);
        context.lineTo(startX + 190 + this.ShortWallLength,  this.MinY + this.Level1);
        context.lineTo(startX + 190,  this.MinY + this.Level1);
        context.lineTo(startX + 190,  this.MinY + 180);
        context.lineTo(startX + 190 - 60,  this.MinY + 180);
        context.lineTo(startX + 190 - 60,  this.MinY + this.Level1);
        context.lineTo(startX, this.MinY + this.Level1);

        this.finishRoom(context, shape, startX, this.MinY);
    }

    shapeSceneFuncR8 = (context, shape) => {

        let startX = 935 + 190 + this.Break;

        this.beginRoom(context, startX, this.MinY);

        context.lineTo(startX + 195,  this.MinY);
        context.lineTo(startX + 195,  this.MinY + 180);
        context.lineTo(startX + 195 - 85,  this.MinY + 180);
        context.lineTo(startX + 195 - 85,  this.MinY + this.Level1);
        context.lineTo(startX + this.ShortWallLength,  this.MinY + this.Level1);
        context.lineTo(startX + this.ShortWallLength,  this.MinY + 115);
        context.lineTo(startX , this.MinY + 115);

        this.finishRoom(context, shape, startX, this.MinY);
    }

    shapeSceneFuncR9 = (context, shape) => {

        let startX = 935 + 190 + 2 * this.Break + 195;

        this.beginRoom(context, startX, this.MinY);

        context.lineTo(startX + 2 * this.ShortWallLength,  this.MinY);
        context.lineTo(startX + 2 * this.ShortWallLength,  this.MinY + 340);
        context.lineTo(startX + this.ShortWallLength,  this.MinY + 340);
        context.lineTo(startX + this.ShortWallLength,  this.MinY + this.Level1);
        context.lineTo(startX,  this.MinY + this.Level1);

        this.finishRoom(context, shape, startX, this.MinY);
    }

    shapeSceneFuncR10 = (context, shape) => {

        let startX = 935 + 190 + 2 * this.Break + 195 + 2 * this.ShortWallLength;
        let startY = this.MinY + 340 + this.Break;

        this.beginRoom(context, startX, startY);
        context.lineTo(startX - this.ShortWallLength - this.Break, startY);
        context.lineTo(startX - this.ShortWallLength - this.Break, startY - 110 - this.Break);
        context.lineTo(startX - 2 * this.ShortWallLength - this.Break, startY - 110 - this.Break);
        context.lineTo(startX - 2 * this.ShortWallLength - this.Break, this.Level2);
        context.lineTo(startX - 2 * this.ShortWallLength - this.Break - 50, this.Level2);
        context.lineTo(startX - 2 * this.ShortWallLength - this.Break - 50, this.Level3);
        context.lineTo(startX, this.Level3);

        this.finishRoom(context, shape, startX, startY);
    }

    shapeSceneFuncR11 = (context, shape) => {

        let startX = 935 + 190 + 195 - this.ShortWallLength + this.Break;

        this.beginRoom(context, startX, this.Level2);
        context.lineTo(startX - 115, this.Level2);
        context.lineTo(startX - 115, this.Level2 + 100);
        context.lineTo(startX - 115 - this.ShortWallLength, this.Level2 + 100);
        context.lineTo(startX - 115 - this.ShortWallLength, this.Level3 + 20);
        context.lineTo(startX, this.Level3 + 20);

        this.finishRoom(context, shape, startX, this.Level2);
    }

    shapeSceneFuncR12 = (context, shape) => {

        let startX = 935 + 195 + 15;

        this.beginRoom(context, startX, this.Level2);
        context.lineTo(startX - this.ShortWallLength - 40, this.Level2);
        context.lineTo(startX - this.ShortWallLength - 40, this.Level2 + 60);
        context.lineTo(startX - this.ShortWallLength - 150, this.Level2 + 60);
        context.lineTo(startX - this.ShortWallLength - 150, this.Level3);
        context.lineTo(startX - this.ShortWallLength, this.Level3);
        context.lineTo(startX - this.ShortWallLength, this.Level2 + 100 - this.Break);
        context.lineTo(startX, this.Level2 + 100 - this.Break);

        this.finishRoom(context, shape, startX, this.Level2);
    }

    render(){
        return (
         <div className="img-center">
            <Stage width={1500} height={550}>

                <Layer>
                    <Shape sceneFunc={this.shapeSceneFuncR1} fill={this.props.colors[0]} stroke="black" strokeWidth={4} onClick={(e) => this.props.onClick(1, e)}/>
                    <Shape sceneFunc={this.shapeSceneFuncR2} fill={this.props.colors[1]} stroke="black" strokeWidth={4} onClick={(e) => this.props.onClick(2, e)}/>
                    <Shape sceneFunc={this.shapeSceneFuncR3} fill={this.props.colors[2]} stroke="black" strokeWidth={4} onClick={(e) => this.props.onClick(3, e)}/>
                    <Shape sceneFunc={this.shapeSceneFuncR4} fill={this.props.colors[3]} stroke="black" strokeWidth={4} onClick={(e) => this.props.onClick(4, e)}/>
                    <Shape sceneFunc={this.shapeSceneFuncR5} fill={this.props.colors[4]} stroke="black" strokeWidth={4} onClick={(e) => this.props.onClick(5, e)}/>
                    <Shape sceneFunc={this.shapeSceneFuncR6} fill={this.props.colors[5]} stroke="black" strokeWidth={4} onClick={(e) => this.props.onClick(6, e)}/>

                    <Shape sceneFunc={this.shapeSceneFuncR7} fill={this.props.colors[6]} stroke="black" strokeWidth={4} onClick={(e) => this.props.onClick(7, e)}/>
                    <Shape sceneFunc={this.shapeSceneFuncR8} fill={this.props.colors[7]} stroke="black" strokeWidth={4} onClick={(e) => this.props.onClick(8, e)}/>
                    <Shape sceneFunc={this.shapeSceneFuncR9} fill={this.props.colors[8]} stroke="black" strokeWidth={4} onClick={(e) => this.props.onClick(9, e)}/>
                    <Shape sceneFunc={this.shapeSceneFuncR10} fill={this.props.colors[9]} stroke="black" strokeWidth={4} onClick={(e) => this.props.onClick(10, e)}/>
                    <Shape sceneFunc={this.shapeSceneFuncR11} fill={this.props.colors[10]} stroke="black" strokeWidth={4} onClick={(e) => this.props.onClick(11, e)}/>
                    <Shape sceneFunc={this.shapeSceneFuncR12} fill={this.props.colors[11]} stroke="black" strokeWidth={4} onClick={(e) => this.props.onClick(12, e)}/>
                    <Text x={110}  y={50} text={"5"} fontSize={32} visible={this.props.colors[0] === "#CC0000" ? false : true}/>
                    <Text x={245}  y={50} text={"6"} fontSize={32} visible={this.props.colors[1] === "#CC0000" ? false : true}/>
                    <Text x={450}  y={50} text={"2"} fontSize={32} visible={this.props.colors[2] === "#CC0000" ? false : true}/>
                    <Text x={110}  y={470} text={"4"} fontSize={32} visible={this.props.colors[3] === "#CC0000" ? false : true}/>
                    <Text x={300}  y={470} text={"3"} fontSize={32} visible={this.props.colors[4] === "#CC0000" ? false : true}/>
                    <Text x={490}  y={470} text={"1"} fontSize={32} visible={this.props.colors[5] === "#CC0000" ? false : true}/>

                    <Text x={950}  y={50} text={"8"} fontSize={32} visible={this.props.colors[6] === "#CC0000" ? false : true}/>
                    <Text x={950}  y={470} text={"7"} fontSize={32} visible={this.props.colors[11] === "#CC0000" ? false : true}/>
                    <Text x={1110}  y={470} text={"9"} fontSize={32} visible={this.props.colors[10] === "#CC0000" ? false : true}/>
                    <Text x={1290}  y={470} text={"10"} fontSize={32} visible={this.props.colors[9] === "#CC0000" ? false : true}/>
                    <Text x={1150}  y={50} text={"12"} fontSize={32} visible={this.props.colors[7] === "#CC0000" ? false : true}/>
                    <Text x={1350}  y={50} text={"11"} fontSize={32} visible={this.props.colors[8] === "#CC0000" ? false : true}/>
                </Layer>
            </Stage>
         </div>
        );
    }
}



