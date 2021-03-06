export const initialState = {
    showSidebar: false,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_SIDEBAR":
            return {
                ...state,
                showSidebar: !state.showSidebar
            }
        default:
            return state;
    }
}

export default reducer;