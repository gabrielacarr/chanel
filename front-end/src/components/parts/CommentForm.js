import React from "react";

const CommentForm = () => {
    return (
        <>

            <form className="contact-form" id="comment-form">
                <h2 className="contact-form__title">Write a Comment</h2>
                <div className="row">
                    <div className="col-md-6">
                        <input
                            className="contact-form__input-text"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name:"
                        />
                    </div>
                   
                </div>

                <textarea
                    className="contact-form__textarea"
                    name="comment"
                    id="comment"
                    placeholder="Comment"
                ></textarea>
                <input
                    className="contact-form__submit"
                    type="submit"
                    name="submit-contact"
                    id="submit_contact"
                    value="Publish Comment"
                />
            </form>
        </>
    );
};

export default CommentForm;
