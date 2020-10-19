import React, { Component } from 'react';

class SearchBank extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
         
        };

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

            Client ID: 2223DBD4CA3076ADC7F03032CB1FF17E
            Secret Key: 4bcf4ecdc766ce8fcc0d60e1e08931a2d394c5cb432423d1067ef3e95499da63
        */
        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("client-id", "2223DBD4CA3076ADC7F03032CB1FF17E");
            myHeaders.append("signature", "4bcf4ecdc766ce8fcc0d60e1e08931a2d394c5cb432423d1067ef3e95499da63");

            var requestOptions = {
              method: 'GET',
              headers: myHeaders,
              redirect: 'follow'
            };

            fetch("https://sandbox.api.routefusion.co/v1/users/me", requestOptions)
              .then(response => response.text())
              .then(result => console.log("resulta -> ", result))
              .catch(error => console.log('error', error)); 
     
    }

   

    render() {
        const { items } = this.state;
        
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Bank request</h5>
                <div className="card-body">
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                {item.bank}
                            </li>    
                         ))};
                    </ul>
                    <br></br>
                        
                </div>
            </div>
        );
    }
}
export default SearchBank;

