import React, { Component } from 'react';

class BlogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: ''
        };
    }

    handleTitleChange(title) {
        this.setState({ title });
    }

    handleInputChange(content) {
        this.setState({ content });
    }

    render() {
        return (

            <div className="container mt-3 mx-auto">

                <div className="col-12">
                    <form className="card p-3 m-1">
                        <label
                            htmlFor="blog-input"
                            className="d-block m-2"><h1>Create a Blog:</h1>
                        </label>
                        <input
                            value={this.state.title}
                            onChange={(event) => { this.handleTitleChange(event.target.value) }}
                            className="form-control w-70 m-2 d-inline"
                            placeholder="Title"
                        />
                        <textarea
                            value={this.state.content}
                            onChange={(event) => { this.handleInputChange(event.target.value) }}
                            className="form-control w-70 m-2 d-inline"
                            rows="15"
                            placeholder="What's happening?"
                        />
                        <button
                            onClick={() => { this.props.postBlog(this.state) }}
                            type="button"
                            className="btn btn-info m-2">Post!
                        </button>
                    </form>
                </div>
            </div>
        );
    };
}

export default BlogForm;


