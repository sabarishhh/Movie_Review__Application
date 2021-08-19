import React,{ Component} from 'react'
import axios from 'axios'
import './insert.css'


class Insert extends Component{
  constructor(){
      super()
      this.state ={
          title:'',
          description:'',
          genre:'',
          rating:''
      }
      this.changetitle=this.changetitle.bind(this)
      this.changedescription=this.changedescription.bind(this)
      this.changegenre=this.changegenre.bind(this)
      this.changerating=this.changerating.bind(this)
     

      this.onSubmit = this.onSubmit.bind(this)
  }
  changetitle(event){
    this.setState({
    title:event.target.value
    })
}
changedescription(event){
    this.setState({
    description:event.target.value
    })
}
changegenre(event){
    this.setState({
    genre:event.target.value
    })
}
changerating(event){
    this.setState({
    rating:event.target.value
    })
}


onSubmit(event){
    event.preventDefault()
    const registered ={
        title:this.state.title,
        description:this.state.description,
        genre:this.state.genre,
        rating:this.rating
    }

    axios.post('http://localhost:4000/app/Insert',registered)
    .then(response => console.log(response.data))
    
    this.setState({
        title:'',
        description:'',
        genre:'',
       rating:''
    })

  }
  render(){
    return (
    <div className="container">
        <div className="card">
        <form onSubmit={this.onSubmit}>
                <div className="box1">
                <input type="text" 
                placeholder="movie title"
                onChange={this.changetitle}
                value={this.state.title}
                className="form-control form-group"
                /><br></br>
                <input type="text"
                placeholder="movie description"
                onChange={this.changedescription}
                value={this.state.description}
                className="form-control form-group"/>
                <br></br>
                <input type="text"
                placeholder="genre"
                onChange={this.changegenre}
                value={this.state.genre}
                className="form-control form-group"/><br></br>
                <input type="text" 
                placeholder="Rating"
                onChange={this.changerating}
                value={this.state.rating}
                className="form-control form-group"
                /><br></br>
               
               </div>
                <input type='submit' className='btn btn-success' value='Submit'/>

            </form>
        </div>
        </div>
    );
            }
          }

export default Insert;