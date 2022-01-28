
export default function reducer (state: any, action: any): any {
    switch(action.type) {
        case "SET_GROUP":
            return {
                ...state,
                group: action.payload,
                bookableIndex: 0
            };

        case "SET_BOOKABLE":
            return {
                ...state,
                bookableIndex: action.payload
            };
        
        case "NEXT_BOOKABLE":
            const count = state.bookables.filter(
                (b: { group: any; }) => b.group === state.group
            ).length;
        
        return {
            ...state,
            bookableIndex: (state.bookableIndex + 1) % count
        };

        case "FETCHING_BOOKABLE_REQUEST":
            return {
                ...state,
                isLoading: true,
                error: false,
                bookable: []
            };
        
        case "FETCHING_BOOKABLE_SUCCESS":
            return {
                ...state,
                isLoading: false,
                bookables: action.payload
            };

        case "FETCHING_BOOKABLE_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        default:
            return state;
    }
}