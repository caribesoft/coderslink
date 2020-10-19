import React, { Component } from 'react';


class Main extends Component {
	constructor(props) {
    super(props);
    
    this.state = {
    	visible: true,
    	items: [],
        currency: "USD",
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchBank = this.searchBank.bind(this);

  }

  	 componentDidMount() {
       fetch('https://api.routefusion.co/currencies')
          .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                })

            })    
    }

    handleChange(e) {
        this.setState({currency: e.target.value});
    }  

    searchBank(e) {
    	 if (e.which == 9){
       			alert("Here will connect to Bank API");
    	 }
       
       /// here will conenct to the API to ex tract bak accoun info
    }  

	render(){
		 const { items } = this.state;
		return <div class="container mainComponent">
		<div class="row">
		<div class="col-md-4">
		<span class="titbnk">Banking Information</span>
		<p>We need to collect this information to send payments
		to you on your employer's behalf </p>
		<p>Once you submit your bank information, we'll verify your information before we start sending any payments there.</p>
		<span class="arow">&#x2794; When will I get paid ? </span>
		<p>Due to your bank country and currency, payments from your employer will take X business
		days to complete. You will receive funds X days after your payday.</p>
		</div>
		<div class="col-md-4">
		<span class="tit">Bank Country</span>
		<select class="left form-control" onChange={this.handleChange}>
	        {items.map(item => (
	           <option key={item.id} value={item.currencyCode}>
					{item.country}
	            </option>    
	         ))};
	          </select>
		<div class="method">
		<span class="tit">Select method</span>
		<br></br>
			<button class="btn btn-info" onClick={()=>{this.setState({visible: true})}}>SWIFT</button>
			<button class="btn btn-gray" onClick={()=>{this.setState({visible: false})}}>IBAN</button>
		</div>
		 <div class="swift">
	              {
	                  this.state.visible? 
	                    <div class="row">
	                    <h5>SWIFT</h5>
	                    <input onKeyDown={this.searchBank} class="form-control" name="account-type"></input>
	     			    <span class="tit">Account number</span>
	      			    <input class="form-control" name="account-number"></input>
	      			    </div>
	                   :<div class="abba">              
			            <div><h5>IBAN</h5>
			            <input  onKeyDown={this.searchBank} class="form-control" name="iban"></input>
			            </div>
			              
	      			  </div>
	              }
		 </div>
		 
		</div>
		<div class="col-md-4">
		<span  class="tit" >Currency</span>
		<select name="currency" class="form-control">
		<option>{ this.state.currency }</option>
		</select>
		
		{
	     this.state.visible?<div class="router">
	   	<span class="tit">Router number</span>
	    <input class="form-control" name="router"></input>
	    
	    <div class="tit conf">Confirm account number</div>
	    <input class="form-control" name="confirm-account"></input>
	    </div>: null
	    }
	    </div>
		</div></div>;
		
		}
}

export default Main;