
import { forwardRef } from "react"
const DialogModal = forwardRef(function DialogModal({targetTime,remainingTime,onReset},ref) {

  const remTimeTrue = remainingTime <=0;
  const remTime = (remainingTime/ 1000).toFixed(2);
  
  return (
    <dialog className="result-modal" ref ={ref} open>
        {remTimeTrue && <h2>you lost</h2>}
             <p>total seconds {targetTime}</p>
        <p>you have {remTime}seconds left</p>
        <form method="dialog" onSubmit={onReset}>
            <button>close</button>
        </form>
    </dialog>
  )
});

export default DialogModal;
