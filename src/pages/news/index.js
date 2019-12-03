import React ,{Fragment,Component} from "react";
import {Card,  CardText, CardBody} from 'reactstrap';
import { Link } from "react-router-dom";
import ItemList from "./itemList";
import Body from '../../includes/body/index';


export default class NewsPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }


  render(){
    return(
      <Fragment>
          <Body>
              <h1>{"NewsPage"}</h1>
              {
                  this.state.items.map((item,i)=>
                      <ItemList key={i} item={item}/>
                  )
              }
          </Body>
      </Fragment>
    )
  }

  componentDidMount(){
      fetch("https://jsonplaceholder.typicode.com/posts").then(data=>data.json())
              .then(items =>this.setState({
                items: [...items]
              }))
  }





}
