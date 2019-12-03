import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import Datasort from 'react-data-sort'
import { Table } from 'reactstrap';

// import Body from '../../includes/body/index';


class SortItems extends Component {
    constructor(props) {
        super(props)
        this.toggleListReverse = this.toggleListReverse.bind(this)
        this.toggleSortDate = this.toggleSortDate.bind(this)
        this.state = {

            isOldestFirst: true
        }
    }

    render() {
        const tableData = this.props.items;

        return (
            <Datasort
                data={tableData}
                render={({ data }) => (
                    <table>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Title</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(({ id, title }) => (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{title}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            />
        )
    }
}
const setStateToProps = (store) => {
    return {
        items: store.basketItems
    }
}

export default connect(setStateToProps)(SortItems)
