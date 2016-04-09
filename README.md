# Raspberry PI - ExpressJS Led Example

Led On / Off example for the Raspberry PI 2, using ExpressJS, [Fivdi's  On/Off ](https://github.com/fivdi/onoff) and [Sarfata's pi-blaster](https://github.com/fivdi/onoff)

## Requirements
1. A Raspberry PI (ofc)
2. Node, npm and [Sarfata's pi-blaster](https://github.com/fivdi/onoff) installed
3. A breadboard, some led and wire

## Instalation
1. Clone this repository somewhere in your Raspberry Pi
2. Navigate via terminal to the folder where you cloned the repo and run *npm install*
3. Run *npm start*. If nothing blows up you should open a browser and go to *http://localhost:3000* and see a webpage with some controls

*NOTE:* The webpage's index.html is a messy mixture of AngularJs Material markup and Bootstrap.

## Features
1. On / Off control via a switch like input
2. Intensity control via slider like input
3. On / off control via "press and hold" like input
4. Text to morse code

If you have no idea how to set up the led with your raspberry here's some usefull link: 
[Raspberry Pi, Node.js and a LED – Emit Morse Code] (http://thejackalofjavascript.com/raspberry-pi-node-js-led-emit-morse-code/)
