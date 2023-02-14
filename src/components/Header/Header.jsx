import React, {useEffect, useState} from 'react';
import {ConnectButton, useWallet} from "@suiet/wallet-kit";
import Logo from '../../assest/images/logob.svg'

const Header = () => {
    const wallet = useWallet()
    const [data, setData] = useState('')
    useEffect(() => {
        if (!wallet.connected) return;
        setData(`${wallet.account?.address}`)
    }, [wallet.connected])

    return (
        <header className={'header'}>
            <div className={'header__container'}>
                <div className={'header__logo'}>
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className={'header__connect-button'}>
                    <ConnectButton>Connect</ConnectButton>
                </div>
            </div>
        </header>
    );
};

export default Header;