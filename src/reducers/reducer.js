const initialState = {
    name: '',
    temp: '',
    desc: '',
    loading: true,
    error: false
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'COL':
            const nameMod = action.payName;
            const tempMod = action.payTemp;
            const descMod = action.payDesc;

            return {
                ...state,
                name: nameMod,
                temp: tempMod,
                desc: descMod,
                loading: false,
                error:false
            };

        case 'REC':
            return {
                ...state,
                loading: true,
                error:false
            }

        case 'ERR':
            return {
                ...state,
                error: true,
                loading:false
            }
            
        default:
            return state;
    }
}

export default reducer;