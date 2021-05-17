export interface Grading {
    sort(arg0: (a: Grading, b: Grading) => 0 | 1 | -1): any;
    name: string,
    grade_description: string,
    percent_from: string,
    percent_to: string,
    id?: number
}
