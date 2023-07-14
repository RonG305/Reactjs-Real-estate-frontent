
import HouseCard from "../components/HouseCard"
import SearchHouses from "../components/SearchHouses"
import { FaHome, FaChair, FaTree, FaWarehouse, FaUtensilSpoon } from "react-icons/fa"
import { AiFillHome } from "react-icons/ai"
import { houses } from "../assets/houses"
import { useEffect, useState } from "react"

const Houses = () => {
    const iconColors = 'fill-gray-700'
    const textStyles = 'text-gray-700 font-light'


    // const [houses, setHouses] = useState([])

   
    const fetchFromApi = async() => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/houses')
            const data = response.json()
            setHouses(houses)
            console.log(data)
        } catch (error) {
            console.log('Error occured while fetching the data')
      }
  }
    
    
    useEffect(() => {
        fetchFromApi()
    }, [])
        

    
    return (
        <div className=" mt-24 ">

            <div className=" flex items-center justify-center">
                <SearchHouses />
            </div>
                <div className=" mt-5 flex items-center justify-center overflow-x-auto">
                    <ul className="flex items-center gap-8 justify-center ">
                        <li className={textStyles}><FaHome size={30} className={iconColors} />Apartments</li>
                        <li className={textStyles}><AiFillHome size={30}  className={iconColors}  />Mansions</li>
                        <li className={textStyles}><FaChair size={30}  className={iconColors}  />Furniture</li>
                        <li className={textStyles}><FaTree size={30}  className={iconColors}  />Land</li>
                        <li className={textStyles}><FaUtensilSpoon size={30}  className={iconColors}  />Hotels</li>
                        <li className={textStyles}><FaWarehouse size={30}  className={iconColors}  />WareHouses</li>
                     
                    </ul>
            </div>
            <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 gap-5 my-8 mx-8 flex flex-wrap ">
                {houses.map((house, index) => 
                    
                    <HouseCard
                        key={index}
                        house={house}
                    />
                )}
            </div>
            
            
        </div>
    )
}

export default Houses