import React, {useState} from 'react';

const Contact = () => {

  const [data, setData] = useState({
    name:"",
    phone:"",
    email:"",
    message:""
  });


  const InputEvent = (event) => {
    const {name, value} = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit= (e) =>{
    e.preventDefault();
    alert(`My name is ${data.name}. 
My mobile number is ${data.phone} and email is ${data.email}, 
Here is what i want to say ${data.message} `);

  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Me</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label  htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="exampleFormControlInput1" 
                  name="name"
                  value={data.name}
                  onChange={InputEvent}
                  placeholder="Enter your name" 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="examplehtmlFormControlInput1" className="form-label">Phone</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="exampleFormControlInput1" 
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Mobile Number" 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email Address</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="exampleFormControlInput1" 
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter your email id" 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea 
                className="form-control" 
                id="exampleFormControlTextarea1" 
                rows="3"
                name="message"
                value={data.message}
                onChange={InputEvent}>
                </textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
