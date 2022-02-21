import React from 'react';

function Contactus(props) {
  
  
  let  onFormSubmit=()=>{
    
  }
  return (
    <div className="container mt-5 text-center" style={{backgroundColor:"#FAE8E0"}}>
            
            <div className='row mb-5'>
            <div className='bg-light col-sm-3 text-center'>
              <img style={{width:"10rem"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aUqEHuJfem_FUb56uRtUYLmllFa8JjEx5g&usqp=CAU'></img>
              <h6 className='fw-bold'>Plain Case Covers</h6>
              <h6>Extra 10% Off</h6>
              <h6>For All Top Models</h6>
            </div>
            <div className='bg-light col-sm-3 text-center'>
              <img style={{width:"10rem"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdr7HyROR1ApNKk6P4cWUsFgt6ZYLWDcybDg&usqp=CAU'></img>
              <h6 className='fw-bold'>Curtains, Pillows & more</h6>
              <h6>From $99+Extra 10% Off</h6>
              <h6>Brst Deal Price..!!</h6>
            </div>
            <div className='bg-light col-sm-3 text-center'>
              <img style={{width:"10rem"}} src='https://www.fastrack.in/wps/wcm/connect/fastrack/22bff265-eef3-4ef0-8de7-869250c54946/watches_CLPMobile-Allnighter.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGS700Q8OKN8NF0004-22bff265-eef3-4ef0-8de7-869250c54946-me1mX8R'></img>
              <h6 className='fw-bold'>Fastrack Watches</h6>
              <h6> Upto 75% +Extra 10% Off</h6>
              <h6>Best Offer For Pongal</h6>
            </div>
            <div className='bg-light col-sm-3 text-center'>
              <img style={{width:"8.7rem"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiQhK_zeGLikDx5EvDE9G6KkHpTdlWJV_srw&usqp=CAU'></img>
              <h6 className='fw-bold '>Plain Case Covers</h6>
              <h6>Extra 10% Off</h6>
              <h6>For All Top Models</h6>
            </div>
            </div>
          <h3 className="fw-bold mb-3">CONTACT US!</h3>
          
          <div className="col-12 col-sm-10 col-md-6 mx-auto w-50">
            <form  onSubmit={onFormSubmit} style={{backgroundColor:"#B6E2D3"}}>
              <div className="mb-4">
              <input type="text" name="name" id="name" placeholder="Your Name" className="form-control" />
              </div>
              <div className="mb-4">
              <input type="text" name="name" id="name" placeholder="Mobile number" className="form-control" />
              </div>
              <div className="mb-5">
              <textarea type="feedback" name="feedback" id="feedback"  placeholder="Please enter your comments " className="form-control rows-5" />
              </div>
              <button className="" type="submit" className="btn">Submit</button>
            </form>
          </div>
          <div className="bg-dark text-white text-start"  >
          <footer className=" bg-dark text-light d-flex justify-content-evenly pt-1 mt-3" style={{marginLeft:"-5rem", marginRight:"-5rem", marginTop:"5rem", height:"5.1rem"}}>
            
              <div>
                    <p className="p-2 ms-4"><i className="far fa-envelope ms-2 me-2"></i>Email:mounikakoniki@gmail</p>
                    </div>
                    <div>
                    <p className=" p-2 "><i className="far fa-address-book me-2"></i>Addresses: www.com website</p> 
                    </div>
                    <div>
                    <p className=" p-2 "><i className="far fa-address-book me-2"></i>Contactus: Flipkart Internet Private Limited,
    
    Buildings Alyssa, Begonia &<br />
    
    Clove Embassy Tech Village,<br />
    
    Outer Ring Road, Devarabeesanahalli Village,<br />
    
    Bengaluru, 560103,
    
    Karnataka, India
    
    CIN : U51109KA2012PTC066107
    
    Telephone: 1800 202 9898</p> 
                    </div>  
    
                    
      </footer>
      
          </div>
        </div>
        
  );
}

export default Contactus;