"use client";

import { useIsMobile } from "@/hooks";
import { PrimaryButton } from "@/shared";

function HardathonsScreen() {

    const isMobile = useIsMobile();

    return (
        <div className="!pt-[30px] mb-[100px]">
            <div className="subtitle">Хардатон 2024</div>
            <div className="flex gap-[15px] justify-center items-center max-2xl:!my-[24px]">
                {!isMobile && (
                    <img className="max-w-[40vw] scale-[1.2] hidden 2xl:block" src="/mock/speaker.png" />
                )}
                <div className="flex flex-col gap-[30px] 2xl:!mt-[-60px]">
                    <div className="flex flex-col h-[470px] max-sm:w-[90vw] max-sm:h-[50vh] bg-linear-to-b from-transparent to-[var(--primary-color)] rounded-[60px] border-[3px] border-[var(--primary-color)] !p-[30px]">
                        <div className="text-[1.6rem] md:text-[2.8rem]">Example of long long long description</div>
                        <div className="flex flex-col items-end justify-end !mt-auto">
                            <div className="text-[1.4rem] md:text-[3rem] font-bold">— главный организатор хардатона,</div>
                            <div className="text-[1.4rem] md:text-[3rem] font-bold">Валерий Бизиков</div>
                        </div>
                    </div>
                    <div className="flex max-sm:flex-col justify-between gap-[30px]">
                        <PrimaryButton>Подробнее</PrimaryButton>
                        <PrimaryButton>Подать заявку</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default HardathonsScreen;
