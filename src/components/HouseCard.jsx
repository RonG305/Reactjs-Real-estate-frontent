
import { AiFillStar, AiOutlineHeart} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
import { FaShower, FaBed, FaTape, FaHeart } from 'react-icons/fa'
import { useState } from 'react'


const HouseCard = (props) => {
    const {image, rating} = props.house
    const [likes, setLikes] = useState(false)
    const [likeCount, setLikeCount] = useState(0)

    const handleClick = () => {
        if (likes) {
            setLikeCount(likeCount + 1)
        }
        setLikes(!likes)
     
      
    }


    const iconColor = 'fill-gray-700'
    const detailsStyles = ' font-light grid grid-cols-2 '
    const paragraphStyle = 'flex gap-3'
    return (  
            <div>
                <img src={image} alt="" className=' rounded-xl hover:blur-sm hover:scale-110 gap-4' />
                <h3 className="my-3 text-2xl font-bold text-gray-600 ">ksh 4.5 Million</h3>
                <p className='font-bold'>Kilimani</p>
                    <div className={detailsStyles}>
                        <p className={paragraphStyle}><HiLocationMarker size={25} className={iconColor}  />KIlimani Loudge NYC</p>
                        <p className={paragraphStyle}><FaTape size={25} className={iconColor}  />234 sqr feet</p>
                        <p className={paragraphStyle}><FaShower size={25} className={iconColor}  />2 Bathrooms</p>
                        <p className={paragraphStyle}><FaBed size={25} className={iconColor} /> 4 Bedrooms</p>
                        <p className='flex gap-3'><AiFillStar className=' fill-yellow-400' size={25} />{rating} (1.2 Reviews)</p>

                        <p onClick={handleClick} className='cursor-pointer '>
                        {likes ? (<FaHeart className=' fill-red-600' />) : <AiOutlineHeart /> }
                        </p>
                           
                    </div>
            </div>
    )
}


export default HouseCard