class Interval {
  start: number;
  end: number;

  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }

  merge(interval: Interval): Interval {
    return new Interval(
      Math.min(this.start, interval.start),
      Math.max(this.end, interval.end)
    );
  }
}

export default Interval;
