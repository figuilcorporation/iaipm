import React from "react";
import ListLevels from "@/Components/ListLevels";

const ChooseLevelConsult = (props: any) => {
    return (
        <>
            <ListLevels
                {...props}
                grid='grid-cols-2 sm:grid-cols-4'
            />
        </>
    );
};

export default ChooseLevelConsult;
