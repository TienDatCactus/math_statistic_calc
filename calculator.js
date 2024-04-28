const $ = document.querySelector.bind(document);
const calculate = () => {
  const value = $("#number-input").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));
  // mean
  const mean = getMean(numbers);
  $(".mean>p").textContent = mean;
  // median
  const median = getMedian(numbers);
  $(".median>p").textContent = median;
};

// calc mean
const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;

$(".inputter").onsubmit = (e) => {
  e.preventDefault();
  calculate();
  return false;
};

// calc median
function getMedian(array) {
  const sorted = array.sort((a, b) => a - b);
  if (sorted.length % 2 === 0) {
    return getMean([sorted[sorted.length / 2], sorted[sorted.length / 2 - 1]]);
  } else {
    return sorted[Math.floor([sorted.length / 2])];
  }
}
