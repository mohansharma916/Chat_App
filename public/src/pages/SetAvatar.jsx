import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';
import {ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import loader from "../assets/loader.gif"
import {setAvatarRoute} from "../utils/APIRoutes";
import {Buffer} from 'buffer';

function SetAvatar() {
    const api="https://api.multiavatar.com/434566";
    const navigate=useNavigate();
    const [avatars,setAvatar]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const [selectedAvatar,setSelectedAvatar]=useState(undefined);
    const toastOptions={
        position:"bottom-right",
        autoClose:8000,
        pauseOnHover:true,
        draggable:true,
        theme:"dark",
     }

     const setProfilePicture=  ()=>{
        async function profile (){
            if(selectedAvatar===undefined){
                toast.error("Please Select an Avatar",toastOptions)
            }else {
                const user=await JSON.parse(localStorage.getItem("chat-app-user"));
                const {data}=await axios.post(`${setAvatarRoute}`)

                }
            }
        }
     
     useEffect( () => {
        async function fetchAPI(){
        const data = [];
        for (let i = 0; i < 4; i++) {

          const image = await axios.get(
            `${api}/${Math.round(Math.random() * 1000)}`
          );
          const buffer = new Buffer(image.data);
          data.push(buffer.toString("base64"));
        }
        setAvatar(data);
        setIsLoading(false);}
        fetchAPI()
      }, []);

    return (
    <>
    {
        isLoading?<Container><div class="circleBx">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div></Container>:
    
        <Container>
            <div className="title-container">
                <h1>
                    Pick an Avatar as Your Profile Pic
                </h1>
            </div>

            <div className="avatars">
                {
                    avatars.map((avatar,index)=>{
                        return(
                            <div className={`avatar ${selectedAvatar=== index ?"selected":""}`}>
                                <img src={`data:image/svg+xml;base64,${avatar}`} alt="avatar" onClick={()=>setSelectedAvatar(index)}/>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={setProfilePicture} className="submit-btn">
                Set as Profile Pic

            </button>
            <ToastContainer />
        </Container>
}
    </>
  )
}


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background-color: #131324;
  height: 100vh;
  width: 100vw;

  .loader {
    max-inline-size: 100%;
  }

  .title-container {
    h1 {
      color: white;
    }
  }
  .avatars {
    display: flex;
    gap: 2rem;

    .avatar {
      border: 0.4rem solid transparent;
      padding: 0.4rem;
      border-radius: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s ease-in-out;
      img {
        height: 6rem;
        transition: 0.5s ease-in-out;
      }
    }
    .selected {
      border: 0.4rem solid #4e0eff;
    }
  }
  .submit-btn {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  .circleBx {
    position: relative;
    display: flex;
    justify-content: center;
  }
  
  .circle {
    position: relative;
    width: 150px;
    height: 150px;
    border-top: 2px solid #45f2f5;
    border-left: 2px solid #45f2f5;
    border-radius: 50%;
    animation: screenLoader 3s linear infinite;
    margin: -30px;
  }
  
  @keyframes screenLoader {
    to {
      transform: rotate(360deg);
    }
    from {
      transform: rotate(0deg);
    }
  }
  
  .circle:nth-child(2) {
    border-top: 2px solid #d743f4;
    border-left: 2px solid #d743f4;
    animation: screenLoader2 3s linear infinite;
    animation-delay: -1s;
  }
  
  @keyframes screenLoader2 {
    to {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }
  
  .circle:nth-child(3) {
    position: absolute;
    top: -67px;
    border-top: 2px solid #43f463;
    border-left: 2px solid #43f463;
    animation: screenLoader3 3s linear infinite;
    animation-delay: -3s;
  }
  
  @keyframes screenLoader3 {
    to {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }
  
  .circle:nth-child(4) {
    position: absolute;
    top: 67px;
    border-top: 2px solid #f5273d;
    border-left: 2px solid #f5273d;
    animation: screenLoader4 3s linear infinite;
    animation-delay: -4s;
  }
  
  @keyframes screenLoader4 {
    to {
      transform: rotate(360deg);
    }
    from {
      transform: rotate(0deg);
    }
  }
  
`;

export default SetAvatar;