import logo from '../Images/logo.png'
import background from '../Images/backgroundImage.jpg'
import { NavLink, Outlet } from "react-router-dom"
import { IoMdArrowDropdown } from "react-icons/io";
import { ImUserCheck } from "react-icons/im";
import { useLocation } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//end point
import {API_END_POINT}  from '../Utils/Constants' 
console.log("endpoint" , API_END_POINT)
//import { ImMoveUp } from 'react-icons/im';
import { useSelector , useDispatch} from 'react-redux';
import { setUser } from '../redux/Slice/User.Slice';
import toast from 'react-hot-toast';

// import { CiCoins1 } from 'react-icons/ci';
function Header(){
    //redux
    const dispatch = useDispatch()
    const user = useSelector((state)=>state.userReducer)
    console.log("reducers" ,user)
    const userExist = user.user
    console.log("usernamr" , userExist)


const [url , setUrl] = useState(true)
const location = useLocation()
    const urlPath = (location.pathname)
  
const navigate = useNavigate()
const switchtologin = ()=>{
    navigate("/login")
}

useEffect(()=>{
    console.log(url)
    if(urlPath === "/"){
        setUrl(true)
    }
    else{
        setUrl(false)
    }
} , [url])

//logout function
const logoutHandler = async ()=>{
        try{
            const res = await axios.get(`${API_END_POINT}/logout`)
            console.log("logout" , res.data.status)
            if(res.data.status){
                toast.success(res.data.message)
                setUrl(true)
                navigate('/')
                dispatch(setUser(null))
              
            }

        }
        catch(err){
            console.log("logout Error" , err)
        }
}
    return(
        <>
       {/* Header */}
        {/* <div className=''> */}
        <div className='header bg-gradient-to-b w-full from-black px-12 py-4 flex justify-between items-center fixed top-0 z-10'>
            <NavLink to={'/'}>
            <img src={logo}  alt='netflixLogo' className='w-[200px]  cursor-pointer' onClick={()=>{
                setUrl(true)
            }}/>
            </NavLink>
          {
            userExist ?   <div className='flex justify-between items-center gap-5'>
           
            <h1 className='text-white px-4 py-2 bg-blue-800 font-bold gap-5 flex justify-between items-center  cursor-pointer capitalize'>
            <ImUserCheck size= "25px" className='text-white'/>
                {user?.user?.fullName
                }
                 <IoMdArrowDropdown size= "25px" className='text-white'/>
                </h1>
               
            <div className='flex gap-5'>
        
                <button className='text-white px-4 py-2 bg-red-800 font-bold gap-5  cursor-pointer' onClick={logoutHandler}>LogOut</button>
                <button className='text-white px-4 py-2 bg-red-800 font-bold gap-5  cursor-pointer'>Search Movie</button>
            </div>
        </div> :
        
        <div className='flex justify-between items-center gap-5'>
           
            <div className='flex gap-5'>
            <button className='text-white px-4 py-2 bg-red-800 font-bold gap-5  cursor-pointer ' onClick={()=>{
               switchtologin()
                setUrl(false)
            }}>Register or Login</button>
                
            </div>
        </div>

          }

       </div>
       <div>
        {
            url &&  <img src = {background} alt='NetflixBcakgroundImage' className='absolute h-screen w-full opacity-[1]'/>
        }
       
       
        <div className='absolute top-0 m-auto w-full h-screen  flex justify-center items-center '>
        <Outlet />
        </div>
       </div>

       { url &&
        <div className='w-full h-screen flex justify-center items-center'>
       <h1 className='text-white absolute font-extrabold text-8xl text-center'>Welcome to Netflix</h1>
       </div>
       }
       
        {/* </div> */}
        
        </>
    )
}
export default Header;