export const roomsReducer = (state, action) => {

    switch (action.type) {
        case 'addToFeatured':
            return {
                ...state,
                featuredRooms: [...state.rooms.filter(item => item.featured === true)]
            }
        case 'addToSorted':
            return {
                ...state,
                sortedRooms: [...state.rooms]
            }
        case 'setSortingValues':
            return {
                ...state,
                maxPrice: action.payload
            }
        case 'updateFilters':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case 'updateSortedRooms':
            return {
                ...state,
                sortedRooms: action.payload
            }
        default:
            return state

    }

}