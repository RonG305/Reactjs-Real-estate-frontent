import { FaSearch } from 'react-icons/fa'

const SearchHouses = () => {
    return (
        <div className=" w-2/3 outline-none border rounded-lg py-2 px-2 flex items-center justify-between">
            <input
                type="text"
                placeholder="Search houses ..."
                className=" w-full h-full outline-none"
            />
            <FaSearch className=' fill-gray-600' />
        </div>
    )
}

export default SearchHouses