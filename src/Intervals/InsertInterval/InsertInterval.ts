import Interval from "../Interval";
import InsertIntervalInput from "./InsertIntervalInput";

const insertInterval = (insertIntervalInputType: InsertIntervalInput) => {
  const { intervals, newInterval } = insertIntervalInputType;
  const n: number = insertIntervalInputType.intervals.length;
  const output: Interval[] = [];
  // find interval before
  let i: number = 0;
  while (i < n && intervals[i].start < newInterval.start) {
    output.push(intervals[i]);
    i++;
  }
  // Merge new Interval with pervious If they can be merged
  const pervious = output[output.length - 1];
  if (output.length && newInterval.start <= pervious.end) {
    output[output.length - 1] = newInterval.merge(pervious);
  } else {
    output.push(newInterval);
  }

  while (i < n) {
    const current = intervals[i];
    const pervious = output[output.length - 1];
    if (current.start <= pervious.end) {
      output[output.length - 1] = current.merge(pervious);
    } else {
      output.push(current);
    }
    i++;
  }

  return output;
};

const result = insertInterval(
  new InsertIntervalInput(
    [
      new Interval(1, 2),
      new Interval(3, 4),
      new Interval(5, 8),
      new Interval(9, 15),
    ],
    new Interval(2, 5)
  )
);
console.log(result);
export default insertInterval;
