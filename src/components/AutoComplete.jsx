import React, { Component } from 'react'
import sneakApi from "../api/apiHandlerSneaks"
import "../styles/AutoComplete.css";


class AutoComplete extends Component {

    state= {
        value : "",
        sneakers: [],
       
    }

    handleChange = event => {

        const keyword = event.target.value;
        this.setState({
            value: keyword
        })

        this.performSearch(event.target.value);

      
    }

    handleSneakerClick = sneaker => {
        
        this.props.onSelect(sneaker);

        this.setState({
            value: sneaker.shoeName
        })
    }


    performSearch = (value) => {
        sneakApi.getProducts(value).then(data => {
            this.setState({
                sneakers: data.slice(0,10)
            })
        }).catch(error => {
            console.log(error)
        })

    }


    render() {
        return (
            <div className="autocomplete">
                <input placeholder="e.g.: Air Jordan 1 Union Blue Storm" onChange={this.handleChange} value={this.state.value} type="text" />
                        <ul>
                            {this.state.sneakers.map((sneaker) => {
                                return <li onClick={() => this.handleSneakerClick(sneaker)}>
                                    {sneaker.shoeName}</li>})}
                        </ul>
                    <span className="close">Cancel</span>
                    <div className="dialog">
                       
                    </div>
            </div>
        )
    }
}


export default AutoComplete;