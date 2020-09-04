module interfaces {

    export interface ICheck {

        /**
         * 檢查贏線資料
         * @param  {Array<Array<number>>} winLines
         * @returns boolean 
         */
        check(winLines: Array<Array<number>>): boolean;

    }

}