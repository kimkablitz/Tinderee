import React from "react";
import "./style.css";


class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumbotron bg-dark">
                <h1>Have you met me?</h1>
                <p>
                    Below are photos of other members, some of them also want to go on a date with you, but make sure you will not choose the same person twice or they will get angry
</p>
                <p>
                    {/* <Button bsStyle="primary">Learn more</Button> */}
                </p>
            </div>
        )
    }

}

export default Jumbotron;