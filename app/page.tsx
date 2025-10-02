export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-full md:min-h-[700px] min-h-[600px] bg-black-200 mx-auto">
        <div className="max-w-[70rem] mx-auto flex justify-center items-center">
          <div className="text-white-100 flex flex-col gap-6 items-start">
            <p className="subheader uppercase opacity-[50%]">New Prouct</p>
            <span className="headerOne uppercase">XX99 Mark II Headphones</span>
            <p className="bodytext max-w-[360px] opacity-[75%]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="subTitle uppercase bg-orange-100 px-6 py-3 cursor-pointer">
              See Product
            </button>
          </div>
          <img
            src="./HomeImages/Bitmap.png"
            alt="Bitmap image"
            className="w-fit"
          />
        </div>
      </div>
    </div>
  );
}
