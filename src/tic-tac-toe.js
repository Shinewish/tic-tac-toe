class TicTacToe {
    constructor() {
        this.curPlaySymb = "x";
        this.sum = 0;
        this.isDrw = false;
        this.noTurns =false;
        this.winner = null;
        this.field = [[,,],[,,],[,,]];
    }

    getCurrentPlayerSymbol() { 
        return this.curPlaySymb;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.curPlaySymb;
            this.curPlaySymb = this.curPlaySymb === "x" ? "o" :"x";
            this.sum++;
            }
    }

    isFinished() {
        return this.isFin;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        return this.sum === 9 ? true : false;
    }

    isDraw() {
        return !this.getWinner() && this.sum === 9 ? true : false; 
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
