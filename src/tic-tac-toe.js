class TicTacToe {
    constructor() {
        this.curPlaySymb = x;
        this.isFin = false;
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
            }
    }

    isFinished() {
        return this.isFin;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {

    }

    isDraw() {
        return this.isDrw;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
