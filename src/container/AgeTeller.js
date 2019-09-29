import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class AgeTeller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newDate: '',
            birthDate: '',
        }
    }

    changeBirthday = () => {
        // console.log(this.state);
        this.setState({ birthDate: this.state.newDate });
    }
    render() {
        return (
            <div className="text-center">
                <h2>Enter Your Birthday!!!</h2>
                <Form>
                    <FormControl
                        className="d-inline w-auto m-auto"
                        type="date"
                        onChange={(event) => this.setState({ newDate: event.target.value })}
                    />
                    {' '}
                    <Button onClick={() => this.changeBirthday()}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default AgeTeller;