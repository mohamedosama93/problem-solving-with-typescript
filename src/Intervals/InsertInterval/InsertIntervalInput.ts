import Interval from "../Interval";

class InsertIntervalInput {
  intervals: Interval[];
  newInterval: Interval;

  constructor(intervals: Interval[], newInterval: Interval) {
    this.intervals = intervals;
    this.newInterval = newInterval;
  }
}

export default InsertIntervalInput;
