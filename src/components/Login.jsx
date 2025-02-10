import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import Header from "./Header"
import { useRef, useState } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

function login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg , setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  const toggleSignInForm=() => {
    setIsSignInForm(!isSignInForm);
  }

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null); 

  const handleButtonClick = () => {
    // Validate the form data

    const message = checkValidData(email.current.value , password.current.value);
    setErrorMsg(message);
    if(message) return ;

    //Sign in or Sign UP
    if(!isSignInForm){
      // Sign Up
      createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
          photoURL: USER_AVATAR,
        })
        .then(() => {
          const {uid, email , displayName , photoURL} = auth.currentUser;  
          dispatch(addUser({uid:uid , email:email , displayName: displayName , photoURL: photoURL}));
        })
        .catch((error) => {
          // An error occurred
          // ...
        });
        
        console.log(user)

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode + "-" +  errorMessage)
      });
    }else{
      // Sign In
      signInWithEmailAndPassword(auth, email.current.value , password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode + "-" +  errorMessage)
      });
    

    }

  }



  return (
    <div>
        <Header />
        <div className="absolute">
        <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_medium.jpg" 
          alt="background" />
        </div>

        <form 
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-50"
        >
          <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && <input 
            ref={name}
            type="text" 
            placeholder="Full Name" 
            className="p-4 my-4 w-full bg-gray-700"
          /> }

          <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
          <input ref={password} type="password" placeholder="Password" name="" id="" className="p-4 my-4 w-full bg-gray-700"/>
          <p className="text-red-500 font-bold text-lg py-2">{errorMsg}</p>
          <button onClick={handleButtonClick} className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm? "Sign In" : "Sign Up"}</button>
          <p className="py-4" onClick={toggleSignInForm}> 
            {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In now"}
          </p>
        </form>
       

    </div>
  )
}
 
export default login