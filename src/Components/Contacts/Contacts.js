import React, { Component } from 'react';
import Contact from '../Contact/Contact'

import './contacts.css'

export default class Contacts extends Component{
    constructor(props){
        super(props);
        this.state = {
            contacts: props.data,
            search: ''
        }
    }
    handleSearchChange = (event) => (
        this.setState({
            search: event.target.value,
        },
        // () => this.handleAdvancedSearch(this.state.search)
        )
    )

    advancedSearch = () => {
        const query = this.state.contacts.filter(contact => 
            contact.firstName.toLowerCase().includes(this.state.search.toLowerCase()) 
            || contact.lastName.toLowerCase().includes(this.state.search.toLowerCase()) 
            || contact.phone.includes(this.state.search.toLowerCase()))

        return query.map(result => (
            <Contact key={result.firstName} {...result}/>
        ))
    }
    
    render = () => (
        <div className='container'>
            <h2>Contacts</h2>
            <div className='searchBar'>
                <p>&#9906;</p>
                <input value={this.state.search} onChange={this.handleSearchChange} placeholder="Search"/>
            </div>
            <ul className='contactList'>{this.advancedSearch()}</ul>
        </div>
    )
}

 {/* <ul className='contactList'>{[...this.state.advanced].map(item => (
                    <Contact key={item.firstName} data={item}/>
                ))} */}