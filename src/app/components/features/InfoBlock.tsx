"use client";

import React, {memo} from "react";
import {Bold, Text} from "../shared";
import {useMobile} from "../hooks";

function InfoBlock({
                       title = "Title",
                       children = null
                   }: {
    title?: string;
    children?: React.ReactNode;
}) {

    const mobile = useMobile();

    return (
        <div className="max-w-[1600px] justify-center">
            <div className={`${mobile ? 'mt-[100px]' : 'mt-[130px]'} flex justify-center flex-col items-center`}>
                {mobile ? <Bold size={36}>{title}</Bold> : <Text size={82}>{title}</Text>}
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );

}

export default memo(InfoBlock);
