import Interval from "../Interval";
import insertInterval from "./InsertInterval";
import InsertIntervalInput from "./InsertIntervalInput";

type InsertIntervalTestCaseType = {
  input: InsertIntervalInput;
  expected: Interval[];
};

const testCases: InsertIntervalTestCaseType[] = [
  {
    input: new InsertIntervalInput(
      [
        new Interval(1, 2),
        new Interval(3, 4),
        new Interval(5, 8),
        new Interval(9, 15),
      ],
      new Interval(2, 5)
    ),
    expected: [new Interval(1, 8), new Interval(9, 15)],
  },
  {
    input: new InsertIntervalInput(
      [
        new Interval(1, 6),
        new Interval(8, 9),
        new Interval(10, 15),
        new Interval(16, 18),
      ],
      new Interval(9, 10)
    ),
    expected: [new Interval(1, 6), new Interval(8, 15), new Interval(16, 18)],
  },
  {
    input: new InsertIntervalInput(
      [
        new Interval(1, 2),
        new Interval(3, 4),
        new Interval(5, 8),
        new Interval(9, 15),
      ],
      new Interval(16, 18)
    ),
    expected: [
      new Interval(1, 2),
      new Interval(3, 4),
      new Interval(5, 8),
      new Interval(9, 15),
      new Interval(16, 18),
    ],
  },
  {
    input: new InsertIntervalInput(
      [
        new Interval(1, 4),
        new Interval(5, 6),
        new Interval(7, 8),
        new Interval(9, 10),
      ],
      new Interval(1, 5)
    ),
    expected: [new Interval(1, 6), new Interval(7, 8), new Interval(9, 10)],
  },
  {
    input: new InsertIntervalInput(
      [
        new Interval(1, 3),
        new Interval(4, 6),
        new Interval(7, 8),
        new Interval(9, 10),
      ],
      new Interval(1, 10)
    ),
    expected: [new Interval(1, 10)],
  }
];
describe("Testing Insert Interval", () => {
  testCases.forEach((testCase: InsertIntervalTestCaseType, index: number) => {
    test(`Case #${index + 1}`, () => {
      expect(insertInterval(testCase.input)).toStrictEqual(testCase.expected);
    });
  });
});
