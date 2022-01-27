const initialData = {
    game_name: "Football",
    player_name: "Messi"
}

function gamereducer(state = initialData, action) {
    switch (action.type) {
        case 'UPDATE_GAME':


            if (action.payload.match(/^([a-zA-Z])+$/)) {
                return {
                    ...state,
                    game_name: action.payload
                }
            }
            else {
                return state
                    
                }


        case 'UPDATE_PLAYER':
            if (action.payload.match(/^[a-zA-Z]+[ ]+[a-zA-Z]+$/)||action.payload.match(/^[a-zA-Z]+$/)||action.payload.match(/^[a-zA-Z]+[ ]+[a-zA-Z]+[ ]+[a-zA-Z]+$/)) {
                return {
                    ...state,
                    player_name: action.payload
                }
            }
            else {
                return state
            }


            if (action.payload.matches(/[a-zA-Z]/)) {

            }

        default:
            return state

    }

}

export default gamereducer;
