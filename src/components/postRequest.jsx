import React, { Component } from 'react';

class PostRequest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            currency: "USD",
        };

        this.handleChange = this.handleChange.bind(this);
    }

   async componentDidMount() {
        
       fetch('https://api.routefusion.co/currencies')
          .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                })

            })    
        
    }

    handleChange(e) {
        console.log("Fruit Selected!!", e.target.value);
         //this.setState = ({ currency: e.target.value });
        //let currency = e.target.value;
        this.setState({currency: e.target.value});
        
    }  

    render() {
        const { items } = this.state;
        
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple POST Request</h5>
                <div className="card-body" class="col-md-4 ">
                    <select    class="left form-control col-md-12"
                     onChange={this.handleChange}>
                     <option>-Select Country-</option>
                        {items.map(item => (
                            <option key={item.id} value={item.currencyCode}>
                                {item.country}
                            </option>    
                         ))};
                    </select>
                    <br></br>
                        <span>Currency : { this.state.currency } </span>
                </div>
            </div>
        );
    }
}
export default PostRequest;

