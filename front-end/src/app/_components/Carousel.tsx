export const Carousel = () => {
  return (
    <div className="w-full h-[788px] bg-[#18BA51] text-[#FFFFFF] bg-[url('/BackgroundShapes.png')] flex justify-center gap-[10%] items-center">
      <div className="flex flex-col items-center justify-center border border-black w-[384px] h-[225px] gap-[23px]">
        <div className="">
          <h1 className="text-[55px] font-semibold leading-[49px] w-13 text-white">
            Pinecone Food Delivery
          </h1>
        </div>
        <div className="border-b border-white opacity-50 w-full mt-8 mb-8"></div>
        <div className="text-white text-[22px] font-bold leading-[26px]">
          <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className="w-[588px] h-[438px] relative">
        <img
          src="./CarouselFood1.png"
          className="absolute w-[443px] h-[438px]"
        />
        <img
          src="./CarouselFood2.png"
          className="absolute right-0 bottom-[12px] w-[313px] h-[313px]"
        />
      </div>
    </div>
  );
};
