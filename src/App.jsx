import { useDispatch, useSelector } from "react-redux";

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)
    console.log(cash)
    return(
        <div className={"app"}>
            <div style={{display: "flex"}}>
                <button>Поповнити рахунок</button>
                <button>Зняти з рахунку</button>
            </div>
        </div>
    )
}

export default App;