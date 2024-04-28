const $ = document.querySelector.bind(document);
const calculate = () => {
  const value = $("#number-input").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));
  const mean = getMean(numbers);
  $(".mean>p").textContent = mean;
};
// calc mean
const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;

$(".inputter").onsubmit = (e) => {
  e.preventDefault();
  calculate();
  return false;
};
