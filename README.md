# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @victorpoirier/lotide`

**Require it:**

`const _ = require('@p-victor/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: Gets the first index of the array.
* `tail()`: Gets an array containing everything but the first index of the array.
* `middle()`: Gets the middle number(s) index(es) of an array.
* `assertArraysEqual()`: Asserts equality between two arrays.
* `assertEqual()`: Asserts equality between two primitives.
* `assertObjectsEqual()`: Asserts equality between two objects.
* `countLetter()`: Returns the count of every letter in a given string.
* `countOnly()`:  Returns the count of only the instances needed in a given array. 
* `eqArrays()`: Returns true if both arrays are equal.
* `eqObjects()`: Returns true if both objects are equal.
* `findKey()`: Finds the key of the first item which fullfills a callback function.
* `findKeyByValue()`: Finds the key of the first item with the value asked.
* `letterPositions()`: Returns an array of all the positions in the string for every letter in it.
* `map()`: Returns an array defined by the result of calling a callback function on every item of the array.
* `takeUntil()`: Returns an array containing every element in the original array until the callback function returns true by calling it on every item. 
* `without()`: Returns an array without certain values specified
* `flatten()`: Return a single array from nested arrays.