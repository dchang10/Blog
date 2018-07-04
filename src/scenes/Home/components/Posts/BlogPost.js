import React, { Component} from 'react';
import Banner from '../Banner.js';
import Footer from '../Footer.js';
import { Link } from 'react-router-dom';

import blogAPI from '../../../../api/blog-api';
import TexEditor from '../../../../tex-wysiwyg/TeXEditor';

export default class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {slug:this.props.match.params.slug};
  }
  deletePost(slug){
    return blogAPI.deletePost(slug);
  }

  render() {
    return(
      <div>
        <div style={{marginBottom:'2em'}}/>
        <div style={{minHeight:'35em'}}>
          <TexEditor readOnly={true} slug={this.state.slug}/>
        </div> 
        <Link style={{bottom:'12em', position:'fixed',}} onClick={()=>this.deletePost(this.props.match.params.slug)} className="nav-link" to="/" style={{padding:'1em 0em 1em 1em'}}>Delete Post<span className="sr-only">(current)</span></Link>
        <Footer/>
      </div>
    );
  }
}
