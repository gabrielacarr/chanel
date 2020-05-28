import React, { useState } from "react";

import actions from '../../services/index';

const formDefault = {
    title: '',
    category: '',
    imgUrl: '',
    description: ''
}

const Publish = () => {
    const [form, setForm] = useState(formDefault);
    const onChangeHandler = e => {
        let value = e.target.value;
        let name = e.target.name;
        let formUpdated = {...form, [name]:value}
        setForm(formUpdated)
    }
    const onSubmitHandler = async e => {
        e.preventDefault()
        const response = await actions.newPost(form)
        console.log(response)
    }
  return (
    <>


      <form className="contact-form" id="comment-form" onSubmit={onSubmitHandler}>
        <h2 className="contact-form__title">Publish Content</h2>


        <div className="row">
          <div className="col-md-6">
            <input
            onChange={onChangeHandler}
            value={form.title}
              className="contact-form__input-text"
              name='title'
              title="title"
              placeholder="Title:"
            />
          </div>


          <div className="col-md-6">
            <input
            onChange={onChangeHandler}
            value={form.category}
              className="contact-form__input-text"
                name='category'
              type="text"
              category="category"
             
              placeholder="Category:"
            />
          </div>
        </div>


        <div className="row">
        <div className="col-md-12">
            <input
            onChange={onChangeHandler}
            value={form.imgUrl}
              className="contact-form__input-text"
                name='imgUrl'
              type="text"
             
              placeholder="Image Url:"
            />
          </div>
        </div>


        <textarea
            onChange={onChangeHandler}
            value={form.description}
          className="contact-form__textarea"
            name='description'
          description="description"
          
          placeholder="Content: Keep in mind you may style with HTML"

        ></textarea>
        
        <input
          className="contact-form__submit"
          type="submit"
          name="submit-contact"
       
          value="Publish Literature"
        />
      </form>
    </>
  );
};

export default Publish;
