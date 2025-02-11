import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector(store => store.user );
  const [showDropdown, setShowDropdown] = useState(false);
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth , (user) => {
        if (user) {
           const {uid, email , displayName , photoURL} = user;  
            dispatch(addUser({uid:uid , email:email , displayName: displayName , photoURL:photoURL}));
            navigate("/browse")
        } else {
          // User is signed out
          dispatch(removeUser())
          navigate("/")
        }
      }); 
    // unsubscribe when component unmounts.
    return () => unsubscribe();
  },[])
  return (
    <div className="absolute w-screen px-10 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
        <img className="w-44"
         src={LOGO}
         alt="logo" 
         />

      {user && (<div className="flex p-2 relative">
        <img 
          className="w-12 h-12 rounded-full hover:border-2 hover:border-white hover:shadow-lg hover:shadow-white transition-all duration-200 cursor-pointer" 
          src={USER_AVATAR} 
          alt="usericon"
          onClick={() => setShowDropdown(!showDropdown)}
        />
        {showDropdown && (
          <div className="absolute right-0 top-16 bg-black/90 border border-gray-700 rounded-lg shadow-lg p-4 w-48">
            <p className="text-white mb-2 border-b border-gray-700 pb-2">
              {user.email.split('@')[0]}
            </p>
            <button 
              onClick={handleSignOut} 
              className="text-white hover:text-red-500 transition-all duration-200"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>)}
    </div>
  )
}

export default Header