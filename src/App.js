import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar">
    <a className="logo" href="#">Hostingers</a>
    <ul className="nav">
<li><a href="#home">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#portfolio">Portfolio</a></li>
<li><a href="#services">Service</a></li>
<li><a href="#contact">Contact</a></li>
<li><a className="login" href="#Login">Login</a></li>
</ul>
</div>

    <div className="container" id="home">
       <div className="card">
           <div className="card-title">
               <h2>Basic</h2>
               <p><i className="fa fa-rupee"></i><span>99</span>/month</p>
           </div>
           <div class="card-content">
               <ul>
                   <li><i className="fa fa-check-circle"></i>1 Website</li>
                   <li><i className="fa fa-check-circle"></i>5 GB Storage</li>
                   <li><i className="fa fa-check-circle"></i>1 Database</li>
                   <li><i className="fa fa-times-circle"></i>Free Domain</li>
                   <li><i className="fa fa-times-circle"></i>Professional Email</li>
                   <li><i className="fa fa-times-circle"></i>24/7 Support</li>
               </ul>
               <button><a href="#">Buy Now</a></button>
           </div>
       </div>
       <div className="card">
           <div className="card-title">
               <h2>Standard</h2>
               <p><i className="fa fa-rupee"></i><span>199</span>/month</p>
           </div>
           <div className="card-content">
               <ul>
                   <li><i className="check-circle"></i>10 Website</li>
                   <li><i clasName="check-circle"></i>25 GB Storage</li>
                   <li><i className="check-circle"></i>10 Database</li>
                   <li><i className="times-circle"></i>Free Domain</li>
                   <li><i className="check-circle"></i>Professional Email</li>
                   <li><i className="check-circle"></i>24/7 Support</li>
               </ul>
               <button><a href="#">Buy Now</a></button>
           </div>
       </div>
       <div className="card">
           <div className="card-title">
               <h2>Premium</h2>
               <p><i className="rupee"></i><span>299</span>/month</p>
           </div>
           <div className="card-content">
               <ul>
                   <li><i className="check-circle"></i>Unlimited Website</li>
                   <li><i className="check-circle"></i>1TB Storage</li>
                   <li><i className="check-circle"></i>Unlimited Database</li>
                   <li><i className="check-circle"></i>Free Domain</li>
                   <li><i className="check-circle"></i>Professional Email</li>
                   <li><i className="check-circle"></i>24/7 Support</li>
               </ul>
               <button><a href="#">Buy Now</a></button>
           </div>
       </div>
   </div>
   <section className="about-area" id="about">
    <div className="text-part">
        <h1>
About Area</h1>
<p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid atque commodi dolor est nobis veniam! Eius rerum, unde. Accusamus corporis esse eveniet exercitationem fugiat harum pariatur sequi similique tenetur vitae. Aliquam amet est excepturi, exercitationem facere fugit ipsa laborum molestiae nemo officiis placeat quos repellat saepe temporibus voluptatum.</p>
</div>
</section>

<section className="port-area" id="portfolio">
    <div className="text-part">
        <h1>
Portfolio Area</h1>
<p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid atque commodi dolor est nobis veniam! Eius rerum, unde. Accusamus corporis esse eveniet exercitationem fugiat harum pariatur sequi similique tenetur vitae. Aliquam amet est excepturi, exercitationem facere fugit ipsa laborum molestiae nemo officiis placeat quos repellat saepe temporibus voluptatum.</p>
</div>
</section>

<section className="service-area" id="services">
    <div className="text-part">
        <h1>
Services Area</h1>
<p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid atque commodi dolor est nobis veniam! Eius rerum, unde. Accusamus corporis esse eveniet exercitationem fugiat harum pariatur sequi similique tenetur vitae. Aliquam amet est excepturi, exercitationem facere fugit ipsa laborum molestiae nemo officiis placeat quos repellat saepe temporibus voluptatum.</p>
</div>
</section>

<section className="contact-area" id="contact">
    <div className="text-part">
        <h1>
Contact Area</h1>
<p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid atque commodi dolor est nobis veniam! Eius rerum, unde. Accusamus corporis esse eveniet exercitationem fugiat harum pariatur sequi similique tenetur vitae. Aliquam amet est excepturi, exercitationem facere fugit ipsa laborum molestiae nemo officiis placeat quos repellat saepe temporibus voluptatum.</p>
</div>
</section>
    </div>
  );
}

export default App;
