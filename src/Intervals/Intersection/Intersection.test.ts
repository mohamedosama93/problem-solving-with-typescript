import Interval from "../Interval";
import intersection from "./Intersection";
import IntersectionInput from "./IntersectionInput";

type IntersectionTestCase = {
  input: IntersectionInput;
  expected: Interval[];
};

const testCases: IntersectionTestCase[] = [
  {
    input: new IntersectionInput(
      [
        new Interval(1, 4),
        new Interval(5, 6),
        new Interval(7, 8),
        new Interval(9, 15),
      ],
      [new Interval(2, 4), new Interval(5, 7), new Interval(9, 15)]
    ),
    expected: [
      new Interval(2, 4),
      new Interval(5, 6),
      new Interval(7, 7),
      new Interval(9, 15),
    ],
  },
  {
    input: new IntersectionInput(
      [
        new Interval(1, 3),
        new Interval(4, 6),
        new Interval(8, 10),
        new Interval(11, 15),
      ],
      [new Interval(2, 3), new Interval(10, 15)]
    ),
    expected: [new Interval(2, 3), new Interval(10, 10), new Interval(11, 15)],
  },
  {
    input: new IntersectionInput(
      [
        new Interval(1, 2),
        new Interval(4, 6),
        new Interval(7, 8),
        new Interval(9, 10),
      ],
      [new Interval(3, 6), new Interval(7, 8), new Interval(9, 10)]
    ),
    expected: [new Interval(4, 6), new Interval(7, 8), new Interval(9, 10)],
  },
  {
    input: new IntersectionInput(
      [
        new Interval(1, 3),
        new Interval(5, 6),
        new Interval(7, 8),
        new Interval(9, 10),
      ],
      [new Interval(2, 4), new Interval(7, 10)]
    ),
    expected: [new Interval(2, 3), new Interval(7, 8), new Interval(9, 10)],
  },
  {
    input: new IntersectionInput([new Interval(1, 2)], [new Interval(1, 2)]),
    expected: [new Interval(1, 2)],
  },
];
describe("Testing Intervals Intersection", () => {
  testCases.forEach((testCase: IntersectionTestCase, index: number) => {
    test(`Case #${index + 1}`, () => {
      expect(intersection(testCase.input)).toStrictEqual(testCase.expected);
    });
  });
});
