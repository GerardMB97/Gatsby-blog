import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const Contact = () => (
  <Layout>
    <Head title="Contact" />
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
  </Layout>

);

export default Contact;
