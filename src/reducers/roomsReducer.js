export const roomsReducer = (state, action) => {
    switch (action.type) {
        case 'addToFeatured':
            return {
                ...state,
                featuredRooms: [...state.rooms.filter(item => item.featured === true)]
            }
        default:
            return state

    }

}