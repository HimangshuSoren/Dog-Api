// import { useEffect, useRef, useState, useTransition } from 'react'
// import Loading from "./assets/progress.gif"

// function Dog() {
//     const btnClass = "relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-400  text-white transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110 rounded-full px-5 py-3 font-bold text-2xl cursor-pointer"
//     const btnClassDisabled = "relative overflow-hidden bg-gradient-to-r from-gray-400 to-gray-300  text-white transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110 rounded-full px-5 py-3 font-bold text-2xl cursor-pointer"
//     const [dogIMage, setImage] = useState()
//     const btnRef = useRef()
//     const imgRef = useRef()
//     const [load, setLoad] = useState()
    
//     useEffect(() => {
//         callDog()
//     }, [])
    
//     function callDog() {
//         setLoad(true)
//         btnRef.current.className = btnClassDisabled
//         btnRef.current.firstChild.innerText = "Wait a Minute..."
//         imgRef.current.src = Loading
//         setTimeout(async () => {
//             let image = await fetch("https://dog.ceo/api/breeds/image/random")
//             let resp = await image.json()
//             setImage(resp.message)
//             btnRef.current.className = btnClass
//             btnRef.current.firstChild.innerText = "Next Dog"
//             imgRef.current.src = dogIMage
//             setLoad(false)
//         }, 5000)

//     }

//     return (
//         <>
//             <div className='min-h-screen max-h-screen min-w-full  relative'>
//                 <div className="w-100 h-150 shadow-[0px_5px_15px_rgba(0,0,0,0.25)] rounded-2xl transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute flex  flex-col items-center justify-between p-5 "  >
//                     <div className="w-90 h-110" >
//                         <img ref={imgRef} src={dogIMage} alt="Dog Image" className="w-90 h-110 object-contain" />
//                     </div>
//                     <button ref={btnRef} disabled={load} className={btnClass} onClick={callDog} ><em>Next Dog</em></button>

//                 </div>
//             </div>
            
 
 
//         </>
//     )
// }

// export default Dog
