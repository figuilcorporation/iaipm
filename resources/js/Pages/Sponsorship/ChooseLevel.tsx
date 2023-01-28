import React from "react";
import ListLevels from "@/Components/ListLevels";

const ChooseLevel = (props: any) => {
    return (
        <>
            <ListLevels
                {...props}
                grid='grid-cols-2 sm:grid-cols-4'
                method="POST"
            />
        </>
    );
};

export default ChooseLevel;
