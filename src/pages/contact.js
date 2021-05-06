import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

const Contact = () => (
  <div>
    <Header />
    <h2>Contact</h2>
    <table>
      <tr>Name :</tr>
      <td>Gerard Mangues</td>
      <tr>Email: </tr>
      <td>gerardcoding@gmail.com</td>
      <tr>Linkedin:</tr>
      <td><a href="https://www.linkedin.com/in/gerard-mangues/" target="_blank" rel="noreferrer">@GerardMangues</a></td>
      <tr>Address:</tr>
      <td><address>C/ Arnau 2-8, Barcelona, Spain 08031</address></td>
    </table>
    <Footer />
  </div>
);

export default Contact;
