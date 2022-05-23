import React, { Component } from "react";

class Employee extends Component {

constructor(props) {

super(props);

this.state = { name: "", job: "" };

this.handleChange = this.handleChange.bind(this);

this.handleSubmit = this.handleSubmit.bind(this);

}

handleSubmit(event) {

const { name, job } = this.state;

event.preventDefault();

alert(`
-----Your Details-----\n
Name : ${name}
job :${job}
`);

}

handleChange(event) {

this.setState({

[event.target.name]: event.target.value

});

}
render() {

    return (
    
    <form onSubmit={this.handleSubmit}>
    
    <div>
    
    <label htmlFor="name">Name</label>
    
    <input
    
    name="name"
    
    placeholder="Name"
    
    value={this.state.name}
    
    onChange={this.handleChange}
    
    />
    
    </div>
    
    
    
    <div>
    
    <label htmlFor="job">job</label>
    
    <input
    
    name="job"
    
    placeholder="job"
    
    value={this.state.job}
    
    onChange={this.handleChange}
    
    />
    
    </div>
    
    
    
    <div>
    
    <button>Submit</button>
    
    </div>
    
    </form>
    
    );
    
    }
    
    }
    
    export default Employee;