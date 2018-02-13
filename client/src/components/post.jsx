import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: ''
        };
    }

    render() {
        return (

            <div className="card mt-3">

                    <div className="card-body">
                        <h5 className="card-title text-center">{`${this.props.post.title}`}</h5>

                        <Link className="btn btn-info btn-block" to={`/blogs/${this.props.post.id}`}>View Post</Link>
                    </div>
            </div>
                );
    };
}

export default Post;