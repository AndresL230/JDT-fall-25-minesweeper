import {CellProps} from "@/app/type";

const CellComponent = ({prop}: {prop: CellProps}) => prop {
    const {cell, cellModifier flagModifier} = prop;
    const cellClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropogation();
        if (!cell.isRevealed && !cell.isFlagged){
            cellModifier(cell.row, cell.col);
        }
    }

    const flagClick = (e, React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        e.stopPropogation();
        if (!cell.isRevealed && !cell.isFlagged){
            flagClick(cell.row, cell.col);
        }
    }

    return(
        ///yet to do
    )
}