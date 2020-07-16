import React from 'react';

class Users extends React.Component{

    constructor(props){
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state ={
            users: []
        }
    }
    
    // Get API
    componentDidMount(){
        fetch("https://randomuser.me/api")
        .then(res => res.json())
        .then(
            json => {
                this.setState({
                    users: json.results
                })
            }
        )
    }

    render(){
        return(
            <div>
                    {this.state.users.map(item =>
                        <tr>
                            <td><img src={item.picture.medium} /></td>
                            <td>{item.login.username}</td>
                            <td>{item.login.password} </td>
                            <td>{item.gender} </td>
                        </tr>)}
            </div>
        )
    }
}

export default Users;