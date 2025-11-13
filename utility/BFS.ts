import "denque"
import {Cell, Tuple} from "@app/type"
const BFS = (grid: Cell[][], node:Tuple)=>{
    let counter = 0;
    const queue = new Denque();
    const directions = [[0,1],[0,-1],[1,0],[1,1],[-1,0],[0,0],[-1,-1],[-1,1],[1,-1]];

    while 
}