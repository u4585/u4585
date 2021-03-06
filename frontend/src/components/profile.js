import React from 'react'
import {withRouter}from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import api from '../api/api';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userLogeado: props.user,
            username: "",
            email:"",
            password:"",
            isAdmin: ""    //  EDITAR -- ACA DEBERIA APARECER LOS VALORES DEL PERFIL ACTUAL
        }
    }

    componentDidMount(){
        //GET PROFILE STATE FROM API Log
        console.log("")
      }

    handleUser = (event) =>{
        this.setState({username:event.target.value.trim()})
    } 
    handleEmail = (event) =>{
        this.setState({email:event.target.value.trim()})
    } 
    handlePassword = (event) =>{
        this.setState({password:event.target.value.trim()})
    } 
    handleCheckBox = (event) =>{
        this.setState({isAdmin:event.target.value.trim()})
    }
    
    ChangePasswordUser=()=>{
        const body={username:this.state.username,password:this.state.password}
        api.changePasswordUser(body)
       .then(data=>{this.props.history.push("/")})
       .catch(error=>console.log(error))
    }

    ChangeData=()=>{
        const body={username:this.state.username,password:this.state.password,mail:this.state.email,userLogeado:this.state.userLogeado.username}
        console.log(this.state.userLogeado.username)
        api.changeData(body)
            .then(data=>{this.props.history.push("/")})
            .catch(error=>console.log(error))
    }
    
    render(){
        return(
            <div>
                <h1 className="titul">Panel Profile - MovieMoon</h1>
            <div className="centrarForm" style={{display: "flex", flexDirection:"row"}}>
{/*                <div style={{width:"15vw", paddingRight:"1vw", alignContent:"center",alignItems:"center", display:"flex", flexDirection:"column", justifyContent:"center"}}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Button  variant="primary">Edit Profile</Button>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Button  variant="primary">Edit Favorites</Button>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Button  variant="primary">Edit Historial</Button>
                        </Form.Group>
                    </Form>
                </div>*/}
                <div className="FormEditProfile" style={{flexDirection:"column", width:"50vw"}}>
                    <Form>
                        <Form.Group>
                            <Form.Label>User</Form.Label>
                            <Form.Control type="text" placeholder="Enter your user name" value={this.state.username} onChange={this.handleUser}/>

                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" value={this.state.email} onChange={this.handleEmail}/>

                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password" value={this.state.password} onChange={this.handlePassword}/>

{/*                            <Form.Label>isAdm?</Form.Label>
                            <Form.Check type="checkbox" placeholder="Enter your password" value={this.state.isAdmin} onChange={this.handleCheckBox}/>*/}
                        </Form.Group>
                    </Form>
                    {/* onClick={this.signIn} */}
                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around", alignItems:"center"}}>
                        {/*<Button  variant="primary" onClick={this.ChangePasswordUser}>ChangePasswordUser</Button>*/}
                        <Button  variant="primary" onClick={this.ChangeData}>Actualizar Datos</Button>
                        <Button  variant="primary" onClick={()=>this.props.history.push("/")}>Home</Button>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default withRouter(Profile)