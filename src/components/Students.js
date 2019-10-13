import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Students extends React.Component {

    state = {
        allStudents: []
    }

    componentDidMount(){

        axios.get("https://reqres.in/api/users?page=2")
        .then(response => {
            // console.log(response)
            this.setState({allStudents: response.data.data})
        })

    }

    render(){

        let showStudents = this.state.allStudents.length ? (
            this.state.allStudents.map(eachStudent => {
                return(
                    <div class="col-3 text-center mt-5">
                        <div key={eachStudent.id}>
                            <img src={eachStudent.avatar} />
                            <Link to={'/students/' + eachStudent.id} >
                                <h2 class="mt-3">{eachStudent.first_name} {eachStudent.last_name}</h2>
                            </Link>
                            <p>{eachStudent.email}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div>Please come back after some time</div>
        )
        
        return(
            <React.Fragment>
                <div class="container">
                    <div class="row">
                        
                            {showStudents}
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Students;