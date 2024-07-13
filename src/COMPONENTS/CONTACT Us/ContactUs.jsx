const ContactUs = () => {
  return (
    <div className="md:flex justify-between">
        {/* main div */}



      {/* left side */}
      <div className="w-full flex md:w-1/2 pt-10">
        {/* profile */}

        <div className="avatar flex flex-col w-52 justify-center items-center">
          <div className="w-24 rounded-full">
            {/* FOR IMG */}
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            {/* customize img h w  */}
          </div>
          {/*  BTN */}
          <button className="p-5 ">bigener</button>
        </div>

        {/* FOR TEXT */}
        <div className="gap-5 p-5">
          <h1 className="md:text-4xl text-xl">daniel gregoe laure</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            saepe voluptas ipsa ratione distinctio, animi illo quo culpa quis
            numquam.{" "}
          </p>
        </div>
      </div>
      {/* right side */}
      <div className="w-full flex justify-between items-center md:items-end flex-col pr-10 md:w-1/2 pt-10  ">
        <div className="">
          <button className="btn p-5 text-right">follow</button>
        </div>
        {/* user like view div */}

        <div className="flex gap-5 py-5">
          {/* add svg icon */}
          <p>user</p>
          <p>view</p>
          <p>like</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
