import { useDispatch, useSelector } from "react-redux";

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)
    
    const addCash = (cash) => { 
        dispatch({type: "ADD_CASH", payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
    }

    return(
        <div className={"app"}>
            <div style={{fontSize: "3rem"}}>{cash}</div>
            <div style={{display: "flex"}}>
                <button onClick={() => addCash(Number(prompt()))}>Поповнити рахунок</button>
                <button onClick={() => getCash(Number(prompt()))}>Зняти з рахунку</button>
            </div>
        </div>
    )
}

export default App;