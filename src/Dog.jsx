import { useEffect, useRef, useState, useTransition } from 'react'
import Loading from "./assets/progress.gif"

function Dog() {
    const buttonStyles = "relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-400 text-white transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110 rounded-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 font-bold text-lg sm:text-xl md:text-2xl cursor-pointer"
    const disabledButtonStyles = "relative overflow-hidden bg-gradient-to-r from-gray-400 to-gray-300 text-white transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110 rounded-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 font-bold text-lg sm:text-xl md:text-2xl cursor-pointer"
    const [dogImageUrl, setDogImageUrl] = useState()
    const buttonRef = useRef()
    const imageRef = useRef()
    const [isLoading, setIsLoading] = useState()
    
    useEffect(() => {
        fetchRandomDog()
    }, [])
    
    function fetchRandomDog() {
        setIsLoading(true)
        buttonRef.current.className = disabledButtonStyles
        buttonRef.current.firstChild.innerText = "Wait a Minute..."
        imageRef.current.src = Loading
        setTimeout(async () => {
            let response = await fetch("https://dog.ceo/api/breeds/image/random")
            let data = await response.json()
            setDogImageUrl(data.message)
            buttonRef.current.className = buttonStyles
            buttonRef.current.firstChild.innerText = "Next Dog"
            imageRef.current.src = dogImageUrl
            setIsLoading(false)
        }, 5000)
    }

    return (
        <>
            <div className='min-h-screen max-h-screen min-w-full relative'>
                <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] h-[70vh] shadow-[0px_5px_15px_rgba(0,0,0,0.25)] rounded-2xl transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute flex flex-col items-center justify-between p-3 sm:p-4 md:p-5">
                    <div className="w-full h-[calc(100%-4rem)] mb-4">
                        <img 
                            ref={imageRef} 
                            src={dogImageUrl} 
                            alt="Dog Image" 
                            className="w-full h-full object-contain rounded-lg" 
                        />
                    </div>
                    <button 
                        ref={buttonRef} 
                        disabled={isLoading} 
                        className={buttonStyles} 
                        onClick={fetchRandomDog}
                    >
                        <em>Next Dog</em>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Dog
