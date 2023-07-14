import { FaPlay } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Hero = () => {
    const containerStyles = "hero h-[90vh] py-6 hero-background mt-20 "
    const header = 'Discover the best place you would like to live'
    const headerStyles = "md:text-5xl text-3xl font-extrabold mb-8"
    const description = 'We have the best high quality real estate assets you can buy or sell. Register with us and get your dream home or sell your asset'
    const startButton = " bg-blue-700 rounded-lg px-4 py-2 font-bold text-white hover:bg-blue-500"
    const videoButton = " bg-slate-500 flex items-center gap-2 px-5 py-2 rounded-lg hover:bg-slate-700 hover:text-white"
    const videoLink = "https://www.youtube.com/watch?v=f-V8AQUFqaM"
   



    return (
        <div className={containerStyles} >
            <div className = 'w-[80%] m-auto md:flex items-center justify-center text-center h-full leading-8'>
                <div className='md:w-1/2'>
                    <h1 className={headerStyles}>{ header}</h1>
                    <p>{ description}</p>
                    <div className='flex gap-4 mt-5 text-center items-center justify-center '>
                        <button className={startButton}><Link to='signup/'>Get started</Link></button>
                        <button className={videoButton}><FaPlay/><Link to={videoLink}>Watch</Link> </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Hero