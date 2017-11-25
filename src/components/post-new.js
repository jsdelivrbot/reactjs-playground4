import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../actions';

class PostNew extends Component {
    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="post-new">
                <h3>New Post</h3>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="title" label="Title" component={this.renderTextField} />
                    <Field name="categories" label="Categories" component={this.renderTextField} />
                    <Field name="content" label="Content" component={this.renderTextField} />
                    <Link className="btn btn-secondary" to="/">Cancel</Link>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    renderTextField(field) {
        const { meta: { error, touched } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    type="text"
                    className="form-control"
                    {...field.input} />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }
}

function validateForm(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Please enter title';
    }

    if (!values.categories) {
        errors.categories = 'Please enter categories';
    }

    if (!values.content) {
        errors.content = 'Please enter content';
    }

    return errors;
}

export default reduxForm({
    validate: validateForm,
    form: 'PostNewForm'
})(
    connect(null, { createPost })(PostNew)
);