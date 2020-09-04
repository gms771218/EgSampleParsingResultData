module model.gameA {

    export class GameAFreeGame implements interfaces.ICheck {
        check(winLines: Array<Array<number>>): boolean {
            // 第一軸是否都為1
            return winLines[0].filter(value => { return value == 1 }).length == winLines[0].length;
        }
    }

    export class GameASelectGame implements interfaces.ICheck {
        check(winLines: Array<Array<number>>): boolean {
            // 第二軸是否都為1
            return winLines[1].filter(value => { return value == 1 }).length == winLines[1].length;
        }
    }

}