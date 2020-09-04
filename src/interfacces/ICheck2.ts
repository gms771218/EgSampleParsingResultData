module interfaces {

    export interface ICheck2 {

        /**
         * 檢查贏線資料
         * @param  {Array<Array<number>>} winLines
         * @returns boolean 
         */
        (winLines: Array<Array<number>>): boolean;

    }

}