import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import ProductPage from "./productPage";
import SortItems from "../../components/sort/index"


class CatalogPage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log(this.props.products);
        return (
            <>
                {/* <SortItems /> */}
                {/* <Button color="link">Sort</Button> */}
                <div className="products_div">
                    {this.props.products.map((item, i) =>
                        <Card key={i} className="card_product">
                        <Link to={`/catalog/product/${item.id}`}>
                            <CardImg top src={item.src} />
                            <CardBody>

                                <CardTitle>{item.title}</CardTitle>
                                <CardSubtitle>{item.price}</CardSubtitle>
                                <Button color="link" onClick={() => this.addToBasket(item)} ><Link to={`/basket`}>Добавить в корзину</Link></Button>
                                <Button color="link"><Link to={`/catalog/product/${item.id}`}>Подробнее</Link></Button>

                            </CardBody>
                            </Link>
                        </Card>
                    )
                    }

                </div>
            </>
        )
    }

    addToBasket(item) {
        console.log(item);
        this.props.dispatch({
            type: "ADD_TO_BASKET",
            data: item
        })
    }

    componentDidMount() {

        fetch("/json/index.json")
            .then(data => data.json())
            .then(items => this.props.dispatch({
                type: "Show_items",
                data: items
            })
            )

    }
}

const setStateToProps = (store) => {
    return {
        products: store.products
    }
}

export default connect(setStateToProps)(CatalogPage)
