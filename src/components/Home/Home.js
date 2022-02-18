//import React from 'react'
import './Home.css'


function Home(){
    return(
        <div>
             <nav className="navbar navbar-expand navbar-bark bg-white text-back ">
                 <div className='container fluid'>
                 <h1 >Amazon</h1>
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     
                 <h3 className="p-2">login</h3>
                    <h3>singup</h3>
                 </div>
                 </div>
             </nav>

             <h3 className='fw-bold mb-3'>New products</h3>

             <div className='row text-center'>
                 <div className='bg-light col-sm-3'>
                     <img style={{width:"10rem"}} src='https://m.media-amazon.com/images/I/51IrSQmuLgS._AC_SR360,240_QL70_.jpg'></img>
                     <h6 className='fw-bold'>$2000</h6>
                     <h6>Double door refrigerator</h6>
                 </div>
             </div>
             <div className='row text-center'>
                 <div className='bg-light col-md-3'>
                     <img style={{width:"10rem"}} src='https://m.media-amazon.com/images/I/61cgN3yhH-L._AC_UY327_FMwebp_QL65_.jpg'></img>
                     <h6 className='fw-bold'>$1000</h6>
                     <h6> Single door refrigerator</h6>
                 </div>
             </div>
           
        </div>
    );
}
export default Home