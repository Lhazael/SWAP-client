import React, { Component } from 'react'
import sneakApi from "../api/apiHandlerSneaks"


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


    // componentDidUpdate(prevProps,prevState){


    //     if(prevState.value !== this.state.value){
    //         sneakApi.getProducts(this.state.value).then(data => {
    //             console.log(data)
    //             this.setState({
    //                 sneakers: data.slice(0,10)
    //             })
    //         }).catch(error => {
    //             console.log(error)
    //         })
    //     }

    // }



    render() {
        return (
            <div>
                <input placeholder="e.g.: Air Jordan 1 Union Blue Storm" onChange={this.handleChange} value={this.state.value} type="text" />
                <ul>
                        {this.state.sneakers.map((sneaker) => {
                            return <li onClick={() => this.handleSneakerClick(sneaker)}>
                                {sneaker.shoeName}
                            </li>
                        })}
                    
                </ul>
            </div>
        )
    }
}


export default AutoComplete;