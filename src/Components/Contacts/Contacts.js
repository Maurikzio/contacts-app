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
        }
        // () => this.handleAdvancedSearch(this.state.search)
        )
    )
    
    render() {
        const query = this.state.contacts.filter(contact => Object.values(contact).find(value => value.includes(this.state.search)));
        return(
            <div className='container'>
                <h2>Contacts</h2>
                <div className='searchBar'>
                    <p>&#9906;</p>
                    <input value={this.state.search} onChange={this.handleSearchChange} placeholder="Search"/>
                </div>
                <ul className='contactList'>
                {query.map(contact => (
                        <Contact key={contact.firstName} {...contact}/>
                    ))}
                </ul>
            </div>
        )
    }
}

 {/* <ul className='contactList'>{[...this.state.advanced].map(item => (
                    <Contact key={item.firstName} data={item}/>
                ))} */}