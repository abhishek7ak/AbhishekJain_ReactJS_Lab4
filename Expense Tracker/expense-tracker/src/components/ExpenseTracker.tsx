import React from "react";
import { ChangeEvent, Component } from "react";
import { pushDataToServer } from "../services/menu";

type props ={
    onTrue: any;
    onclose: any
}

type State = {
    payeeName: string;
    product: string;
    price: number;
    setDate: string;
}

class ExpenseTracker extends Component<props, State>{
    constructor(props: props){
        super(props)
        this.state ={
            payeeName:"",
            product:"",
            price: 0,
            setDate: this.setDefaultDate()

        };
        this .setPayee = this.setPayee.bind(this)
        this .setProduct = this.setProduct.bind(this)
        this .setPrice = this.setPrice.bind(this)
    }

    setDefaultDate = () => {
        const today = new Date();
        return (today.getFullYear()+ "-"+("0"+ (today.getMonth() + 1)).slice(-2) + "-"+ ("0"+ today.getDate()).slice(-2));
    }
    setPayee = (event: ChangeEvent<HTMLSelectElement>) =>{
        this.setPayee({
            payeeName : event.target.value
        })
    setProduct = (event: ChangeEvent<HTMLSelectElement>) =>{
            this.setState({
                payeeName : event.target.value
            })
    setPrice = (event: ChangeEvent<HTMLSelectElement>) =>{
                this.setState({
                    price : parseInt(event.target.value)
                })
    };

    loggedDate = {event: ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            setDate: event.target.value
        });
    }
    submitHandler = async (event.FormEvent<HTMLFormElement>) =>{
        event?.preventDefault();
        const finalData ={
            ...this.state
            id:parseInt ((Math.random()*1000)+"") 
        }
        const data = await pushDataToServer(finalData);
        this.props.onTrue()
    }


    el = document.createElement("div")
    render(){
        const element =(
            <>
            <section>
                <header>
                    <h1>Add New Item</h1>
                    <p>Read the below instruction before procedding:
                        <br>Make sure you fill all the fields where * is provided</br>
                    </p>
                </header>
                <form onSubmit= {this.submitHandler}>
                <article>
                    <p> Name</p>
                    <select name = "Name" id="district" required value={this.state.payeeName} onChange= {this.setPayee}
                     <option value= "" defaultChecked>Choose</option>
                     <option value= "Rahul">Rahul</option>
                     <option value= "Ramesh">Ramesh</option>
                    </select>
                </article>    
                <article>
                    <p>product purchased</p>
                    <input type="text" required value={this.state.product} onChange={this.setProduct}/>
                </article>
                <p>Price</p>
                    <input type="number" required value={this.state.price} onChange={this.setPrice}/>
                <article>
                <p>Date</p>
                    <input type="date" required value={this.state.setDate} onChange={this.loggedDate}/>
                </article>
                <button type="button" className="form-button" onClick={this.props.onclose}>
Close            
             </button>
                <button className="form-button">Submit</section>
                
                </form>
            </section>
            </>
        )
        return element;

    }
}
export default ExpenseTracker