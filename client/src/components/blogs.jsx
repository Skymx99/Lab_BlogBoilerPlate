import React, { Component } from 'react';
import BlogForm from './blog';
import Post from './post';
// import BlogsList from './blogs';

class Blogs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: []
        };
    }

    componentDidMount() {
        this.getBlogs();
    }

    getBlogs() {
        fetch('/api/blogs/')
            .then((response) => {
                return response.json();
            }).then((blogs) => {
                this.setState({
                    blogs
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    addBlog(post) {
        fetch('/api/blogs/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(() => {
            this.getBlogs();
        }).catch((err) => {
            console.log(err);
        });
    }

    updateBlog(text) {
        fetch('/api/blogs/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text
            })
        }).then(() => {
            console.log('success');
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        console.log(this.state.blogs);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <BlogForm postBlog={(post) => { this.addBlog(post); }} />
                    </div>
                    <div className="col-4">
                        <div className="bg">
                            {this.state.blogs.map((blog, index) => {
                                return <Post key={index} post={blog} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blogs;
