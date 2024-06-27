
const SaledCards = ({item}) => {
    const {name,image,recipe,price}=item;
    return (
        <div className="md:w-[49%] md:h-[150px] my-5 m-auto gap-5 flex  bg-white p-2 rounded-lg shadow-lg justify-center items-center">
            <img src={image} alt="" className="h-20 w-20 rounded-[50%] object-cover" />
            <div className="w-1/2 m-auto  ">
                <h3 className="md:text-2xl font-bold ">{name} .......</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-[#D99904] flex font-bold"> {price} $</p>
            
        </div>
    );
};

export default SaledCards;