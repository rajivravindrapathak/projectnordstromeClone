import React from 'react'
import "./Home.module.css"
import { Carousel } from "react-bootstrap"


function Home() {

  return (
    <div>

        {/* <div>home page</div> */}
        {/* Navbar */}
        {/* first image */}
      <div className='Div1'>
        <img src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/d8cc09f5-5d68-4853-ae9a-233ceabe3acd.jpg" alt="" />
      </div>

      <div className='Div2'>
        {/* slider */}

        <Carousel>
                <Carousel.Item>
                    <img width="400px" height="250px"
                    className="d-block w-100"
                    src="https://d1z88p83zuviay.cloudfront.net/BannerImages/e2815333-d548-4212-9acd-a96f08950440_1320x376.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                
                <Carousel.Item>
                    <img width="400px" height="250px"
                    className="d-block w-100"
                    src="https://d1z88p83zuviay.cloudfront.net/BannerImages/3b8d8078-b906-4340-8ac2-d56085bf9a02_1320x376.jpg"
                    alt="Second slide"
                    />

                </Carousel.Item>

                <Carousel.Item>
                    <img width="400px" height="250px"
                    className="d-block w-100"
                    src="https://d1z88p83zuviay.cloudfront.net/BannerImages/305a62b1-b655-4366-9a9c-b1d4c92685d5_1320x376.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img width="400px" height="250px"
                    className="d-block w-100"
                    src="https://d1z88p83zuviay.cloudfront.net/BannerImages/5658ebaa-f296-4121-991c-c2009109e764_1320x376.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img width="400px" height="250px"
                    className="d-block w-100"
                    src="https://d1z88p83zuviay.cloudfront.net/BannerImages/69fbb757-9d70-45c0-9875-14c8b4f18804_1320x376.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img width="400px" height="250px"
                    className="d-block w-100"
                    src="https://d1z88p83zuviay.cloudfront.net/BannerImages/172ece1d-70d5-44d5-a5f4-0d236c1d815a_1320x376.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img width="400px" height="250px"
                    className="d-block w-100"
                    src="https://d1z88p83zuviay.cloudfront.net/BannerImages/82a1ea7f-02c2-4192-b0d7-588973fa8d14_1320x376.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img width="400px" height="250px"
                    className="d-block w-100"
                    src="https://d1z88p83zuviay.cloudfront.net/BannerImages/28b8913f-ae0e-4afe-ac72-bae62be8ffb2_1320x376.png"
                    alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img width="400px" height="250px"
                    className="d-block w-100"
                    src="https://d1z88p83zuviay.cloudfront.net/BannerImages/fcff6bcb-f6fa-489d-abba-07b77fa32be5_1320x376.png"
                    alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img width="400px" height="250px"
                    className="d-block w-100"
                    src="https://d1z88p83zuviay.cloudfront.net/BannerImages/bc1eefce-0553-4b16-bc75-45a4ee42a22e_1320x376.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img width="400px" height="250px"
                    className="d-block w-100"
                    src="https://d1z88p83zuviay.cloudfront.net/BannerImages/0f2301bb-4607-47f9-859c-1c2c21642159_1320x376.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img width="400px" height="250px"
                    className="d-block w-100"
                    src="https://d1z88p83zuviay.cloudfront.net/BannerImages/a1bb73ba-00a7-4473-ac0a-cafd9500e6eb_1320x376.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img width="400px" height="250px"
                    className="d-block w-100"
                    src="https://d1z88p83zuviay.cloudfront.net/BannerImages/4c720a91-f8f7-437a-bbfd-71e63580e802_1320x376.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>

                
            </Carousel>

      </div>

      <div className='Div3'>
        <div>
            <img src="https://www.naturesbasket.co.in/Images/NaturesBasketGifting.jpeg?v=7" alt="" />
        </div>
        <div>
            <img src="https://www.naturesbasket.co.in/Images/Japanesecuisine-webbox.png?v=9" alt="" />
        </div>
        <div>
            <img src="https://www.naturesbasket.co.in/Images/Gluten-free-web%20box%20banner.png?v=15" alt="" />
        </div>
      </div>

      <p>SHOP BY CATEGORY</p>
      <div className='Div4'>
        <div>
            <img src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Organicweb.png" alt="" />
            <p>Organic</p>
            <p>Amaranth Couscous Quinoa</p>
            <p>Flours Rice Condiments</p>
            <p>Seafood Lean Meats</p>
        </div>
        <div>
            <img src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Readytoeatweb.png" alt="" />
            <p>Ready to Eat</p>
            <p>Salt Sugar Substitutes</p>
            <p>Cooking Spices Powders</p>
            <p>Oils</p>
        </div>
        <div>
            <img src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/bespokeweb.png" alt="" />
            <p>The Gift Studio</p>
            <p>Milk Dark Mint Chocolates</p>
            <p>Cakes, Brownie, Pancake & Mixes</p>
            <p>Ice-creams & Kulfi</p>
        </div>
        <div>
            <img src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/fineteasweb.png" alt="" />
            <p>Fine Teas</p>
            <p>Black Teas</p>
            <p>Green White Oolong Teas</p>
            <p>Herbal Teas Detox Benefit Blends</p>
        </div>
        <div>
            <img src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/indiangroceryweb.png" alt="" />
            <p>Indian Gerocery</p>
            <p>Salt Sugar Substitutes</p>
            <p>Cooking Spices Powders</p>
            <p>Oils</p>
        </div>
      </div>

      {/* <p>TRENDING OFFERS</p>
      <div>
            

      </div> */}
      
      <p>CURATED FOR YOU</p>
      <div>
          
      </div>

      <div>
        <Carousel>
            <Carousel.Item>
                <img width="400px" height="270px"
                className="d-block w-100"
                src="https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_1320x355-blog2.jpg"
                alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img width="400px" height="270px"
                className="d-block w-100"
                src="https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_pastaBlog_banner.jpg"
                alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img width="400px" height="270px"
                className="d-block w-100"
                src="https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_paneerBlog_banner.jpg"
                alt="First slide"
                />
            </Carousel.Item>

                
        </Carousel>
      </div>

      {/* <p>WHAT'S TRENDING</p>
      <div>
          
      </div>

      <p>DISCOVER MORE</p>
      <div>
        
      </div> */}

      <p>OUR EVENTS</p>
      <div className='Div3'>
          <div>
              <img width="420px" height="339px" src="https://www.naturesbasket.co.in/Images/PhotoGallery/SanjeevKapoor_at_KolkataGallary.jpg" alt="" />
          </div>
          <div>
              <img src="https://www.naturesbasket.co.in/Images/PhotoGallery/IndiaSportsHonours2019NaturesBasketGiftingBNR.jpg?v=2" alt="" />
          </div>
          <div>
              <img src="https://www.naturesbasket.co.in/Images/PhotoGallery/SaranshHome.png?v=2" alt="" />
          </div>
      </div>

      <p>SHOP BY WORLD BRANDS</p>
      <div>

      </div>

    </div>
  )
}

export default Home
