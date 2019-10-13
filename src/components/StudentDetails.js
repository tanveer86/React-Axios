import React from 'react';
import axios from 'axios';

class StudentDetails extends React.Component{

    state = {
        student: null
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        axios.get("https://reqres.in/api/users/" + id)
        .then(response => {
            this.setState({student: response.data.data})
        })
    }

    render(){
        
        let ShowStudent = this.state.student ? (
            <div>
                <img src={this.state.student.avatar}/>
                <h1 class="mt-4">Full Name: {this.state.student.first_name} {this.state.student.last_name}</h1>
                <p>Email Id: {this.state.student.email}</p>
            </div>
        ) : (
            <p>Sorry you clicked wrong id</p>
        )
        return(
            <React.Fragment>
                <div class="container">
                    <div class="row">
                        <div class="col-12 mt-5 text-center">
                            {ShowStudent}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default StudentDetails;