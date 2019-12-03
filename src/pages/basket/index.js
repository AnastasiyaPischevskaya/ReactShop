import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { Table } from 'reactstrap';

// import Body from '../../includes/body/index';


class BasketPage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log(this.props.items);
        return (
            <>
                <h1>Basket</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Picture</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.items.map((item, i) =>
                            <tr key={i}>
                                <td>{item.title}</td>
                                <td><img src={item.src} /></td>
                                <td>{item.price}</td>
                            </tr>
                        )}
                    </tbody>

                </Table>
            </>
        )
    }
}

const setStateToProps = (store) => {
    return {
        items: store.basketItems
    }
}

export default connect(setStateToProps)(BasketPage)
