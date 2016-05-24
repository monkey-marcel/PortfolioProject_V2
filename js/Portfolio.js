

function headerBig(){

//create an empty string to conctaenate on to
var headerB = '';

     
headerB += '<nav class="navbar navbar-default navbar-fixed-top">';
headerB += '<div class="container"> ';
headerB += '<div class="navbar-header page-scroll">';
headerB += '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">';
headerB += '<span class="sr-only">Toggle navigation</span>';
headerB += '<span class="icon-bar"></span>';
headerB += '<span class="icon-bar"></span>';
headerB += '<span class="icon-bar"></span>';
headerB += ' </button>';
headerB += ' <a class="navbar-brand" href="#page-top">Marcel Scioville - Portfolio Concept</a> ';
headerB += ' </div>';
headerB += '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">';
headerB += '<ul class="nav navbar-nav navbar-right">';
headerB += '<li class="hidden">';
headerB += '<a href="#page-top"></a>';
headerB += '</li>';
headerB += '<li class="page-scroll">';
headerB += '<a href="#portfolio">Portfolio</a>';
headerB += '</li>';
headerB += '<li class="page-scroll">';
headerB += '<a href="#about">About</a>';
headerB += '</li>';
headerB += '<li class="page-scroll">';
headerB += '<a href="#contact">Contact</a>';
headerB += '</li>';
headerB += '</ul>';
headerB += '</div>';
headerB += '</div>';
headerB += '</nav>';


document.getElementById('javascript_Div_Header').innerHTML = headerB;

}

headerBig();





function headerTwo() { 

var header_two = '';

    header_two += '<header>';
    header_two+= '<div class="container">';
    header_two += ' <div class="row">';
    header_two += ' <div class="col-lg-12">';
    header_two+= ' <img class="img-circle" src="img/-Marcel-HeadShot-BW.jpg"  alt="marcel-sa">';
    header_two+= '<div class="intro-text">';
    header_two += '<span class="name">Marcel Scioville: Portfolio Concept</span>';
    header_two += ' <hr class="star-light">';
    header_two += ' <span class="skills">Digital Media Guru - Aspiring Web Developer - Coder in Training</span>';
    header_two += ' </div>';
    header_two += '</div>';
    header_two += ' </div>';
    header_two += '</div>';
    header_two +='</header>';
           
            
  document.getElementById('headerTwo').innerHTML = header_two;    

      }  

