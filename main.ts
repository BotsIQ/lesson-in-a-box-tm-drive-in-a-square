// A simple function that turns the robot left on the spot by reversing the left hand motor
function turnLeft () {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Reverse, 100)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, 100)
}
// Call the forward / turn left functions enough times to make a square.
input.onButtonPressed(Button.A, function () {
    driveForward()
    basic.pause(sideLength)
    turnLeft()
    basic.pause(turnTime)
    driveForward()
    basic.pause(sideLength)
    turnLeft()
    basic.pause(turnTime)
    driveForward()
    basic.pause(sideLength)
    turnLeft()
    basic.pause(turnTime)
    driveForward()
    basic.pause(sideLength)
    turnLeft()
    basic.pause(turnTime)
    Stop()
})
// A simple function that drives forwards
function driveForward () {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 100)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, 100)
}
// A simple function that stops the motors running
function Stop () {
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor1)
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor2)
}
// Setup a couple of variables to help later.
// Turn Time represents the time it takes to turn 90 degrees. Side length represents the distance to travel for the side of the square
//     
let sideLength = 0
let turnTime = 0
turnTime = 500
sideLength = 1000
