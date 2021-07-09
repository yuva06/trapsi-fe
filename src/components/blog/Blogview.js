import React, { Component } from "react";
import axios from "axios";

export default class Blogview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cv: {},
     
    };
  }
  componentDidMount() {
    const productId = this.props.match.params.id;

    axios
      .get(`http://127.0.0.1:8000/connect/Blog/${productId}`)
      .then((res) => {
        this.setState({
          cv: res.data,
         
        });
        
      });
  }

  render() {
    const product = this.state.cv;
    return (
      <div>

        <div>
        
            {/* <img src={product.image} alt="Writing" width="300" height="300" /> */}
            <h6>{product.name}</h6>
            
            <div
              dangerouslySetInnerHTML={{ __html: `${product.description}` }}
            ></div>
          </div>
      
      
      
      </div>
    );
  }
}
