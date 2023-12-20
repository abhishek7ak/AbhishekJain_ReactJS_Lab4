import { useEffect, useState } from "react";
import IDataList from "../model/Idatalist";
import { getDataFromServer } from "../services/menu";
import React from "react";

function ShowList(){
    const [items, setitems] = useState<IDataList[]>([]);
    const [ showForm,setShowForm] = useState<boolean>(false)
    
    useEffect(() =>{
         const fetchMenu = async () =>{
            try {
                const data = await getDataFromServer();
                setitems(data)
            
            } catch(error:any){

            }
         };
    fetchMenu();
},[showForm])

const sucess = () => {
    setShowForm(false);
}
const cancel = () => {
    setShowForm(false);
}
return(
    <>
    <header id="page-Header">Expense Tracker</header>
    <button id="Add-Button" onClick={() => setShowForm(true)}>Add</button>
    {showForm &&(
        <div className="form">
            <ExpenseTracker onTrue={sucess} onclose{cancel}></ExpenseTracker>
        </div>
    )}  
    <>
    <div className="use-inline date header-color">Date</div>
    <div className="use-inline header-color">Product Purchased</div>
    <div className="use-inline price header-color">Price</div>
    <div className="use-inline header-color">Payee</div>
    </>
    {
        items &&
        items.map((user, ind) =>(
            <div key={ind}>
                <div className="use-inline date">{user.setDate}</div>
                <div className="use-inline">{user.product}</div>
                <div className="use-inline price">{user.price}</div>
                <div className="use-inline">{user.payeeName}</div>
                </div>
        )) }
        <hr />
   </>
   )
}

export default ShowList