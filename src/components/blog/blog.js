import React,{Component} from "react";
import { BlogList } from "./blogList";
import axios from "axios";
import { Link } from "react-router-dom";


export class Blog extends Component {
  
    
  constructor(props) {
  super(props);
  this.state = {
    myapp: [],
    
  };
}
componentDidMount() {
  axios
    .get("https://trapsibytes.herokuapp.com/connect/Blog/")
    .then((res) => {
      this.setState({
        myapp: res.data,
      });
    });
}
render(){
  return (
    <div>
      <section className="blogSection">
        <div className="container">
          <div className="BlogSectionTitle h1-m">Our Blogs</div>
          <div className="row">
            {this.state.myapp.map((data) => {
              return (
                <div key={data.id} className="col-md-4 col-sm-6">
                  
                <Link to={`/blog/${data.id}`}>

                  <div className="BlogSectionChild">
                    <div className="BlogSectionChildImg">
                      <img src={data.image} alt="" />
                    </div>
                    <div className="h1-m">{data.name}</div>
                    <div className="p-m">{data.mini_description}</div>
                  </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
};
export default Blog;
