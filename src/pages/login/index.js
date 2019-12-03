import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';
import Modal from "../../components/modal/index"


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: false,
            error: false
        }


    }


    render() {
        return (
          <div className="container">
            <Form inline onSubmit={this.onSubmit}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="admin" className="mr-sm-2">Admin</Label>
                    <Input type="text" name="admin" id="admin" placeholder="admin" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="password" className="mr-sm-2">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="password" />
                </FormGroup>
                {this.state.error
                    ? <Modal toggle={this.toggle}><h3>Wrong Data</h3></Modal>
                    : null}
                <Button>Submit</Button>
            </Form>
            </div>
        )
    }

    toggle = () => {
        this.setState({
            error: false
        })
    }
    onSubmit = (e) => {
        e.preventDefault();

        if (admin.value == "admin" && password.value == "12345") {
            this.setState({
                auth: !this.state.auth
            });
            localStorage.setItem("auth", true);
            this.props.history.push("/basket")

        }
        else {
            console.log("not");
            this.setState({
                error: !this.state.error
            });
            localStorage.setItem("auth", false);
        }
        console.log(this.state.error);
    }
}

const setStateToProps = (store) => {
    return {
        items: store.items,
        comments: store.comments
    }
}

export default connect(setStateToProps)(LoginPage)
