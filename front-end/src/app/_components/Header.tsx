import { BucketLogo } from "../svg/BucketLogo";
import { PineconeLogo } from "../svg/PineconeLogo";

export const Header = () => {
  return (
    <div className="container flex justify-between max-w-[1200px] h-[57px] px-[24px] py-[8px]">
      <div className="flex gap-6 items-center justify-center">
        <div className="w-[41px] h-[41px] flex justify-center items-center">
          <PineconeLogo />
        </div>
        <div className="flex items-start gap-8">
          <button className="font-bold text-sm">НҮҮР</button>
          <button className="font-bold text-sm">ХООЛНЫ ЦЭС</button>
          <button className="font-bold text-sm">ХҮРГЭЛТИЙН БҮС</button>
        </div>
      </div>

      <button className="flex gap-2 items-center justify-center">
        <BucketLogo />
        <p className="font-bold text-sm">Сагс</p>
      </button>
    </div>
  );
};
