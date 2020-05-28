import React, { Component } from 'react'
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import Breadcrumbs from "../parts/Breadcrumbs";
import Comment from "../parts/Comment"
import CommentForm from '../parts/CommentForm';

export default class SingleBlog extends Component {
    componentDidMount() {

    }
    render() {
        console.log(this.props.location.state)
        const { title, description, imgUrl, category, comments } =
            this.props.location.state?.blog
        return (
            <>
                <Header />
                    <Breadcrumbs />
                        <div className="single-post no-sidebar">

                            <div className="title-single-post">
                                <a className="text-link" href="#">
                                    {category}</a>

                                <h1>{title}</h1>
                                <p>
                                    {description}
                                </p>

                            </div>
                    <CommentForm />
                </div>
                <Footer />
            </>
        )
    }
};

