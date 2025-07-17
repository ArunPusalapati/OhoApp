import { useRef,useState } from "react";
import { Form } from "react-router";
const SignIn=()=>{
    const email=useRef(null);
    const password=useRef(null);
    const [emailErrorMessage,setEmailErrorMessage]=useState("");
    const [passwordErrorMessage,setPasswordErrorMessage]=useState("");
    const [isSignUpToggle,setIsSignUpToggle]=useState(false);
   const Validate = (e, p) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    e
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(p);

  if (!isEmailValid) setEmailErrorMessage("Email ID is not valid");
  if (!isPasswordValid) setPasswordErrorMessage("Password is not valid");

  return null;
};
    return (
       <div className="absolute z-40 bg-black ml-155 mt-45 min-h-100 min-w-100 rounded opacity-70">
        {
          !isSignUpToggle ?<h1 className="text-4xl text-red-500 font-bold m-4 ml-6">Sign In</h1>:<h1 className="text-4xl text-red-500 font-bold m-4 ml-6">Sign Up</h1>
         }
        <Form className="flex flex-col items-center"
        onSubmit={(e)=>e.preventDefault()}
        >
            {isSignUpToggle &&  <input type="text"
            ref={email}
            placeholder="Name"
            className="block border-1 text-white border-white mx-4 my-3 rounded-sm min-w-80 min-h-10 placeholder-white p-3 hover:border-2 border-outline-white" />}
            <input type="text"
            ref={email}
            placeholder="Email or Phone Number"
            className="block border-1 text-white border-white mx-4 my-3 rounded-sm min-w-80 min-h-10 placeholder-white p-3 hover:border-2 border-outline-white" />
            <p className="text-red-500 font-semibold">{emailErrorMessage}</p>
            
            <input type="password"
            ref={password}
            placeholder="Password"
             className=" block border-1 text-white border-white mx-4 my-3 rounded-sm min-w-80 min-h-10 placeholder-white p-3 hover:border-2 border-outline-white" />
            <p className="text-red-500 font-semibold">{passwordErrorMessage}</p>
            
            <button className="bg-red-500 cursor-pointer text-white min-h-10 rounded-sm min-w-80 m-3 "
            onClick={()=>{Validate(email.current.value,password.current.value) 
                console.log(email.current.value+" "+password.current.value)
            }}
            >{!isSignUpToggle?"Sign In":"Sing UP"}</button>
            {!isSignUpToggle?
            <p className="text-white m-4">New to Netflix? <button className="cursor-pointer"
            onClick={()=>setIsSignUpToggle(true)}
            >Sign up now.</button></p> :<p className="text-white m-4">New to Netflix? <button className="cursor-pointer"
            onClick={()=>setIsSignUpToggle(false)}
            >Sign in now.</button></p>}
        </Form>
            
        </div>
    );
}

export default SignIn;