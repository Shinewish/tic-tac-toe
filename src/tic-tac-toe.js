class TicTacToe {
    constructor() {
        this.curPlaySymb = "x";
        this.sum = 0;
        this.field = [[null, null, null], [null, null, null], [null, null, null]];
        this.noTurns =false;
        this.winner = null;

    }

    getCurrentPlayerSymbol() { 
        return this.curPlaySymb;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.curPlaySymb;
            this.curPlaySymb = this.curPlaySymb === "x" ? "o" : "x";
            this.sum++;
            }
    }

    isFinished() {
        return (!this.getWinner() && !this.isDraw()) ? false : true;
    }

    getWinner() {
        if (this.field[0][0] + this.field[0][1] + this.field[0][2] === "xxx"||
            this.field[1][0] + this.field[1][1] + this.field[1][2] === "xxx"||
            this.field[2][0] + this.field[2][1] + this.field[2][2] === "xxx"||

            this.field[0][0] + this.field[1][0] + this.field[2][0] === "xxx"||
            this.field[0][1] + this.field[1][1] + this.field[2][1] === "xxx"||
            this.field[0][2] + this.field[1][2] + this.field[2][2] === "xxx"||

            this.field[0][0] + this.field[1][1] + this.field[2][2] === "xxx"||
            this.field[0][2] + this.field[1][1] + this.field[2][0] === "xxx")
            {this.winner = "x"} ;

        if (this.field[0][0] + this.field[0][1] + this.field[0][2] === "ooo"||
            this.field[1][0] + this.field[1][1] + this.field[1][2] === "ooo"||
            this.field[2][0] + this.field[2][1] + this.field[2][2] === "ooo"||

            this.field[0][0] + this.field[1][0] + this.field[2][0] === "ooo"||
            this.field[0][1] + this.field[1][1] + this.field[2][1] === "ooo"||
            this.field[0][2] + this.field[1][2] + this.field[2][2] === "ooo"||

            this.field[0][0] + this.field[1][1] + this.field[2][2] === "ooo"||
            this.field[0][2] + this.field[1][1] + this.field[2][0] === "ooo")
            {this.winner = "o"}

        return this.winner;
    }

    noMoreTurns() {
        return this.sum === 9 ? true : false;
    }

    isDraw() {
        return (this.getWinner() === null && this.sum === 9) ? true : false; 
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
