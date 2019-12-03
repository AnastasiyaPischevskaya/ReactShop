export default function Products(state = [{ id: 1, text: "tetstststst" }], action) {
    if (action.type != undefined) {
        switch (action.type) {
            case "Show_items": {
                return [...action.data];
            }

            case "DEC": {
                return state - action.data;
            }

            default: {
                return state
            }
        }
    }
    return state
}


