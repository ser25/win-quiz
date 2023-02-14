import React from 'react';
import Header from "../components/Header/Header";
import TheMain from "../components/Main/TheMain";

const Win = () => {
    return (
        <>
            <Header />
            <main className={'page'}>
                <TheMain />
            </main>
        </>
    );
};

export default Win;