import { useRef, useState } from "react";
import DialogModal from "./DialogModal";

export default function TimerChallenge({title,targetTime}){
   const timer = useRef();
   const dialog = useRef();
   const[timeRemaining,setTimeRemaining] = useState(targetTime*1000);

   const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
   if(timeRemaining<=0){
    clearInterval(timer.current);
    dialog.current.showModal();
   }

   function handleReset(){
    setTimeRemaining(targetTime * 1000);
   }
    function handleStart(){
       timer.current = setInterval(() => {
        setTimeRemaining((preRemainingTime) => (preRemainingTime - 10));
       },10)
    }
    function handleStop(){
        clearInterval(timer.current);
        dialog.current.showModal();
    }
    return ( 
    <>
      <DialogModal  targetTime= {targetTime} ref = {dialog} remainingTime = {timeRemaining} onReset = {handleReset}/>
        <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second {targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timeIsActive ?handleStop : handleStart}>
                {timeIsActive ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timeIsActive ? 'active' : undefined}>
            {timeIsActive ? 'Time is Running' : 'Time is InActive' }
        </p>

    </section>
    </> );
}