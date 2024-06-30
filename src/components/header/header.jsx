
import { useTelegram } from '../../hooks/useTelegram';

const header = () => {
    const {user, onClose} = useTelegram();
    return(
        <div className={'header'}>
            <button onClick={onCLose}>Закрыть</button>
            <span className={'username'}>
                {user?.username}
            </span> 
            </div>
    );
};

export default header;