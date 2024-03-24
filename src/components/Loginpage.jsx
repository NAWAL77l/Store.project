import React  from 'react' 
import'./Loginpage/Loginpage.css' 
//import email_icon from'../assets/1-1email.png' 
//import password_icon from'../assets/1-1password.png' 
import logo_icon from'../assets/1-1logo.png' 
import back_icon from'../assets/back.png' 
const Loginpage = () => { 
  return ( 
    <div className='container'> 
         <div className="full-height-image"> 
        <img src={back_icon} alt=""  /> 
      </div> 
     <div className="header"> 
     <div> 
            <img src={logo_icon} alt="Description" /> 
            <span>UI Unicorn</span> 
        </div> 
         
     </div> 
     <div className="text">Nice to see you again</div>
        <div className=" inputs"> 
        <div className="text1">login</div>
  <div className=" input"> 

<input type="email"placeholder="Email or phone number"/> 
 </div> 
  <div className="text2">password</div>  
                <div className=" input"> 
                        
                        <input type="password"placeholder=" Enter Password"/> 
                    </div> 
                    </div> 
                        <div className="forgot-password"> forgat 
password?  </div> 
                        <div className="submit-container"> 
                        < div className="submit"> Sing in </div> 
                    </div> 
                    <div className="account"> Dont have an account? 
<span> sing up now</span> </div> 
            </div> 
         
 
  ); 
} 
 
export default Loginpage; 