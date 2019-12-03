import React ,{Fragment,Component} from "react";
import {Card,  CardText, CardBody} from 'reactstrap';
import { Link } from "react-router-dom";
import { Circle, Heart } from 'react-spinners-css';
//import { getRandomColor } from '@bit/joshk.jotils.get-random-color'

export default class NewsItemPage extends Component{
  constructor(props){
    super(props);
    this.state= {
      info: undefined,
        comments: []
    }
  }


  render(){

    return(
      <Fragment>
          <Link to={"/news/"}>К списку </Link>
          { this.state.info!=undefined ?
            <Card>
              <CardBody>
                <p>{this.state.info.title}</p>
                <p>{this.state.info.body}</p>
              </CardBody>
                {
                  this.state.comments.map((item,i)=>

                      <div key={i}>
                          <div>{item.id}</div>
                          <div>{item.name}</div>
                          <div>{item.email}</div>
                          <div>{item.body}</div>
                      </div>)
                }
            </Card>
            :<Heart color={"#be97e8"} />
          }


      </Fragment>
    )
  }


  componentDidMount (){
    let id = this.props.match.params.id;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(data=>data.json())
            .then(item =>this.setState({
              info: item
            }));
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
          .then(data => data.json())
          .then(comments => this.setState({comments: comments}));
  }
}
