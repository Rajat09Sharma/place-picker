import React, { useEffect, useState } from 'react'

export default function ProgresBar({timer}) {
    const[progressValue,setProgressValue]=useState(timer);

    useEffect(()=>{
        const timer=setInterval(()=>{
            setProgressValue(prevs=>prevs-10);
        },10)
        return ()=>{
            clearInterval(timer);
        }
    },[])

  return (
    <progress value={progressValue} max={timer}  />
  )
}
