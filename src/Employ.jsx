import React from "react";
function Employ(props)
{
    let data1 = props.data;
    return(
        <div className="container">
            <div className="child">
                <h1>Emp_name: {data1[0].emp_name}</h1>
                <h1>Emp_Id: {data1[0].emp_id}</h1>
                <h1>Emp_design: {data1[0].emp_desi}</h1>
            </div>

            <div className="child">
                <h1>Emp_name: {data1[1].emp_name}</h1>
                <h1>Emp_Id: {data1[1].emp_id}</h1>
                <h1>Emp_design: {data1[1].emp_desi}</h1>
            </div>

            <div className="child">
                <h1>Emp_name: {data1[2].emp_name}</h1>
                <h1>Emp_Id: {data1[2].emp_id}</h1>
                <h1>Emp_design: {data1[2].emp_desi}</h1>
            </div>

        </div>
    )
}
export default Employ;