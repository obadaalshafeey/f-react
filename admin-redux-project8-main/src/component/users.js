import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../store/actions/usersAction'
import './user.css'

class users extends Component {
    constructor(props) {
        super(props);
        this.state =
            { deleteButton: true };
        this.handleButton = this.handleButton.bind(this)
    }

    componentDidMount() {
        this.props.getUsers()
    }

    handleButton(id){
        
        document.getElementById(id).style.display="none";   
    }
    render() {
        const { users } = this.props.users
        console.log(this.props.users)
        return (
            <>
                <div className='container'>
                    <div className="row">
                            {users.map(u =>
                                <span  >
                                    <div class="panel panel-red userlist">
                                        <div class="panel-heading">
                                            <a href="" class="availablity btn btn-circle btn-danger"><i class="fa fa-close"></i></a> </div>
                                            <div class="panel-body text-center">
                                            <div class="userprofile">
                                                <div class="userpic"> <img src="https://www.blexar.com/avatar.png" alt="" class="userpicimg" /> </div>
                                                <h3 class="username" style={{textAlign:'center'}}>{u.name}</h3>
                                            </div>
                                            <strong style={{padding:'10px'}}>Information</strong><br />
                                            <p style={{padding:'10px'}}>{u.bio}<br />
                                                {u.occupation}
                                                <br />
                                                <a href="mailto:info@maxartkiller.in">{u.email}</a></p>
                                            <div class="socials tex-center"> <a href="" class="btn btn-circle btn-primary "><i class="fa fa-facebook"></i></a> <a href="" class="btn btn-circle btn-danger "><i class="fa fa-google-plus"></i></a> <a href="" class="btn btn-circle btn-info "><i class="fa fa-twitter"></i></a> <a href="" class="btn btn-circle btn-warning "><i class="fa fa-envelope"></i></a> </div>
                                        </div>
                                        <div class="panel-footer">
                                            <button onClick={() => this.handleButton(u.id)} className="btn btn">Delete</button>

                                        </div>
                                    </div>
                                 </span>
                            )}
                        </div>
                    </div>
            </>
        )
    }
}
const mapStateToProps = (state) => ({ users: state.users })

export default connect(mapStateToProps, { getUsers })(users)