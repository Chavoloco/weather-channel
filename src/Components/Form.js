import React from 'react';
import './Form.css'

const Form = (props) => {
    return ( 
        <div className="container">
            <div>{props.error ? error() : null}</div>
            <div>{props.error2 ? error2() : null}</div>
            <form onSubmit={props.loadWeather}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input type="text" className="form-control" name="city" autoComplete="off" placeholder="city"></input>
                    </div>
                    <div className="col-md-3">
                        {/* <input type="text" className="form-control" name="country" autoComplete="off" placeholder="country"></input> */}
                        <select placeholder="country" className="form-control" name="country">
                            <option value={null}>Select a Country</option>
                            <option value="ar">Argentina</option>
                            <option value="br">Brazil</option>
                            <option value="co">Colombia</option>
                            <option value="cl">Chile</option>
                            <option value="ve">Venezuela</option>
                            <option value="us">United States</option>
                            <option value="gb">United Kingdom</option>
                            <option value="nz">New Zeland</option>
                            <option value="in">India</option>
                            <option value="au">Australia</option>
                            <option value="cn">China</option>
                            <option value="jp">Japan</option>
                        </select>
                    </div>
                    <div className="col-md-3 mt-md-0 text-md-left py-2">
                        <button className="btn btn-warning ">Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
     );
}

function error() {
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Please enter City and Country
        </div>
    )
}

function error2() {
    return(
        <div className="alert alert-danger mx-5" role="alert">
            That City does not exist in that Country
        </div>
    )
}

export default Form;