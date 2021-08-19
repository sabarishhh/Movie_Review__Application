import React,{ Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import './index.css'
import logo from './pp.png'

class Signup extends Component{
    constructor(){
        super()
        this.state ={
            fullName:'',
            username:'',
            email:'',
            password:''
        }
        this.changeFullName=this.changeFullName.bind(this)
        this.changeusername=this.changeusername.bind(this)
        this.changeemail=this.changeemail.bind(this)
        this.changepassword=this.changepassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    changeFullName(event){
        this.setState({
        fullName:event.target.value
        })
    }
    changeusername(event){
        this.setState({
        username:event.target.value
        })
    }
    changeemail(event){
        this.setState({
        email:event.target.value
        })
    }
    changepassword(event){
        this.setState({
        password:event.target.value
        })
    }
   
    onSubmit(event){
        event.preventDefault()
        const registered ={
            fullName:this.state.fullName,
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }

        axios.post('http://localhost:4000/app/signup',registered)
        .then(response => console.log(response.data))
        
        this.setState({
            fullName:'',
            username:'',
            email:'',
            password:''
        })
    }
    render(){
       
        return(
            <div>
                <body>
                               
                <div className='container'>
                
                    <div className='card'>
                        <form onSubmit={this.onSubmit}>
                        <div className='img'>
                                <img src={logo} alt="popcorn" width="45%"></img></div>
                                <div className="label"><p>SIGN UP</p>
                                </div>
                            
                            <div className='box'>
                            <input type='text'
                            placeholder='enter fullname'
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className='form-control form-group'
                            /><br></br>


                            <input type='text'
                            placeholder='enter username'
                            onChange={this.changeusername}
                            value={this.state.username}
                            className='form-control form-group '
                            /><br></br>


                            <input type='text'
                            placeholder='enter email'
                            onChange={this.changeemail}
                            value={this.state.email}
                            className='form-control form-group'
                            /><br></br>


                            <input type='password'
                            placeholder='enter password'
                            onChange={this.changepassword}
                            value={this.state.password}
                            className='form-control form-group'
                            /><br></br>
                            </div>
                            <input type='submit' className='btn btn-success' value='Submit'/>
                            <div className="label2">
                                <p>Already have account ? login</p>
                                </div>
                        </form>
                        
                    </div>
                </div>
                </body>
            </div>

        );
    }
}

export default Signup;