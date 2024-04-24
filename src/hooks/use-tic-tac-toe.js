import { useState } from "react";

const initialBoard=()=>Array(9).fill(null);

const useTictacToe=()=>
{
    const [board,setboard]=useState(initialBoard())
const [isXNext,setIsXNext]=useState(true);
const winning_patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const calculateWinner=(currentboard)=>
{
    for(let i=0;i<winning_patterns.length;i++)
    {
        const [a,b,c]=winning_patterns[i];
        if(currentboard[a]&&
            currentboard[a]===currentboard[b]&&
            currentboard[a]===currentboard[c])
            {
                return currentboard[a];
            }
    }
    return null;

}
const handleClick=(index)=>
{
//checkwinner
const winner=calculateWinner(board);
console.log("winner",winner)
if(winner || board[index]) return;
const newBoard=[...board];
newBoard[index]=isXNext? "X" : "O";
setboard(newBoard);
setIsXNext(!isXNext)

}
const getStatusMessage=()=>
{
const winner=calculateWinner(board);
if(winner) return `player ${winner} wins!`
if(!board.includes(null)) return 'Its a draw!'

return `Player ${isXNext ? "X" :"O"} turn `

}
const resetGame=()=>
{
   setboard(initialBoard());
   setIsXNext(true)

}
return {board,handleClick,resetGame,calculateWinner,getStatusMessage}
}
export default useTictacToe;