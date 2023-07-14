import { useState } from "react"

const SellForm = () => {
    const headerStyles = "font-bold py-4"
    const formStyles = "border rounded-md px-4 py-2 outline-none gap-5 mr-4 mb-3" 
    const submitStyles = "px-8 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-800 font-bold cursor-pointer"

    const initialState = {
        firstName: '',
        lastName: '',
        telephone: '',
        email: '',
        address1: '',
        address2: '',
        zipcode: '',
        location: '',
        bedrooms: '',
        bathrooms: '',
        measurement: '',
        yearBuild: '',
        garages: '',
        year_build: '',
        storeys: '',
        situationOfProperty: '',
        reasonOfSalesale: '',
        yearsOfOwnership: '',
        worthOfProprty: '',
        yourPrice: '',
        imageFile: '',




    }

    const [formData, setFormData] = useState(initialState)
    const { firstName, lastName, telephone, email, address1, address2, zipcode, location, bedrooms, bathrooms, measurement, yearBuild, garages, storeys, situationOfProperty, reasonOfSalesale, yearsOfOwnership, worthOfProprty, yourPrice, imageFile } = formData
    
    const handleOnChange = (e) => {
        const { name, value, type} = e.target

        if (type === 'file') {
            setFormData({...formData, name: e.target.files[0]})
        } else {
            setFormData({...formData, [name]: value})
        }
       
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
    return (
        <div className="w-full rounded-xl drop-shadow-2xl bg-slate-200 px-2 py-6 md:p-8">
            <h2 className=" font-bold uppercase text-center my-5 text-3xl">House Seller Form</h2>
            <form action="" onSubmit={handleSubmit}>
            <input
                className={formStyles}
                type="text"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={handleOnChange}
            />
            <input
                className={formStyles}
                type="text"
                placeholder="Last name"
                name="lastName"
                value={lastName}
                onChange={handleOnChange}
            />
            <input
                className={formStyles}
                type="telephone"
                placeholder="+254 ..."
                name="telephone"
                value={telephone}
                onChange={handleOnChange}
            />
            <input
                className={formStyles}
                type="email"
                placeholder="Email address"
                name="email"
                value={email}
                onChange={handleOnChange}
            />

            <h3 className={headerStyles}>Property information</h3>

            <input
                className={formStyles}
                type="text"
                placeholder="street Address 1"
                name="address1"
                value={address1}
                onChange={handleOnChange}
            />
            <input
                className={formStyles}
                type="text"
                placeholder=" street Address 2"
                name="address2"
                value={address2}
                onChange={handleOnChange}
            />
            <input
                className={formStyles}
                type="code"
                placeholder="Zip Code"
                name="zipcode"
                value={zipcode}
                onChange={handleOnChange}
            />
            <input
                className={formStyles}
                type="text"
                placeholder="Location of your asset"
                name="location"
                value={location}
                onChange={handleOnChange}
            />
            <input
                className={formStyles}
                type="number"
                placeholder="Bedrooms"
                name="bedrooms"
                value={bedrooms}
                onChange={handleOnChange}
            />
            <input
                className={formStyles}
                type="number"
                placeholder="Bathrooms"
                name="bathrooms"
                value={bathrooms}
                onChange={handleOnChange}
            />
            <input
                className={formStyles}
                type="number"
                placeholder=" sqr.footage in metres"
                name="measurement"
                value={measurement}
                onChange={handleOnChange}
            />
            <input
                className={formStyles}
                type="date"
                placeholder="Year build"
                name="yearBuild"
                value={yearBuild}
                onChange={handleOnChange}
            />
            <input
                className={formStyles}
                type="number"
                placeholder="How many storeys"
                name="storeys"
                value={storeys}
                onChange={handleOnChange}
            />
            <input
                className={formStyles}
                type="number"
                placeholder="Garages"
                name="garages"
                value={garages}
                onChange={handleOnChange}
            />
            
            <fieldset>
                <legend>current situation of the property</legend>
                <textarea
                    className={formStyles}
                    name=""
                    id=""
                    cols="22"
                    rows="10"
                    placeholder="Type here .."
                  
                    value={situationOfProperty}
                    onChange={handleOnChange}
                ></textarea>
            </fieldset>
           
            <input
                className={formStyles}
                type="number"
                placeholder="Years you owned this property"
                name="yearsOfOwnership"
                value={yearsOfOwnership}
                onChange={handleOnChange}
            />
            
            <fieldset>
                <legend>Why sell your property</legend>
                <textarea
                    className={formStyles}
                    name=""
                    id=""
                    cols="22"
                    rows="10"
                    placeholder="Type here.."
                    
                    value={reasonOfSalesale}
                    onChange={handleOnChange}
                ></textarea>
            </fieldset>
            


            <h3 className={headerStyles}>Pricing Information</h3>
            <fieldset>
                <legend>What is worth of your property</legend>
                <input
                    className={formStyles}
                    type="text"
                    name="worthOfProprty"
                    value={worthOfProprty}
                    onChange={handleOnChange}
                />
            </fieldset>

            <fieldset>
                <legend>How much do you ask for your property</legend>
                <input
                    className={formStyles}
                    type="number"
                    name="yourPrice"
                    value={yourPrice}
                    onChange={handleOnChange}
                />

            </fieldset>


            <fieldset>
                <legend>Upload your asset images</legend>
                <input
                    className={formStyles}
                    type="file"
                    name="imageFile"
                    value={imageFile}
                    onChange={handleOnChange}
                />
            </fieldset>
            <div className="text-center">
                <input
                    className={submitStyles}
                    type="submit"
                />
            </div>
            </form>
       
          
           

        </div>
    )
}

export default SellForm