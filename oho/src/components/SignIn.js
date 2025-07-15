import { Form } from "react-router";
const SignIn=()=>{
    return (
       <div className="absolute z-40 bg-black ml-155 mt-45 min-h-100 min-w-100 rounded opacity-70">
        <h1 className="text-4xl text-red-500 font-bold m-4 ml-6">Sign In</h1>
        <Form className="flex flex-col items-center">
            
            <input type="text"
            placeholder="Email or Phone Number"
            className="block border-1 text-white border-white mx-4 my-3 rounded-sm min-w-80 min-h-10 placeholder-white p-2 hover:border-2 border-outline-white" />
            <input type="password"
            placeholder="Password"
             className=" block border-1  border-white mx-4 my-3 rounded-sm min-w-80 min-h-10 placeholder-white p-2 hover:border-2 border-outline-white" />
            <button className="bg-red-500 cursor-pointer text-white min-h-10 rounded-sm min-w-80 m-3 ">Sign In</button>
            <p className="text-white m-4">New to Netflix? <a className="cursor-pointer">Sign up now.</a></p>
        </Form>
            
        </div>
    );
}

export default SignIn;