import React from 'react';
import interestFreeImg from '../../assets/Flash.png';
import peerImg from '../../assets/peer.png';
import ajoImg from '../../assets/ajo.png';
import fastImg from '../../assets/Rocket.png';
import './features.scss'

function Features() {
    const cardData = [
        {
            title: "Interest-Free Banking",
            description: "Easy application process with no paper work. Verification and disbursement is done at instant.",
            image: interestFreeImg
        },
        {
            title: "Peer-to-peer Payment",
            description: "Halal user can send and receive money using QRcode, link invitation, pay by phone number, and username.",
            image: peerImg
        },
        {
            title: "Ajo/Esusu/Adashe",
            description: "Move your existing contributions with believe that your money is safe. #SecureYourSavings.",
            image: ajoImg
        },
        {
            title: "Fast Transactions",
            description: "Transactions on Halal are performed under lightning speed. It literally takes seconds to confirm transactions.",
            image: fastImg
        }
    ];

    return (
        <div className="container features_sec">
            <h2 className="text-center my-5">We have added functions that would make banking easier for you.</h2>
            <div className="row justify-content-around">
                {cardData.map((card, index) => (
                    <div key={index} className="col-lg-3 col-md-6 mb-4">
                        <div className="card h-100 d-flex flex-column justify-content-between p-2 shadow-lg border-0" data-aos="zoom-in">
                            <img src={card.image} alt={card.title} width={'50px'} />
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;
