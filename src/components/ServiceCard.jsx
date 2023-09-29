const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 hover:bg-coral-red hover:text-white cursor-pointer transition-all duration-500 ease-in-out">
      <div className="w-11 h-11 bg-coral-red flex justify-center items-center rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold ">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray hover:text-slate-300">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
