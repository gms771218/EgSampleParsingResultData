module model {


    export class DataContext implements interfaces.IGameRequirements {

        private _source: Array<Array<number>> = [[0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [0, 0, 0, 0, 1]];

        private _ckFreeGame: interfaces.ICheck;
        private _ckSelectGame: interfaces.ICheck;
        private _ckRespinGame: interfaces.ICheck;

        public setSource(source: Array<Array<number>>): void {
            this._source = source;
        }

        public getSource(): Array<Array<number>> {
            return this._source;
        }

        /**
         * 設定進入FreeGame條件
         * @param  {interfaces.ICheck} iCheck
         */
        public setCkFreeGame(iCheck: interfaces.ICheck) {
            this._ckFreeGame = iCheck;
        }
        /**
         * 設定進入SelectGame條件
         * @param  {interfaces.ICheck} iCheck
         */
        public setCkSelectGame(iCheck: interfaces.ICheck) {
            this._ckSelectGame = iCheck;
        }

        /**
         * 設定進入RespinGame條件
         * @param  {interfaces.ICheck} iCheck
         */
        public setCkRespinGame(iCheck: interfaces.ICheck) {
            this._ckRespinGame = iCheck;
        }

        public checkToFreeGame(): boolean {
            return this._ckFreeGame && this._ckFreeGame.check(this._source) || false;
        }
        public checkToSelectGame(): boolean {
            return this._ckSelectGame && this._ckSelectGame.check(this._source) || false;
        }
        public checkToRespinGame(): boolean {
            return this._ckRespinGame && this._ckRespinGame.check(this._source) || false;
        }


        // private _test : (winLines: Array<Array<number>>) => boolean ;
        // public setCkFreeGame2(callbackfn: interfaces.ICheck2){
        //     this._test = callbackfn;
        // }

    }

}