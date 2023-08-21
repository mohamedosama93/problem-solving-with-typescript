import Interval from "../Interval";

class IntersectionInput {
  intervalA: Interval[];
  intervalB: Interval[];

  constructor(intervalA: Interval[], intervalB: Interval[]) {
    this.intervalA = intervalA;
    this.intervalB = intervalB;
  }
}

export default IntersectionInput;
