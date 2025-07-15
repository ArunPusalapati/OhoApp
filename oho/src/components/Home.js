import SignIn from "./SignIn";


const Home=()=>{
    return (
        <div  className="flex ">
            
          <div className="justify-content">
         <SignIn/>
          </div>
               
          <div className="absolute bg-black opacity-60 z-20 w-full h-full ">
 
          </div>
          
              <img 
              className="absolute w-40  z-30"
              src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"
              />
              <img 
              className="absolute w-full h-full z-0"
              src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/US-en-20250630-TRIFECTA-perspective_4b4aacfd-9451-48c8-9767-5609064be0a3_large.jpg"/>
              
              
        </div>
    );
}
export default Home;