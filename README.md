### SolutionJS

This package is that contains a small part of the solutions to the cases solved by a junior frontend developer in order to develop it himself. I will add more solutions as soon as possibly.

## Installation

```
npm i solutionjs
```

## Usage

```javascript
import { sumOfTwoNumbers } from 'solutionjs';

const twoPlusFour = sumOfTwoNumbers(2, 4);
console.log('Result = ', twoPlusFour); // Result = 6
```

## Methods

<table>
    <thead>
      <tr>
        <th> Method Name </th>
        <th> Description </th>
        <th> Return Type</th>
        <th> Parameters </th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>areaOfCircle</td>
            <td>'Returns area of circle'</td>
            <td>number</td>
            <td>radius : number</td>
        </tr>
       <tr>
            <td>areaOfSquare</td>
            <td>'Returns area of square'</td>
            <td>number</td>
            <td>side : number</td>
        </tr>
        <tr>
            <td>binToDecimal</td>
            <td>'Returns decimal value of given bin value'</td>
            <td>number</td>
            <td>bin : string</td>
        </tr>
        <tr>
            <td>capitalizeFirstCharacter</td>
            <td>'Returns words, first letters capitalized'</td>
            <td>string</td>
            <td>word : string</td>
        </tr>
         <tr>
            <td>celciusToFahreneit</td>
            <td>'Returns fahreneit value'</td>
            <td>number</td>
            <td>celcius : number</td>
        </tr>
         <tr>
            <td>consecutiveNumbersInRange</td>
            <td>'Returns an array with consecutive numbers in given range'</td>
            <td>number[]</td>
            <td>min : number, max : number</td>
        </tr>
         <tr>
            <td>divisibleBy</td>
            <td>'Returns an array with divisible numbers by given number'</td>
            <td>number[]</td>
            <td>numbers: number[], divisor: number</td>
        </tr>
        <tr>
            <td>fahreneitToCelcius</td>
            <td>'Return celcius value of given fahreneit value'</td>
            <td>number</td>
            <td>fahreneit: number</td>
        </tr>
        <tr>
            <td>findDifferences</td>
            <td>'Returns an array with
            [ inJustFirstArray, sameElements, inJustSecondArray ]'</td>
            <td>[any[], any[], any[]]</td>
            <td>firstArray: any[], secondArray: any[]</td>
        </tr>
        <tr>
            <td>findLostNumbers</td>
            <td>'Returns an array with lost numbers by given numbers'</td>
            <td>number[]</td>
            <td>numbers: number[]</td>
        </tr>
        <tr>
            <td>findMax</td>
            <td>'Returns maximum numbers in given array'</td>
            <td>number</td>
            <td>numbers: number[]</td>
        </tr>
         <tr>
            <td>findMin</td>
            <td>'Returns minimum numbers in given array'</td>
            <td>number</td>
            <td>numbers: number[]</td>
        </tr>
        <tr>
            <td>findUnique</td>
            <td>'Returns an array with unique elements of given array'</td>
            <td>any[]</td>
            <td>elements: any[]</td>
        </tr>
        <tr>
            <td>firstNonConsecutive</td>
            <td>'Returns first non consecutive number or null'</td>
            <td>null | number</td>
            <td>numbers: number[]</td>
        </tr>
        <tr>
            <td>getFactorial</td>
            <td>'Returns factorial value of given number'</td>
            <td> number</td>
            <td>num: number</td>
        </tr>
         <tr>
            <td>groupByFirstLetter</td>
            <td>'Returns an object grouped by first letter'</td>
            <td> object </td>
            <td>strings: string[]</td>
        </tr> 
        <tr>
            <td>hexToDecimal</td>
            <td>'Returns decimal value by converted hex string'</td>
            <td> number </td>
            <td>hexString: string</td>
        </tr>
        <tr>
            <td>isBetterThanAverage</td>
            <td>'Returns true if your point greater than average of otherPoints, otherwise false'</td>
            <td> boolean </td>
            <td>otherPoints: number[], yourPoint: number</td>
        </tr>
        <tr>
            <td>multiplyOfNumbers</td>
            <td>'Returns multiply of given numbers'</td>
            <td> number </td>
            <td>numbers: number[]</td>
        </tr>
        <tr>
            <td>multiplyTwoNumbers</td>
            <td>'Returns multiply of two numbers'</td>
            <td> number </td>
            <td>firstNumber: number, secondNumber: number</td>
        </tr>
        <tr>
            <td>oppositeOfNumber</td>
            <td>'Returns opposite of given number'</td>
            <td> number </td>
            <td>num: number</td>
        </tr>
        <tr>
            <td>percentageOfNumber</td>
            <td>'Return the given percentage of the number'</td>
            <td> number </td>
            <td>num: number, percent: number</td>
        </tr>
        <tr>
            <td>perimeterOfRectangle</td>
            <td>'Returns perimeter of rectangle'</td>
            <td> number </td>
            <td>length: number, width: number</td>
        </tr>
        <tr>
            <td>reverseString</td>
            <td>'Returns a string, reserved of given string'</td>
            <td> string </td>
            <td>str: string</td>
        </tr>
        <tr>
            <td>setAndSort</td>
            <td>'Returns an array of set and sorted given arrays'</td>
            <td> number[] </td>
            <td>arrayOne: number[], arrayTwo: number[]</td>
        </tr>
        <tr>
            <td>bubbleSort</td>
            <td>'Returns a sorted array with Bubble Sort Method'</td>
            <td> number[] </td>
            <td>numbers: number[]</td>
        </tr>
        <tr>
            <td>heapSort</td>
            <td>'Returns a sorted array with Heap Sort Method'</td>
            <td> number[] </td>
            <td>numbers: number[]</td>
        </tr>
        <tr>
            <td>insertionSort</td>
            <td>'Returns a sorted array with Insertion Sort Method'</td>
            <td> number[] </td>
            <td>numbers: number[]</td>
        </tr>
        <tr>
            <td>quickSort</td>
            <td>'Returns a sorted array with Quick Sort Method'</td>
            <td> number[] </td>
            <td>numbers: number[]</td>
        </tr>
        <tr>
            <td>selectionSort</td>
            <td>'Returns a sorted array with Selection Sort Method'</td>
            <td> number[] </td>
            <td>numbers: number[]</td>
        </tr>
        <tr>
            <td>shellSort</td>
            <td>'Returns a sorted array with Shell Sort Method'</td>
            <td> number[] </td>
            <td>numbers: number[]</td>
        </tr>
        <tr>
            <td>squareOfNumber</td>
            <td>'Returns square of given number'</td>
            <td> number </td>
            <td>num: number</td>
        </tr>
        <tr>
            <td>sumOfNumbers</td>
            <td>'Returns sum of numbers in array'</td>
            <td> number </td>
            <td>numbers: number[]</td>
        </tr>
        <tr>
            <td>sumOfTwoNumbers</td>
            <td>'Returns sum of given two numbers'</td>
            <td> number </td>
            <td>firstNumber: number, secondNumber: number</td>
        </tr>
        <tr>
            <td>swapObjKeyAndValue</td>
            <td>'Swap the Javascript object's key with its values and return the resulting object'</td>
            <td> any </td>
            <td>obj: any</td>
        </tr>
        <tr>
            <td>symmetricPoint</td>
            <td>'Returns the symmetry of the first point to the second point'</td>
            <td> [number, number] </td>
            <td>p: [number, number], q: [number, number]</td>
        </tr>
    </tbody>
  </table>
