import React from "react";
import ListLevels from "@/Components/ListLevels";

const ChooseLevel = (props: any) => {
    return (
        <>
            <ListLevels
                {...props}
                method="POST"
            />
        </>
    );
};

export default ChooseLevel;
