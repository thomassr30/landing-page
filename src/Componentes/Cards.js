import React from 'react'

const Cards = ({tituloCard}) => {
    return (
        <div className="row">
            {
                tituloCard.map((titulo, index) =>(
                    <div className="col-sm-12 col-lg-3" key={index}>
                        <div className="card mt-3">
                            <img src="https://picsum.photos/200/200" class="card-img-top img-fluid" alt="..." />
                            <div className="card-body text-center">
                                <h5>{titulo}</h5>
                                <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
    ))
            }
        </div>
    )
}

export default Cards
