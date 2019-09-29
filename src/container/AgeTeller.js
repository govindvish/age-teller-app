import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

import AgeStats from './AgeStats';

class AgeTeller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newDate: '',
            birthDate: '',
            showStats: false,
        }
    }

    changeBirthday = () => {
        // console.log(this.state);
        this.setState({
            birthDate: this.state.newDate,
            showStats: true
        });
    }
    render() {
        return (
            <div className="text-center">
                <h2 className="my-4">Enter Your Birthday!!!</h2>
                <Form>
                    <FormControl
                        className="d-inline w-auto m-auto"
                        type="date"
                        onChange={(event) => this.setState({ newDate: event.target.value })}
                    />
                    {' '}
                    <Button onClick={() => this.changeBirthday()}>Submit</Button>
                </Form>
                {
                    this.state.showStats ? <AgeStats date={this.state.birthDate} /> : <div></div>
                }
            </div>
        )
    }
}

export default AgeTeller;