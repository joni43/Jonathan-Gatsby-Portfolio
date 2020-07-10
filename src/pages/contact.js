import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const contact = () => {
  return <Layout>
      <SEO title="Contact" description="Contact me" />

      <section className="contact-page">
          <article className="contact-form">
              <h3>contact me</h3>
              <form action="https://formspree.io/xnqgzwvy" method="POST">
                  <div className="form-group">
                      <input type="text" name="name" placeholder="name" className="form-control"></input>
                      <input type="email" name="email" placeholder="email" className="form-control"></input>
                      <textarea name="message" rows="5" placeholder="message" className="form-control"></textarea>

                  </div>
                  <button type="submit" className="submit-btn btn">submit</button>
              </form>
          </article>
      </section>
  </Layout>;
};

export default contact;
