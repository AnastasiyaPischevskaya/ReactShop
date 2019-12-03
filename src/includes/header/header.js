import React, { Fragment, Component } from "react";
import { Nav, NavItem } from 'reactstrap';
import { Link } from "react-router-dom";

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className={"header"}>
                <img src="https://www.parfois.com/on/demandware.static/Sites-Parfois_World-Site/-/default/dw5ceda5e3/images/logo_parfois.svg"
                    className={"header_logo"} /><Link to="/"></Link>
                <Nav className={"header_nav"}>
                    <NavItem>
                        <Link to="/">Главная</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/catalog">Каталог</Link>
                    </NavItem>
                    <NavItem>
                        {localStorage.getItem("auth") == false
                            ? <Link to="/login">Корзина</Link>
                            : <Link to="/basket">Корзина</Link>
                        }
                    </NavItem>
                    <NavItem>
                        <Link to="/login" onClick={this.exit}>Выйти</Link>
                    </NavItem>
                </Nav>
            </header>
        )
    }
    exit = (e) => {
        e.preventDefault;
        localStorage.setItem("auth", false);
    }
}
