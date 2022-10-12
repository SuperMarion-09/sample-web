import React, {useState} from 'react';
import './Tictactoe.css';

const Tictactoe = () => {
    const [player, setPlayer] = useState('X');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState('');

    const validateWinner = (cellList: any) => {
        const checkCombos = {
            accross: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6]
            ]
        }

        for (let combo in checkCombos) {
            checkCombos[combo as keyof typeof checkCombos].forEach((cmb: any) => {
                if(cellList[cmb[0]] === cellList[cmb[1]] && cellList[cmb[1]] === cellList[cmb[2]]){
                    setWinner(cellList[cmb[0]]);
                }
            });
        }
    }

    const handleClick = (numIdx: any) => {
        if(cells[numIdx] !== "") {
            alert("Already taken");
            return;
        }
       let cellList = [...cells];
       if(player == "X"){
            cellList[numIdx] = "X";
            setPlayer("O");
       }else{
            cellList[numIdx] = "O";
            setPlayer("X");
       }
       setCells(cellList);
       validateWinner(cellList);
    }

    const TableCell = (numIdx: any) => {
       
        return <td onClick={() => handleClick(numIdx.numIdx)}>{cells[numIdx.numIdx]}</td>;
    }

    const handlePlayAgain = () => {
        setWinner('');
        setCells(Array(9).fill(''));
        setPlayer('X');
    }

    return(
        <>
            <h1>Tic Tac Toe</h1>
            <p>Player: {player}</p>
            <table>
                <tbody>
                    <tr>
                       <TableCell numIdx={0} />
                       <TableCell numIdx={1} />
                       <TableCell numIdx={2} />
                    </tr>
                    <tr>
                        <TableCell numIdx={3} />
                        <TableCell numIdx={4} />
                        <TableCell numIdx={5} />
                    </tr>
                    <tr>
                        <TableCell numIdx={6} />
                        <TableCell numIdx={7} />
                        <TableCell numIdx={8} />
                    </tr>
                </tbody>
            </table>
            {winner && 
                <>
                    <p>The winner is {winner}</p>
                    <button onClick={() => handlePlayAgain()}>Play Again</button>
                </>
            }
        </>
    )

}

export default Tictactoe;