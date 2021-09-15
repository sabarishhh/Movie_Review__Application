import React,{ Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import './index.css'
import logo from './pp.png'

class Login extends Component{
    constructor(){
        super()
        this.state ={
            email:'',
            password:''
        }
        this.changeemail=this.changeemail.bind(this)
        this.changepassword=this.changepassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
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
        const user ={
            email:this.state.email,
            password:this.state.password
        }

        axios.post('http://localhost:4000/app/login',user)
        .then(response => console.log(response.data))
        window.location="/wishlist"
        /*to clear the entered data */
        this.setState({
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
                                <div className="label"><p> LOGIN </p>
                                </div>
                            
                            <div className='box'>
                           


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
                            <input type='submit' className='btn btn-success' value='LOGIN'/>
                            <div className="label2">
                                <p>Create new account ? Signup</p>
                                </div>
                        </form>
                        
                    </div>
                </div>
                </body>
            </div>

        );
    }
}

export default Login;