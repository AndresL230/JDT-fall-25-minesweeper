interface Cell{
    isMine: boolean;
    isRevealed: boolean;
<<<<<<< HEAD
    isFlagged: boolean;
    Mines: number;
    row: number;
    col: number;
}

=======
    isFlagged: boolean; 
    Mines: number;
    row: number; 
    col:number;
}
>>>>>>> 37380ab34d53e67aa8235ede2cfa568f926990fe
interface Tuple{
    x: number;
    y: number;
}
<<<<<<< HEAD

interface CellProps{
    cell: Cell;
    cellModifier
}
=======
interface CellProps{
    cell: Cell;
    cellModifier: (x:number, y: number)=> void;
    flagModifier: (x:number, y: number)=> void;
}
export type {Cell, Tuple, CellProps};
>>>>>>> 37380ab34d53e67aa8235ede2cfa568f926990fe
