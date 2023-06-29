import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import circle1 from './assets/images/circle1.png'
import circle2 from './assets/images/circle2.png'
const App = () => {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [formData, setformData] = useState({email:'', password:''})
  const [initialPosition, setinitialPosition] = useState({left:0, top:0 })
  const buttonRef = useRef(null);

  const bringButtonBackFn = () =>{
    if(formData.email !== '' && formData.password !== '') {
      setPosition({left:0, top:0 })
      return
    }
  }
  const mousePositionChangeFn = () => {
    if(formData.email !== '' && formData.password !== '') {
      return
    }
    const randX = Math.floor(Math.random() * (window.innerWidth / 4));
    const randY = Math.floor(Math.random() * (window.innerHeight - 500));
    setPosition({ left: randX, top: randY });
    // console.log('test')
  };

  const handleClick = () => {
    alert("clicked!");
  };
  useEffect(() => {
    const button = buttonRef.current;
    const buttonPosition = button.getBoundingClientRect();
    setinitialPosition({ left: buttonPosition.left, top: buttonPosition.top})
  }, []);

  return (
    <div className="parent">
      <div className="illustration">
        <img src={circle1} alt="circle1" className="circle1 aniamtionElement" />
        <img src={circle2} alt="circle2" className="circle2 aniamtionElement" />
      </div>
    <div className="form">
      <div className="emailInput">
        <label className="input-label">Email</label>
        <input value={formData.email} type="text" placeholder="Enter email" onInput={(e)=>{setformData({...formData,email:e.target.value}),bringButtonBackFn()}} />
      </div>
      <div className="passwordInput">
        <label className="input-label">Password</label>
        <input value={formData.password} type="password" placeholder="Enter password" onInput={(e)=>{setformData({...formData,password:e.target.value}),bringButtonBackFn()}} />
      </div>
      <button ref={buttonRef}
        style={{ left: `${position.left}px`, top: `${position.top}px` }}
        onMouseEnter={mousePositionChangeFn}
        onClick={handleClick}
      >
        Login
      </button>
    </div>
    </div>
  );
};

export default App;
