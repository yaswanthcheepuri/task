import React from 'react'



function Signup() {

 



    return (

      <div className="row">

        <p className="display-1 text-center signup">Signup</p>

         <div className="col-12 col-sm-10 col-md-6 mx-auto" style={{backgroundColor:"#E7F2F8", color:"#5F093D"}}>

          <form className="form-style1 p-4" >

             <div className="mb-3 fw-bold">

              <label htmlFor="name"> Name</label>

              <input type='text'  id="name" className="form-control"  />

             

          </div>



          <div className="mb-3 fw-bold">

              <label htmlFor="username"> Username</label>

              <input type='text' id="username" className="form-control" />

             

          </div>

         

          <div className="mb-3 fw-bold">

              <label htmlFor="password"> Password</label>

              <input type='password' id="password" className="form-control" />

             

          </div>



          <div className="mb-3 fw-bold">

              <label htmlFor="email">Email</label>

              <input type='email' id="email" className="form-control" />

             

          </div>

          <div className="mb-3 fw-bold">

              <label htmlFor="dob"> DOB</label>

              <input type='dob' id="dob" className="form-control" />

             

          </div>

         

          <button type="submit" className="btn d-block mx-auto">Register <i className="fas fa-sign-in-alt ms-2"></i></button>

         {/* signup link */}

        <p className="text-center fw-bold mt-3" style={{color:"#FB4570"}}>

            User already register Click btn

            <span type="button"

            className="badge"

            >

              Login <i className="fas fa-sign-in-alt me-2"></i>

            </span>

        </p>

      </form>

      </div>

      </div>

    );

  }  

export default Signup