# ES6 Classes

This project explores ES6 Classes in JavaScript, focusing on Object-Oriented Programming (OOP) principles and features introduced in ECMAScript 2015 (ES6).

## Project Overview

This repository contains a series of JavaScript implementations that demonstrate various aspects of ES6 classes including:
- Class creation and instantiation
- Constructor parameters and attribute initialization
- Getters and setters
- Method implementation
- Static methods
- Class inheritance and extension
- Abstract classes
- Method overriding
- Special object methods (e.g., toString, valueOf)
- Symbol usage
- Privacy patterns

## Requirements

- All code is executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- All files must end with a new line
- Code files use the `.js` extension
- Code is verified against lint using ESLint
- All tests are run using Jest

## Setup Instructions

### Install NodeJS 12.11.x

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Verify installation:
```bash
nodejs -v  # Should output v12.11.1
npm -v     # Should output 6.11.3
```

### Install Project Dependencies

From the project directory:
```bash
npm install
```

## Testing

Run all tests:
```bash
npm run full-test
```

Run a specific test:
```bash
npm run dev <test-file.js>
```

## Project Files

1. `0-classroom.js` - Basic class implementation
2. `1-make_classrooms.js` - Factory function for class objects
3. `2-hbtn_course.js` - Class with type verification
4. `3-currency.js` - Class with custom methods
5. `4-pricing.js` - Class composition and static methods
6. `5-building.js` - Abstract class implementation pattern
7. `6-sky_high.js` - Class inheritance and method overriding
8. `7-airport.js` - Custom object string representation
9. `8-hbtn_class.js` - Type conversion in classes
10. `9-hoisting.js` - Fixing class hoisting issues
11. `10-car.js` - Symbol.species pattern for cloning
12. `100-evcar.js` - Advanced inheritance with class type control

## Skills Demonstrated

- ES6 class syntax and features
- Object-oriented programming concepts
- JavaScript inheritance patterns
- Working with getters and setters
- Type checking in JavaScript
- Advanced JavaScript object manipulation
- JavaScript Symbols
- Control over object string representation