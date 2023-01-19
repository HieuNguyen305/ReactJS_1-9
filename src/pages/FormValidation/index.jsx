import React, { Component } from 'react';


export default class FormValidation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                manv: "",
                tennv: "",
                email: "",
            },
            errors: {
                manv: "",
                tennv: "",
                email: "",
            },
            manvValid: false,
            tennvValid: false,
            emailValid: false,
            formValid: false,
        }
    }

    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            values: { ...this.state.values, [name]: value }
        }, () => {
            console.log(this.state);
        })
    }

    handleError = (event) => {
        const { name, value } = event.target;
        // console.log(name, value);
        // console.log("handleError");
        let mess = value.trim() === "" ? `(*) Vui lòng nhập ${name} ` : "";
        // console.log(mes);

        let { manvValid, tennvValid, emailValid } = this.state;
        switch (name) {
            case "manv":
                manvValid = mess === "" ? true : false;
                if (value && value.length < 4) {
                    mess = "Vui lòng nhập từ 4 kí tự trở lên"
                    manvValid = false;
                }
                break;
            case "tennv":
                tennvValid = mess === "" ? true : false;
                break;
            case "email":
                emailValid = mess === "" ? true : false;
                if (value && !value.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")) {
                    mess = "Vui lòng nhập email đúng định dạng";
                    manvValid = false;
                }
                    break;
            default:
                break;
        }

        this.setState({
            errors: { ...this.state.errors, [name]: mess },
            manvValid,
            tennvValid,
            emailValid,
            formValid: manvValid && tennvValid && emailValid,
        }, () => {
            console.log(this.state);
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="title">*FormValidation</h3>
                <form>
                    <div className="form-group">
                        <label>Mã nhân viên</label>
                        <input type="text" className="form-control" name='manv' onChange={this.handleOnChange} onBlur={this.handleError} />
                        {/* Cách 1 */}
                        {/* {this.state.errors.manv ? <div className='alert alert-danger'>{this.state.errors.manv}</div> : ""} */}
                        {/* Cách 2 */}
                        {this.state.errors.manv && (<div className='alert alert-danger'>{this.state.errors.manv}</div>)}
                    </div>
                    <div className="form-group">
                        <label>Tên nhân viên</label>
                        <input type="text" className="form-control" name='tennv' onChange={this.handleOnChange} onBlur={this.handleError} />
                        {this.state.errors.tennv && (<div className='alert alert-danger'>{this.state.errors.tennv}</div>)}
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name='email' onChange={this.handleOnChange} onBlur={this.handleError} />
                        {this.state.errors.email && (<div className='alert alert-danger'>{this.state.errors.email}</div>)}
                    </div>
                    <button type="submit" className="btn btn-success" disabled={!this.state.formValid}>Submit</button>
                </form>
            </div>

        )
    }
}
