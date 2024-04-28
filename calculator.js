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
  // mode
  const mode = getMode(numbers);
  $(".mode>p").textContent = mode;
  // range
  const range = getRange(numbers);
  $(".range>p").textContent = range;
  // variance
  const variance = getVariance(numbers);
  $(".variance>p").textContent = variance;
  // stdev
  const stdev = getStdev(numbers);
  $(".stdev>p").textContent = stdev;
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

// calc mode
function getMode(array) {
  const counts = {};
  array.forEach((el) => {
    if (counts[el]) {
      counts[el] += 1;
    } else {
      counts[el] = 1;
    }
  });
  const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
  if (new Set(Object.values(counts)).size === 1) {
    return "none";
  }
  const mode = Object.keys(counts).filter(
    (el) => counts[el] === counts[highest]
  );
  return mode.join(", ");
}

// calc range
function getRange(array) {
  return Math.max(...array) - Math.min(...array);
}

// calc variance
function getVariance(array) {
  const mean = getMean(array);
  // const differences = array.map((el) => el - mean);
  // const squaredDifferences = differences.map((el) => el ** 2);
  // const sumSquaredDifferences = squaredDifferences.reduce(
  //   (acc, el) => acc + el,
  //   0
  // );
  const variances =
    array.reduce((acc, el) => {
      const diffs = el - mean;
      const squaredDiffs = diffs ** 2;
      return acc + squaredDiffs;
    }, 0) / array.length;
  return variances;
}

// calc stdev
function getStdev(array) {
  const variance = getVariance(array);
  return Math.pow(variance, 1 / 2);
}
