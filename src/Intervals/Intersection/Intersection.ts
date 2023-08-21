import Interval from "../Interval";
import IntersectionInput from "./IntersectionInput";

const intersection = (input: IntersectionInput): Interval[] => {
  const { intervalA, intervalB } = input;
  const output: Interval[] = [];

  let pointerA: number = 0;
  let pointerB: number = 0;

  while (pointerA < intervalA.length && pointerB < intervalB.length) {
    let start = Math.max(intervalA[pointerA].start, intervalB[pointerB].start);
    let end = Math.min(intervalA[pointerA].end, intervalB[pointerB].end);

    if (start <= end) {
      output.push(new Interval(start, end));
    }

    if (intervalA[pointerA].end < intervalB[pointerB].end) {
      pointerA++;
    } else {
      pointerB++;
    }
  }

  return output;
};

const result = intersection(
  new IntersectionInput(
    [
      new Interval(1, 4),
      new Interval(5, 6),
      new Interval(7, 8),
      new Interval(9, 15),
    ],
    [new Interval(2, 4), new Interval(5, 7), new Interval(9, 15)]
  )
);
console.log(result);
export default intersection;
