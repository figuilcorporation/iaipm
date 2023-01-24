import React, { useEffect, useState } from "react";
import Select from "react-select";
import ReactHtmlParser from "react-html-parser";

export default function UseSelect(props: any) {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        let opts = props.withFirstName
            ? props.selectData?.map((item: any) => ({
                  value: item.id,
                  label: item.name + " " + item.first_name,
              }))
            : props.selectData?.map((item: any) => ({
                  value: item.id,
                  label: item.name || item.label,
              }));
        // opts = props.allowSelectAll
        //     ? [{ label: "Tout sélectionner", value: "ALL_OPTIONS" }, ...opts]
        //     : opts;
        setOptions(opts);
    }, [props.selectData]);

    useEffect(() => {
        if(props.defaultValue && typeof(props.defaultValue?.some) === 'function' ){
            const even = (element: any) => element.value === 'ALL_OPTIONS';
            // props.defaultValue?.some(even) && props.defaultValue = options
        }
    }, [props.defaultValue])

    return (
        <div className={`z-100`}>
            <label htmlFor={props.name} className="label mb-1">
                {ReactHtmlParser(props.label)}{" "}
                {props.required && <span className="text-red-500">*</span>}
            </label>

            <Select
                className="react-select-input"
                options={options}
                {...props}
            />
            {Object.keys(props.errors).some((key: any) => key === props.name) && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {props.errors[props.name]}
                </p>
            )}
        </div>
    );
}
