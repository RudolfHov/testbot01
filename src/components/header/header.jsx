import React from 'react';

const header = (props) => {
    const tg = window.Telegram.WebApp;
    const onCLose = () => {
        tg.coloe()
    }

    return(
        <div className={'header '}>
            <button onClick={onCLose}>Закрыть</button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span> 
            </div>
    );
};

export default header;