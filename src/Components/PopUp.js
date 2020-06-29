import M from 'materialize-css';

const PopUp = {
    exibeMensagem: (status, msg) => {

        if(status === "success") {
            M.toast({
                html: msg,
                classes: 'green',
                displayLength: 1000
            });
        }

        if(status === "error") {
            M.toast({
                html: msg,
                classes: 'red',
                displayLength: 1000
            });
        }
    }
}

export default PopUp;