export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-full md:min-h-[700px] lg:min-h-[600px] bg-black-200 mx-auto">
        <div className="max-w-[70rem] mx-auto flex justify-center items-center sm:text-center">
          <div className="text-white-100 flex flex-col gap-6 items-start absolute lg:static z-inset text-center lg:text-start md:max-w-[380px] max-w-[328px] lg:max-w-full justify-center">
            <p className="w-full lg:w-fit text-center subheader uppercase opacity-[50%]">
              New Prouct
            </p>
            <span className="headerThree md:headerOne uppercase md:bg-red-900 bg-blue-900">
              XX99 Mark II Headphones
            </span>
            <p className="bodytext max-w-[360px] opacity-[75%]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <div className="lg:w-fit w-full">
              <button className="subTitle uppercase bg-orange-100 px-6 py-3 cursor-pointer">
                See Product
              </button>
            </div>
          </div>
          <img
            src="./HomeImages/Bitmap.png"
            alt="Bitmap image"
            className="md:w-fit w-full"
          />
        </div>
      </div>
    </div>
  );
}
