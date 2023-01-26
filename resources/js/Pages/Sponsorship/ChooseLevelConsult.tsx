import React from "react";
import ListLevels from "@/Components/ListLevels";

const ChooseLevelConsult = (props: any) => {
    return (
        <>
            <ListLevels
                {...props}
                grid='grid-cols-1 sm:grid-cols-3'
            />
        </>
    );
};

export default ChooseLevelConsult;
