import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import { connect } from 'react-redux';



class CarouselItems extends Component {
    constructor(props) {
        super(props);



        this.state = {
            activeIndex: 0
            // items: []
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.props.products.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.products.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;
        const items = this.props.products;
        console.log(items);

        const slides = items.map((item, i) => {
            return (
                <CarouselItem className="CarouselItem"
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={i}
                >
                    <img src={item.src} alt={item.title} className={"img_style"} />
                    <CarouselCaption  captionText={item.price} captionHeader={item.title} />
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
    componentDidMount() {

        fetch("/json/index.json")
            .then(data => data.json())
            .then(items => {
                this.props.dispatch({
                    type: "Show_items",
                    data: items
                })
            }
            )


    }
}

const setStateToProps = (store) => {
    return {
        products: store.products.filter((item, i) =>
            item.status === "Top" ? item : null)
    }


}

export default connect(setStateToProps)(CarouselItems)
