import React, { Component } from 'react';

import party from '../assets/party-popper.png';

class AgeStats extends Component {

    timeDiff = (date) => {
        let currentDate = new Date().getTime();
        let inputDate = new Date(date).getTime();
        let diffDate = Math.abs(currentDate - inputDate);

        let days = Math.floor(diffDate / (1000 * 3600 * 24));
        let years = Math.floor(days / 365);
        days -= years * 365;
        let months = Math.floor(days / 31);
        days -= months * 31;

        return `${years} years, ${months} months, and ${days} days.!!!`
    }

    render() {
        return (
            <div className="my-3">
                <h3>{this.props.date}</h3>
                <h4>Congrats on {this.timeDiff(this.props.date)}</h4>
                <img className="party-popper" src={party} alt="party-popper" />
            </div>
        );
    }
}

export default AgeStats;