headerTwo();
                    
   
   function BodyofPage() {                      
    var content = ''; 

    <!-- Portfolio Grid Section -->
    content += '<section id="portfolio">';
        content += '<div class="container">';
           content += ' <div class="row">';
               content += ' <div class="col-lg-12 text-center">';
                  content += '  <h2>Portfolio</h2>';
                   content += ' <hr class="star-primary">';
               content += ' </div>';
           content += ' </div>';
            content += '<div class="row">';
               content += '<div class="col-sm-4 portfolio-item">';
                   content += '<a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">';
                       content += '<div class="caption">';
                            content +='<div class="caption-content">';
                               content +='<i class="fa fa-search-plus fa-3x"></i>';
                           content += ' </div>';
                       content += ' </div>';
                        content += '<img src="img/portfolio/Matseing-Lightroom-Small.jpg" class="img-responsive" alt="">';
                   content += ' </a>';
               content += ' </div>';
               content += ' <div class="col-sm-4 portfolio-item">';
                  content += '  <a href="#portfolioModal2" class="portfolio-link" data-toggle="modal">';
                       content += '<div class="caption">';
                          content += '  <div class="caption-content">';
                               content += ' <i class="fa fa-search-plus fa-3x"></i>';
                           content += ' </div>';
                        content += '</div>';
                       content += ' <img src="img/portfolio/Spain-B-Small.jpg" class="img-responsive" alt="">';
                   content += ' </a>';
                content += '</div>';
                content += '<div class="col-sm-4 portfolio-item">';
                   content += ' <a href="#portfolioModal3" class="portfolio-link" data-toggle="modal">';
                       content += ' <div class="caption">';
                            content += '<div class="caption-content">';
                               content += ' <i class="fa fa-search-plus fa-3x"></i>';
                           content += ' </div>';
                       content += ' </div>';
                       content += ' <img src="img/portfolio/CheetahSitting_small.jpg" class="img-responsive" alt="">';
                    content += '</a>';
               content += ' </div>';
               content += ' <div class="col-sm-4 portfolio-item">';
                 content += '   <a href="#portfolioModal4" class="portfolio-link" data-toggle="modal">';
                      content += '  <div class="caption">';
                      content += '      <div class="caption-content">';
                      content += '          <i class="fa fa-search-plus fa-3x"></i>';
                       content += '     </div>';
                      content += '  </div>';
                       
                  content += '  </a>';
               content += ' </div>';
             content += '   <div class="col-sm-4 portfolio-item">';
               content += '     <a href="#portfolioModal5" class="portfolio-link" data-toggle="modal">';
                   content += '     <div class="caption">';
                       content += '     <div class="caption-content">';
                          content += '      <i class="fa fa-search-plus fa-3x"></i>';
                        content += '    </div>';
                       content += ' </div>';
                     
                  content += '  </a>';
               content += ' </div>';
               content += ' <div class="col-sm-4 portfolio-item">';
                 content += '   <a href="#portfolioModal6" class="portfolio-link" data-toggle="modal">';
                     content += '   <div class="caption">';
                    content += '        <div class="caption-content">';
                             content += '   <i class="fa fa-search-plus fa-3x"></i>';
                           content += ' </div>';
                       content += ' </div>';
                        
                  content += '</a>';
               content += '</div>';
           content += '</div>';
     content += '</div>';
    content += '</section>  ';               
                        
       

           



 <!-- About Section -->
    content += '<section class="success" id="about">';
       content += ' <div class="container">';
            content += '<div class="row">';
               content += ' <div class="col-lg-12 text-center">';
                 content += '   <h2>About</h2>';
                    content += '<hr class="star-light">';
                content += '</div>';
           content += ' </div>';
           content += ' <div class="row">';
             content += '   <div class="col-lg-4 col-lg-offset-2">';
                  content += '  <p>Marcel is an aspiring front end developer and designer.</p>';
               content += ' </div>';
               content += ' <div class="col-lg-4">';
                   content += ' <p>Marcel hopes to learn javascript and all assciated coding languages in the next 5 months</p>';
               content += ' </div>';
               content += ' <div class="col-lg-8 col-lg-offset-2 text-center">';
                    
               content += ' </div>';
          content += '  </div>';
       content += ' </div>';
   content += ' </section>';

    <!-- Contact Section -->
   content += ' <section id="contact">';
       content += ' <div class="container">';
          content += '  <div class="row">';
               content += ' <div class="col-lg-12 text-center">';
                  content += '  <h2>Contact Me</h2>';
                   content += ' <hr class="star-primary">';
               content += ' </div>';
           content += ' </div>';
           content += ' <div class="row">';
                content += '<div class="col-lg-8 col-lg-offset-2">';
                    <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
                    <!-- The form should work on most web servers, but if the form is not working you may need to configure your web server differently. -->
                   content += ' <form name="sentMessage" id="contactForm" novalidate>';
                      content += '  <div class="row control-group">';
                           content += ' <div class="form-group col-xs-12 floating-label-form-group controls">';
                               content += ' <label>Name</label>';
                               content += ' <input type="text" class="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name.">';
                               content += ' <p class="help-block text-danger"></p>';
                           content += ' </div>';
                       content += ' </div>';
                       content += ' <div class="row control-group">';
                          content += '  <div class="form-group col-xs-12 floating-label-form-group controls">';
                             content += '   <label>Email Address</label>';
                                content += '<input type="email" class="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address.">';
                               content += ' <p class="help-block text-danger"></p>';
                          content += '  </div>';
                        content += '</div>';
                       content += ' <div class="row control-group">';
                           content += ' <div class="form-group col-xs-12 floating-label-form-group controls">';
                              content += '  <label>Phone Number</label>';
                               content += ' <input type="tel" class="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number.">';
                              content += '  <p class="help-block text-danger"></p>';
                           content += ' </div>';
                      content += '  </div>';
                      content += '  <div class="row control-group">';
                          content += '  <div class="form-group col-xs-12 floating-label-form-group controls">';
                               content += ' <label>Message</label>';
                              content += '  <textarea rows="5" class="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>';
                              content += '  <p class="help-block text-danger"></p>';
                          content += '  </div>';
                       content += ' </div>';
                       content += ' <br>';
                      content += '  <div id="success"></div>';
                      content += '  <div class="row">';
                            content += '<div class="form-group col-xs-12">';
                               content += ' <button type="submit" class="btn btn-success btn-lg">Send</button>';
                           content += ' </div>';
                       content += ' </div>';
                  content += '  </form>';
               content += ' </div>';
           content += ' </div>';
       content += ' </div>';
   content += ' </section>';





  //  <!-- Footer -->
   content += '  <footer class="text-center">';
      content += '   <div class="footer-above">';
          content += '   <div class="container">';
              content += '   <div class="row">';
                 content += '    <div class="footer-col col-md-4">';
                      content += '   <h3>Location</h3>';
                      content += '   <p>4670 MacaArthur Lane <br> Boulder, CO 80303</p>';
                content += '     </div>';
                content += '     <div class="footer-col col-md-4">';
                     content += '    <h3>Around the Web</h3>';
                    content += '     <ul class="list-inline">';
                          content += '   <li>';
                              content += '   <a href="https://www.facebook.com/marcel.scioville" target="blank" class="btn-social btn-outline"><i class="fa fa-fw fa-facebook"></i></a>';
                           content += '  </li>';
                          content += '   <li>';
                              content += '   <a href="https://plus.google.com/+MarcelScioville/posts" target="blank" class="btn-social btn-outline"><i class="fa fa-fw fa-google-plus"></i></a>';
                          content += '   </li>';
                          content += '   <li>';
                            content += '     <a href="https://twitter.com/marcelscioville" target="blank" class="btn-social btn-outline"><i class="fa fa-fw fa-twitter"></i></a>';
                          content += '   </li>';
                          content += '   <li>';
                               content += '  <a href="https://www.linkedin.com/in/marcelscioville" target="blank" class="btn-social btn-outline"><i class="fa fa-fw fa-linkedin"></i></a>';
                           content += '  </li>';
                          content += '   <li>';
                              content += '   <a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-dribbble"></i></a>';
                          content += '   </li>';
                       content += '  </ul>';
                   content += '  </div>';
                   content += '  <div class="footer-col col-md-4">';
                       content += '  <h3>Subscribe to Updates</h3>';
                               content += '  <input type="email" class="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address."><br>';
                       content += '  <button type="submit" class="btn btn-success btn-sm">Send</button>';
                   content += '  </div>';
  



document.getElementById('bodyOneHTML').innerHTML = content;  
     }                 
      
BodyofPage();

                   
 