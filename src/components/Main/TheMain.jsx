import React from 'react';
import NFTIMG from '../../assest/images/loader.png'

const TheMain = () => {
    return (
        <section className={'main'}>
            <div className={'main__container'}>
                <div className={'main__image'}>
                    <img src={NFTIMG} alt="NFT"/>
                </div>
                <div className={"main__content"}>
                    <div className={"main__subtitle"}>NFT №4</div>
                    <h1 className={"main__title"}>PUBLIC Mint is <span>Live</span></h1>
                    <div className={"main__max"}>5 MAX PER WALLET</div>
                    <div className={"main__body"}>
                        <div className={"main__price price"}>
                            <div className="price__title">Your Mint Price:</div>
                            <div className="price__number">0.0031 Sui</div>
                        </div>
                        <div className={"main__remaining remaining"}>
                            <div className={'remaining__title'}>Remaining</div>
                            <div className={'remaining__number'}>
                                <span>17</span>/<span>20</span>
                            </div>
                        </div>
                    </div>
                    <div className={"main__button-block"}>
                        <button className={"main__button"}>Mint Now</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TheMain;