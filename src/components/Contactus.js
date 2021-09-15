import React from 'react'
import emailjs from 'emailjs-com';

function Contact(){
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_ufc6yhq', 'template_i1tr3nh', e.target, 'user_NbHF7usTzysdYXdl6urQt')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    return(
        <div>
        <body>
                       
        <div className='container'>
        
            <div className='card'>
            <form onSubmit={sendEmail}> <div className="labels"><p>CONTACT US</p>
                                </div>
                   <div className='box'>
                   <br/> 
                   <input type='text'
                    placeholder='enter name'
                    name="namen"
                    className='form-control form-group'
                    /><br></br>


                    <input type='text'
                    placeholder='enter email'
                    name="email"
                    className='form-control form-group'
                    /><br></br>


                    <textarea name="query"
                    placeholder='enter the query'
                  
                    className='form-control form-group'
                    rows="5"/><br></br>
                    </div>
                    <input type='submit' className='btn btn-success' value='Submit'/>
                   
                </form>
                
            </div>
        </div>
        </body>
    </div>
    )
}

export default Contact;