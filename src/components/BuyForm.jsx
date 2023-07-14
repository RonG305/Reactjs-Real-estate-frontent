const BuyForm = () => {
    const headerStyles = "font-bold uppercase text-center my-5 text-3xl"
    const formStyles = "border rounded-md px-4 py-2 outline-none gap-5 mr-4 mb-3" 
    return (
        <div className="w-full rounded-xl drop-shadow-2xl bg-slate-200 p-8">
            <h2 className={headerStyles}>House Buyer Form</h2>
            <input className={ formStyles}type="text" placeholder="First Name"/>
            <input className={formStyles} type="text" placeholder="Last name" />
            <input className={formStyles} type="number" placeholder="+254 ..." />
            <input className={formStyles} type="email" placeholder="Email address" />

            <div className="text-center">
                <input className="px-8 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-800 font-bold cursor-pointer" type="submit" />
            </div>
          
           

        </div>
    )
}

export default BuyForm