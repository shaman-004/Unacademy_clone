import React from 'react'
const Home = () => {
  return (
    <div>
        <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/qnjczscu9pkjjths6rtf" height="600px" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/dvjbnaqg9uguijjueskd" height="600px" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://luggagehero.com/wp-content/uploads/2020/02/ed-robertson-ON6Xw8XEUQ8-unsplash-1536x1024.jpg" height="600px" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" height="600px" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br></br>

      <h1 style={{ textAlign: "center" }}>Courses</h1>
      <br></br>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://qph.cf2.quoracdn.net/main-qimg-37a6f2ba312b60dfe484ae3d214194cf-lq"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">IIT JEE</h5>
                <p class="card-text">
                 lorem*2
            

                </p>
                <a href="/" class="btn btn-primary">
                  Register
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="data:image/png;base64,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"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">NEET UG</h5>
                <p class="card-text">
                The sweltering summer of India makes us suffer terribly, especially in June when the sun's heat is at its peak. But you will agree, it is one of the best seasons to plan a long summer vacation, away from the scorching heat of the plains.
                </p>
                <a href="#" class="btn btn-primary">
                 Register
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1HyIdNxCKSBN83mMWgGGrTD_JxtA-E25pEQ&usqp=CAU://www.tourmyindia.com/blog//wp-content/uploads/2021/09/Best-Places-to-Visit-in-Andaman.jpg"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">12TH BOARD</h5>
                <p class="card-text">
                Andaman is a place where beauty in a true sense really enthralls. Not only it is blessed with drop- dead gorgeous beaches but also its a crowning glory of India in terms of biodiversity. Tourists from all over the world love to visit this ecological paradise.
                </p>
                <a href="#" class="btn btn-primary">
                  Register
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1HyIdNxCKSBN83mMWgGGrTD_JxtA-E25pEQ&usqp=CAU://e7.pngegg.com/pngimages/612/865/png-clipart-central-board-of-secondary-education-ugc-net-cbse-exam-class-10-neet-jee-main-school-label-logo.png://www.tourmyindia.com/blog//wp-content/uploads/2014/02/top-15-places-honeymoon-north-east-tour-india.png"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">10TH BOARD</h5>
                <p class="card-text">
              Lipika cried out while giving us the details of her recent trip to Shillong and other cities of Meghalaya. With her eyes shining brightly and a bit watery  with excitement and cheeks getting tomato red, she further pledged that she would indeed go to North East for her honeymoon. Everyone in the room busted out laughing; however, a few days later I pondered over her PLEDGE and decided to do a little research on what are some great honeymoon destinations in North East.
                </p>
                <a href="#" class="btn btn-primary">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home