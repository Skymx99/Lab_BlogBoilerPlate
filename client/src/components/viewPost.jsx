import React, { Component } from 'react';
import BlogForm from './blog';

class ViewPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {
                title: '',
                content: ''
            }
        };
    }

    componentDidMount() {
        this.getBlog();
    }


    handleTitleChange(title) {
        this.setState({ title });
    }

    handleInputChange(content) {
        this.setState({ content });
    }

    getBlog() {
        fetch(`/api/blogs/${this.props.match.params.id}`)
            .then((response) => {
                return response.json();
            }).then((post) => {
                this.setState({
                    post
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    updateBlog(post) {
        let id = this.props.match.params.id;

        fetch(`/api/blogs/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(() => {
            this.setState({
                post
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    deleteBlog() {
        console.log(this.props.match.params.id);
        fetch(`/api/blogs/${this.props.match.params.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            this.props.history.push('/');
        }).catch((err) => {
            console.log(err);
        });
    }


    render() {
        return (

            <div className="container mt-3 mx-auto">
                <div className="card mt-3">

                    <div className="card-body">
                        <h5 className="card-title">{`${this.state.post.title}`}</h5>
                        <p className="card-text">{`${this.state.post.content}`}</p>
                        <button className="btn btn-dark" onClick={() => { this.deleteBlog(); }}>Delete</button>

                    </div>
                </div>
                 <BlogForm postBlog={(post) => { this.updateBlog(post); }} />

            </div>
        );
    };
}

export default ViewPost;


