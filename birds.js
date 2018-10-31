// Your job is to create a large, flightless bird class that defines the properties of a feathered terror. It should have the following properties:

// height
// flightless (should always be true)
// isExtinct
// name
// running speed

// toString -- This will be a method that outputs a description of the bird based on some of its properties. Example output: "The Cassowary is a big, scary bird that stands up to 6 ft and can run up to 30 mph!"

// Create at least 3 instances of the class. Visit the Wikipedia list of the largest birds in the world for inspiration.

class BigScaryBird {

  constructor(props) {
    this.name = props.name
    this.height = props.height
    this.isExtinct = props.isExtinct
    this.runningSpeed = props.runningSpeed
  }
  
  toString() {
    return `The ${this.name} is a big, scary bird that is ${this.height} tall and can run up to ${this.runningSpeed}!`
  }
}

const ostrichProps = {
  name: "Ostrich",
  height: "8 feet",
  isExtinct: false,
  runningSpeed:  "40 mph",
}
const ostrich = new BigScaryBird(ostrichProps)
console.log(ostrich.toString())

const emuProps = {
  name: "Emu",
  height: "6 feet",
  isExtinct: false,
  runningSpeed:  "30 mph",
}
const emu = new BigScaryBird(emuProps)
console.log(emu.toString())


const emperorPenguinProps = {
  name: "Emperor Penguin",
  height: "4 feet",
  isExtinct: false,
  runningSpeed:  "2 mph",
}
const emperorPenguin = new BigScaryBird(emperorPenguinProps)
console.log(emperorPenguin.toString())

