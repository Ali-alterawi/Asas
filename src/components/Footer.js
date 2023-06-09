import React from 'react'

const Footer = () => {
    const mystyle = {
        color: "#fff",
        backgroundColor: "#064080",
      };
  return (
    <>
        <footer class="shadow">
        <div class="container ">
              <div class="row pt-5">
                <div class="col-6 col-md-2">
                  <h5>About</h5>
                  <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="aaa" class="nav-link p-0 text-body-secondary">How it works</a></li>
                    <li class="nav-item mb-2"><a href="aaa" class="nav-link p-0 text-body-secondary">Featured</a></li>
                    <li class="nav-item mb-2"><a href="aaa" class="nav-link p-0 text-body-secondary">Partnership</a></li>
                    <li class="nav-item mb-2"><a href="aaa" class="nav-link p-0 text-body-secondary">
                        Bussiness Relation</a></li>
                  </ul>
                </div>
          
                <div class="col-6 col-md-2 mb-3">
                  <h5>Community</h5>
                  <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="aaa" class="nav-link p-0 text-body-secondary">Events</a></li>
                    <li class="nav-item mb-2"><a href="aaa" class="nav-link p-0 text-body-secondary">Blog</a></li>
                    <li class="nav-item mb-2"><a href="aaa" class="nav-link p-0 text-body-secondary">Podcast</a></li>
                    <li class="nav-item mb-2"><a href="aaa" class="nav-link p-0 text-body-secondary">Invite a friend</a></li>
                  </ul>
                </div>
          
                <div class="col-6 col-md-2 mb-3">
                  <h5>Socials</h5>
                  <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="aaa" class="nav-link p-0 text-body-secondary">Discord</a></li>
                    <li class="nav-item mb-2"><a href="aaa" class="nav-link p-0 text-body-secondary">Instagram</a></li>
                    <li class="nav-item mb-2"><a href="aaa" class="nav-link p-0 text-body-secondary">Twitter</a></li>
                    <li class="nav-item mb-2"><a href="aaa" class="nav-link p-0 text-body-secondary">Facebook</a></li>
                    
                  </ul>
                </div>
          
                <div class="col-md-5 offset-md-1 mb-3">
                  <form>
                    <h5>Subscribe to our newsletter</h5>
                    <p>Monthly digest of what's new and exciting from us.</p>
                    <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                      <label for="newsletter1" class="visually-hidden">Email address</label>
                      <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
                      <button class="btn" style={mystyle}  type="button">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
          
              <div class="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
                <p>&copy; 2023 TENT,All rights reserved.</p>
                <ul class="list-unstyled d-flex">
                  <li class="ms-3"><a class="link-body-emphasis" href="aaa"><i class="fa-brands fa-twitter fa-2x"></i></a></li>
                  <li class="ms-3"><a class="link-body-emphasis" href="aaa"><i class="fa-brands fa-instagram fa-2x"></i></a></li>
                  <li class="ms-3"><a class="link-body-emphasis" href="aaa"><i class="fa-brands fa-facebook fa-2x"></i></a></li>
                </ul>
              </div>
          </div>
          
    </footer>
    </>
  )
}

export default Footer