import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from'./Card';
ReactDOM.render(
  <>
  <h1 className='head'> Netflix Movies</h1>
  <div className='f1'>
  <Card 
  imgsrc="https://cdn.wallpapersafari.com/81/96/EFkwIN.jpeg"
  title="Money Hiest"
  href="https://www.netflix.com/watch/80192098?tctx=0%2C0%2C%2C%2C%2C%2C89b6f11b-41bb-4f1e-94e2-2d785edfd748-352040100%7C1%2C%2C%2CVideo%3A80192098"
  />
  <Card 
  imgsrc="https://felixdewolfe.com/wp-content/uploads/2021/02/shadow-and-bone-p-720x900.jpg"
  title="Shadow & Bone"
  href="https://www.netflix.com/search?q=shadow%20and%20bone&jbv=80236319"
  />
  <Card
  Card imgsrc="https://flxt.tmsimg.com/assets/p17699282_b_v13_ab.jpg"
  title="Lock & Key"
  href="https://www.netflix.com/search?q=shadow%20and%20bone&jbv=80241239"/>
  <Card
  imgsrc="https://miro.medium.com/max/390/1*FjkV9a9lcKTObyZIimDqyg.jpeg"
  title="PK"
  href="https://www.netflix.com/browse?jbv=70303496"/>
  </div>
  <div className='f1'>
  
  <Card imgsrc="https://i.ytimg.com/vi/ZepMUSxltqo/movieposter_en.jpg"
  title="13 Hours"
  href="https://www.netflix.com/search?q=top%20guns&jbv=80067930"/>
  
  <Card imgsrc="https://imageio.forbes.com/b-i-forbesimg/scottmendelson/files/2013/04/hr_Oblivion_10.jpg?format=jpg&width=1200"
  title="OBLIVIAN"
  href="https://www.netflix.com/search?q=top%20guns&jbv=70259170"/>
  
  <Card imgsrc="http://www.ibs.re.kr/dext5data/2016/10/20161026_161059385_94498.jpg"
  title="LUCY"
  href="https://www.netflix.com/search?q=top%20guns&jbv=70307658"/>
  
  <Card imgsrc="https://resizing.flixster.com/_4Z2JIxPr9sxCaVDZR1m2orOdGY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2VhZTFjODIxLWNjMzItNDM3OS1iMWE4LThmNGVjMzE1YzJlMy5qcGc="
  title="Interceptor"
  href="https://www.netflix.com/search?q=top%20guns&jbv=81388316"/>
  </div>
 </>,
 document.getElementById('root'));