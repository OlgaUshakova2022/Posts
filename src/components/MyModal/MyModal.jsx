import React from 'react';
import cl from './MyModal.module.css'

function MyModal({children, visibel, setVisibel}) {
    const rootClasses = [cl.myModal];
    if(visibel){
       rootClasses.push(cl.active); 
    }
  return (
    <div className={rootClasses.join(' ')} onClick={()=> setVisibel(false)}>
        <div className={cl.myModalContent} onClick={(e)=>e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default MyModal;