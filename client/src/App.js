import React, { useState, useEffect } from 'react';

import Footer from './components/Footer.js';
import Cards from './components/Cards.js';
import API from './utils/API.js';
import NewsList from './components/Newslist';
import Form from './components/Form';
// import {Button, Modal} from 'react-bootstrap';

function App() {


   const [news, setNews] = useState({ news: [] });
   const [newsList, setNewsList] = useState({ newsList: [] });
   const [categories, setCategories] = useState({ categories: {
                     business:[],
                     general: [],
                     entertainment: [],
                     sports: [],
                     health: [],
                     science: [],
                     technology: []
                  }});
   // const [show, setShow] = useState(false);


   useEffect(() => {
      getNews_();
      getCategories();
     // getNews_();
   }, [newsList])


   const getNews_ = (param) => {
      API.getNews(param || '').then(data => {
         setNews({ news: data.data.articles })
      })
   }

   const getCategories = ()=>{
      let categories_ = {
         business:[],
         general: [],
         entertainment: [],
         sports: [],
         health: [],
         science: [],
         technology: []
      };
      API.getHeadlines().then(data=>{
         data.data.sources.map(article=>{
            let cat = article.category;
            //categories[cat].push({desc:article.description, url:article.url});
            categories_[cat].push({desc:article.description, url:article.url});
         })
         setCategories({categories:categories_});
         //console.log(JSON.stringify(categories_));
      })
   }

   const handleClick = (e) => {
      console.log(e.target.id);
      getNews_(`&category=${e.target.id}`)
   };

   // const handleClose = () => setShow(false);
   //    const handleShow = () => setShow(true);

   // const Example = () => {
   //    const [show, setShow] = useState(false);
   
   //    const handleClose = () => setShow(false);
   //    const handleShow = () => setShow(true);
   
   // } 

   return (
      <div>
         <div className="text-center sticky-top" style={{ color: "black", fontSize: "30px" }}><a className="page-top" href="#">THE WORLD NETWORK  </a></div>
         
         <Form/>
         

   {/* <div id='modal-test'> */}
      {/* <Button variant="primary" onClick={handleShow}>
        Sign in
      </Button>

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
    <Modal.Title>Sign in</Modal.Title>
  </Modal.Header>


<Modal.Body>
<div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
</div>
</Modal.Body>

<Modal.Footer>
<div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Save password</label>
    <button type="submit" className="btn btn-primary">Login</button>
</div>
</Modal.Footer>

      </Modal>
      </div> */}



         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" >
               <ul className="navbar-nav mr-auto" id="navigationItems">

                  <li className="nav-item">
                     <a className="nav-link" onClick={(e) => handleClick(e)} id="technology" href="#">Technology</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" onClick={(e) => handleClick(e)} id="sports" href="#">Sports</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" onClick={(e) => handleClick(e)} id="science" href="#">Science</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" onClick={(e) => handleClick(e)} id="finance" href="#">Finance</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" onClick={(e) => handleClick(e)} id="health" href="#">Health</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" onClick={(e) => handleClick(e)} id="business" href="#">Business</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" onClick={(e) => handleClick(e)} id="entertainment" href="#">Entertainment</a>
                  </li>
               </ul>

               <form className="form-inline">
                  <button className="btn btn-primary my-2 my-sm-0 ml-auto ">Sign in</button>
                  <button className="btn btn-outline-warning mr-auto" type="submit">Continue as guest</button>
               </form>


            </div>
         </nav>

         <div id="newslist">
         </div>
         
   

         <NewsList list={news} />

         {/* cards will go here */}
         <Cards list={categories} />

         <Footer></Footer>

      </div>
   );
}

export default App;




