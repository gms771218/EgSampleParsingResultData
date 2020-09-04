module view {

    /**
     * Demo 
     */
    export class Demo extends eui.UILayer {

        private _context: model.DataContext;

        private testData: Array<Array<Array<number>>> =
            [
                [[1, 1, 1, 1, 1], [0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [0, 0, 0, 0, 1]],
                [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0, 0, 0, 0, 1], [0, 0, 0, 0, 1]]
            ];

        constructor() {
            super();
            this.name = "DemoView";
            this.once(egret.Event.ADDED_TO_STAGE, this.initView, this);
        }

        protected initView(): void {
            this._context = new model.DataContext();
            this._context.setSource(this.testData[0]);
            // 設定進入FreeGame條件
            this._context.setCkFreeGame(new model.gameA.GameAFreeGame());
            // 設定進入SelectGame條件
            this._context.setCkSelectGame(new model.gameA.GameASelectGame());
            // --- 顯示結果 ---
            console.log(`GameA FreeGame : ${this._context.checkToFreeGame()}`);
            console.log(`GameA SelectGame : ${this._context.checkToSelectGame()}`);

        }

    }
}