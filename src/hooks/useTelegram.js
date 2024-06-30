   const tg = window.Telegram.WebApp;
   
   export function useTelegram() {

    const onCLose = () => {
        tg.coloe()
    }

    const onToggleButton = () => {
        if(tg.MainButton.isVisable) {
            tg.MainButton.hide();
        } else{
            tg.MainButton.show();
        }
    }

        return {
            onToggleButton,
            onClose,
            tg,
            user: tg.initDataUnsafe?.user,
        
        }
    }