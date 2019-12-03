import React, { Fragment, Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: undefined,
            comments: []
        }
    }


    render() {
        let id = this.props.match.params.id;

        return (
            <Fragment>
                <Link to={"/catalog/"}>К каталогу </Link>

                {this.props.products.map((item, i) => {
                    return item.id == id ?
                        <div key={i} className="productPage">
                            <p className="title">{item.title}</p>
                              <ul>
                                {
                                    item.gallery.map((info,j)=>{
                                      return <li key={j}>
                                      <ReactFancyBox
                                          thumbnail={info}
                                          image={info} />
                                      </li>
                                    }

                                    )
                                }

                                </ul>
                            <p className="price">{item.price}</p>
                            <p>{item.full_text}</p>
                            <Button color="secondary" onClick={() => this.addToBasket(item)} ><Link to={`/basket`}>Добавить в корзину</Link></Button>
                        </div>
                        : null
                }
                )

                }



            </Fragment>
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

export default connect(setStateToProps)(ProductPage)
