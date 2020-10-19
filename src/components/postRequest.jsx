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
        // Simple POST request with a JSON body using fetch
        /*
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(url);
        const data = await response.json();     
        console.log("Response -> ", data)
        this.setState({ items: data })
        
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                })
            })
        */
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
                <div className="card-body">
                    <select    class="left form-control col-md-4"
                     onChange={this.handleChange}>
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

