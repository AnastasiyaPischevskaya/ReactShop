import React, { Fragment, Component } from "react";
import CarouselMain from "../../components/carousel/index";
import Scss from "./../../style/style.scss"
import TopNews from "../../components/topNews/index";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Fragment>
        <h1>Top Products</h1>
        <CarouselMain className={"body_carousel"} />
      </Fragment>

    )
  }


}
