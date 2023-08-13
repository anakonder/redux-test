import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)
    
    const addCash = (cash) => { 
        dispatch({type: "ADD_CASH", payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))        
    }

    const removeCustomer = (customer) => {
         dispatch(removeCustomerAction(customer.id))
    }

    return(
        <div className={"app"}>
            <div style={{fontSize: "3rem"}}>{cash}</div>
            <div style={{display: "flex"}}>
                <button onClick={() => addCash(Number(prompt()))}>Поповнити рахунок</button>
                <button onClick={() => getCash(Number(prompt()))}>Зняти з рахунку</button>
                <button onClick={() => addCustomer(prompt())}>Додати клієнта</button>
                {/* <button onClick={() => getCash(Number(prompt()))}>Видалити клієнта</button> */}
            </div>
            {customers.length > 0 ? 
                <div>
                    {customers.map(customer => 
                        <div key={customer.id} onClick={() => removeCustomer(customer)}  style={{fontSize: "2rem", border: "1px solid black", padding: "10px", marginTop: 5}}>
                            {customer.name}
                        </div>
                    )}                    
                </div>
                :
                <div style={{fontSize: "2rem"}}>
                    Клієнти відсутні
                </div>
            }
        </div>
    )
}

export default App;