import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"

const Footer=()=>{
    
    return (
        <>
        <footer 
        class="text-center text-white" 
        style={{
          background:'#084388'
        }}>
        <div class="container p-4">

        <section class="">
            <form action="">
             <div class="row d-flex justify-content-center">
            <div class="col-auto">
            <p class="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>

          <div class="col-md-5 col-12">
            <div class="form-outline form-white mb-4">
              <input type="email" id="email_address" class="form-control" />
            </div>
          </div>

          <div class="col-auto">
            <button type="submit" class="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>

        </div>
      </form>
    </section>
    <section class="mb-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
        eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p>
    </section>

      <div class="row">
        <section class="mb-2">
        <a class="btn btn-outline-light btn-floating m-4" href="#!" role="button">
        <i class="bi bi-facebook"></i>
        </a>
        <a class="btn btn-outline-light btn-floating m-4" href="#!" role="button"
        ><i class="bi bi-instagram"></i>
        </a>
        <a class="btn btn-outline-light btn-floating m-4" href="#!" role="button"
        ><i class="bi bi-whatsapp"></i>
        </a>
        <p class="pt-2">
            <strong>Contact Us</strong>
        </p>
        </section>
      </div>

        </div>

        </footer>
        </>

        )
    }

export default Footer


             

            


      


      

      

  
      


    



    
 

