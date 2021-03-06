export default function BasketItems(state = [{
    "id": "1",
    "title": "CROSSBODY BAG WITH FAUX SNAKESKIN FLAP",
    "src": "https://www.parfois.com/dw/image/v2/BBKR_PRD/on/demandware.static/-/Sites-parfois-master-catalog/default/dw42ca7ba5/images/hi-res/192/54/171725_TU_2yf.jpg?sw=679&q=100",
    "gallery": [
        "https://www.parfois.com/dw/image/v2/BBKR_PRD/on/demandware.static/-/Sites-parfois-master-catalog/default/dwf5d07a3b/images/hi-res/192/54/171700_TU_1yf.jpg?sw=561",
        "https://www.parfois.com/dw/image/v2/BBKR_PRD/on/demandware.static/-/Sites-parfois-master-catalog/default/dwb7104124/images/hi-res/192/54/171700_TU_3y.jpg?sw=561",
        "https://www.parfois.com/dw/image/v2/BBKR_PRD/on/demandware.static/-/Sites-parfois-master-catalog/default/dw5d8ec663/images/hi-res/192/54/171700_TU_2y.jpg?sw=561",
        "https://www.parfois.com/dw/image/v2/BBKR_PRD/on/demandware.static/-/Sites-parfois-master-catalog/default/dw1841c39e/images/hi-res/192/54/171700_TU_6y.jpg?sw=561"
    ],
    "price": "89.99",
    "full_text": "Main Material: 100%; Polyurethane Lining: 90%Polyester, 10%Polyurethane Measurements cm: 24x18x6 (LxHxW) Belt Lenght (Min. - Max.): 89Type of Opening: Zipper",
    "status": "Top"
},
{
    "id": "2",
    "title": "PATCHWORK CROSSBODY BAG",
    "src": "https://www.parfois.com/dw/image/v2/BBKR_PRD/on/demandware.static/-/Sites-parfois-master-catalog/default/dw9b654190/images/hi-res/192/56/171868_BK_1yf.jpg?sw=679&q=100",
    "gallery": [
        "https://www.parfois.com/dw/image/v2/BBKR_PRD/on/demandware.static/-/Sites-parfois-master-catalog/default/dw42ca7ba5/images/hi-res/192/54/171725_TU_2yf.jpg?sw=679&q=100",
        "https://www.parfois.com/dw/image/v2/BBKR_PRD/on/demandware.static/-/Sites-parfois-master-catalog/default/dw0772f5a7/images/hi-res/192/56/171868_BK_2y.jpg?sw=561",
        "https://www.parfois.com/dw/image/v2/BBKR_PRD/on/demandware.static/-/Sites-parfois-master-catalog/default/dw8eda4e9d/images/hi-res/192/56/171868_BK_4y.jpg?sw=561",
        "https://www.parfois.com/dw/image/v2/BBKR_PRD/on/demandware.static/-/Sites-parfois-master-catalog/default/dw3fcd1127/images/hi-res/192/56/171868_BK_5y.jpg?sw=561"
    ],
    "price": "79.99",
    "full_text": "Main Material: 100%; Polyurethane Lining: 90%Polyester, 10%Polyurethane Measurements cm: 24x18x6 (LxHxW) Belt Lenght (Min. - Max.): 89Type of Opening: Zipper",
    "status": "Sale"
}], action) {
    if (action.type != undefined) {
        switch (action.type) {
            case "ADD_TO_BASKET": {
                return [...state, action.data];
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