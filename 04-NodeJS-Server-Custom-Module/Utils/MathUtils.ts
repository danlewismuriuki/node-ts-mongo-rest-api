export class Mathutil {

    public static printMathTable(value: number): string {
        let tempStr: string = '';
        for (let i: number = 1; i <= 10; i++) {
            tempStr += `${value} * ${i} = ${value * i} <br>`;
        }
        return tempStr;
    }
}