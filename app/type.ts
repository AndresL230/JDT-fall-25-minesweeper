interface Cell{
    isMine: boolean;
    isRevealed: boolean;
    isFlagged: boolean;
    Mines: number;
    row: number;
    col: number;
}

interface Tuple{
    x: number;
    y: number;
}

interface CellProps{
    cell: Cell;
    cellModifier
}