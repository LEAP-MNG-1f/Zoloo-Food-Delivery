import { BucketLogo } from "../svg/BucketLogo";
import { PineconeLogo } from "../svg/PineconeLogo";

export const Header = () => {
  return (
    <div className="container flex justify-between w-full h-[57px] px-[24px] py-[8px]">
      <div className="flex gap-6 items-center justify-center">
        <div className="w-[41px] h-[41px] flex justify-center items-center">
          <PineconeLogo />
        </div>
        <div className="flex items-start gap-2">
          <div>НҮҮР</div>
          <div>ХООЛНЫ ЦЭС</div>
          <div>ХҮРГЭЛТИЙН БҮС</div>
        </div>
      </div>

      <div className="flex gap-2 items-center justify-center">
        <BucketLogo />
        <p>Сагс</p>
      </div>
    </div>
  );
};
