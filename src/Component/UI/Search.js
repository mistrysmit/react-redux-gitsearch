import React, { Component } from 'react';
/* class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serachvalue: 'papa',
            searchData: []
        }
    }

    updateSearch = e => {
        this.setState({
            serachvalue: e.target.value
        })
    }

    getDataset = () => {
        const apiUrl = `https://api.github.com/search/${this.props.userorrepo}?q=${this.state.serachvalue}`
         fetch(apiUrl)
            .then(result => result.json())
            .then(result => result.items)
            .then(items =>{
                this.setState({ searchData: items })

                this.props.SetMySearchData(items)

                console.log(items);
            } 
        );
        

    }

    componentDidMount() {
        this.getDataset();
    }

    render() {
        return (
                <div className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" value={this.state.serachvalue} onChange={this.updateSearch} placeholder="Search" />
                    <button className="btn btn-secondary my-2 my-sm-0" onClick={() => this.getDataset()} >Search</button>
                </div>
        )
    }
}
 */

const Search = ({ serachval = 'papa', SetMySearchData = f => f, onSearchChange=f=>f }) => {

    let _serachvalue ;

    /* getDataset = () => {
        const apiUrl = `https://api.github.com/search/${props.userorrepo}?q=${state.serachvalue}`
        fetch(apiUrl)
            .then(result => result.json())
            .then(result => result.items)
            .then(items => {
                this.setState({ searchData: items })

                this.props.SetMySearchData(items)

                console.log(items);
            }
            );


    } */


    return (
        <div className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" ref={input => _serachvalue = input}  onChange={() => onSearchChange(_serachvalue.value)}  placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" onClick={() => SetMySearchData(_serachvalue.value)} >Search</button>
        </div>
    )
}

export default Search;
