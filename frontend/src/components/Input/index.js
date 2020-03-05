import React from "react";

function Input(props) {
    const {field, ...rest} = props;
    console.log(props);
    return (<>
            <label htmlFor=""> Login</label>
            <input {...field} {...rest}/>
        </>

    )

}

export default Input;