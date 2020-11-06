import React from 'react';
import '../Card/card.css'



class Card extends React.Component {
    render() {
        console.log(this.props)
        return (

            <div className="sub">


                <div className="DivSquare">

                    <div className="heading">
                        <h4>
                            Based on your last search
                    </h4>

                        <button type="button" data-aut-id className="viewBtn">

                            <span>

                                View more

                        </span>

                        </button>

                    </div>


                    <div className="rout">

                        <div className="card">

                            <div className="pic">

                                <p className="fea">FEATURED</p>

                            </div>
                            <div className="price">

                                <h5>RS 20,000</h5>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Card;