# Statistical Calculator

This is a creative statistical calculator built with HTML, CSS, and JavaScript. It allows users to input a list of numbers separated by commas, and it calculates various statistical measures such as mean, median, mode, range, variance, and standard deviation. The interface is simple and intuitive, making it easy for users to perform statistical calculations quickly.

## Features

- Calculate mean, median, mode, range, variance, and standard deviation.
- Input numbers separated by commas.
- Dynamic updates of results as soon as the input is changed.
- Visual representation of calculated statistics.

## Technologies Used

- HTML
- CSS
- JavaScript

## Usage

1. Enter a list of numbers separated by commas into the input field.
2. Press Enter or click the "Calculate" button.
3. The statistical measures will be displayed instantly below the input field.

## Code Explanation

The JavaScript code consists of functions to calculate each statistical measure:

- `getMean`: Calculates the mean of an array of numbers.
- `getMedian`: Calculates the median of an array of numbers.
- `getMode`: Calculates the mode of an array of numbers.
- `getRange`: Calculates the range of an array of numbers.
- `getVariance`: Calculates the variance of an array of numbers.
- `getStdev`: Calculates the standard deviation of an array of numbers.

The `calculate` function is called whenever the input field is changed or the form is submitted. It extracts the numbers from the input field, calculates the statistical measures using the above functions, and updates the DOM to display the results.

## Interface

The interface is designed to be clean and user-friendly. It features an input field where users can input their list of numbers and a section below to display the calculated statistics dynamically.

## Try It Out

Feel free to clone this repository and try out the statistical calculator yourself! Simply open the `index.html` file in your web browser and start entering numbers to see the results instantly.

## Author

[Tien Dat](https://github.com/TienDatCactus)

For any inquiries or feedback, please reach out!

---
