import React from 'react';
function Footer(){
    return(
        <div>
        <footer className='footer mt-auto py-3 bg-dark text-white'>
        <div className='container'>
        <div className='social'>
        
        <a className="mx-2 " href="https://www.instagram.com/music_ar_singhal/">
        <i className="fa fa-instagram" style={{ "fontSize":"48px", "margin":"20px" }}></i></a>
        <a className="mx-2 " href="www.linkedin.com/in/aryan-singhal-345115146">
        <i className="fa fa-linkedin " style={{ "fontSize":"48px"}}></i></a>
        <a className="mx-2 " href="https://github.com/ar-singhal">
        <i className="fa fa-github " style={{ "fontSize":"48px" , "margin":"20px"}}></i></a>
        
        <br/>
        &copy;Copyright{new Date().getFullYear()} . All Rights Reserved.
        <br/>
        ❤ Portfolio 

        
        
        </div>
       
      

        </div>
      </footer>
         
        </div>
           
    );
}

export default Footer;