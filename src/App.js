import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div>
<div className="box">
    <div className="search-box">
      <div className="Search-select">
          <div className="sec">
              <div className="label">
                <label for="Property-Status">Property Status</label>
                  </div>
                      <div className="select">
                          <select name="property-Status" id="Property-status">
                              <option value="for-rent">For Rent</option>
                              <option value="for-sale">For Sale</option>
                              <option value="any">Any</option>
                          </select>
                        </div>
            </div>
        </div>
          <div className="Search-select">
              <div className="sec">
                <div className="label">
                  <label for="location">Location</label>
                    </div>
                          <div className="select">
                              <select name="location" id="location">
                                  <option value="Cairo">Cairo</option>
                                  <option value="Giza">Giza</option>
                                  <option value="Alex">Alex</option>
                                  <option value="Luxor">Luxor</option>
                              </select>
                            </div>
              </div>
        </div>

        <div className="Search-select">
            <div className="sec">
                <div className="label">
                  <label for="Property-Type">Property Type</label>
                    </div>
                          <div className="select">
                              <select name="Property-Type" id="Property-Type">
                                  <option value="Office">Office</option>
                                  <option value="Shop">Shop</option>
                                  <option value="Apartment">Apartment</option>
                              </select>
                          </div>
            </div>
        </div>
        <div className="btn">
          <button type="button" id="search-button">Search</button>
        </div>
    </div>
</div>    

<div className="container">
  <div className="box">
    <div className="top">
      <img src="imgs/blog-1.png" alt="" />
      <span>

      </span>
    </div>
    <div className="bottom">
      <h3>Home In Merrick Way</h3>
      <p>
        Enchanting three bedrooms, three bath home with spacious one
        bedroom, one bath...
      </p>
      <div className="advants">
        <div>
          <span>Bedrooms</span>
          <div><i className="fas fa-th-large"></i><span>3</span></div>
        </div>
        <div>
          <span>Bathrooms</span>
          <div><i className="fas fa-shower"></i><span>3</span></div>
        </div>
        <div>
          <span>Area</span>
          <div>
            <i className="fas fa-vector-square"></i>
            <span>430<span>M <sup>2</sup></span></span>
          </div>
        </div>
      </div>
      <div className="price">
        <span>For Sale</span>
        <span>$540,000</span>
          <button className="heart-button">
              <i className="fas fa-heart"></i>
          </button>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="top">
      <img src="https://cdn.pixabay.com/photo/2014/07/31/00/30/vw-beetle-405876__340.jpg" alt="" />
      <span>
      </span>
    </div>
    <div className="bottom">
      <h3>Villa In Alexandria</h3>
      <p>
        Enjoy serenity of Deering Bay whole day from this spectacular North
        and...
      </p>
      <div className="advants">
        <div>
          <span>Bedrooms</span>
          <div><i className="fas fa-th-large"></i><span>3</span></div>
        </div>
        <div>
          <span>Bathrooms</span>
          <div><i className="fas fa-shower"></i><span>3.5</span></div>
        </div>
        <div>
          <span>Area</span>
          <div>
            <i className="fas fa-vector-square"></i
            ><span>3500<span>M <sup>2</sup></span></span>
          </div>
        </div>
      </div>
      <div className="price">
        <span>For Sale</span>
        <span>$825,000</span>
        <button className="heart-button">
          <i className="fas fa-heart"></i>
      </button>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="top">
      <img src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg" alt="" />
      <span
      ></span>
    </div>
    <div className="bottom">
      <h3>Villa In Cairo</h3>
      <p>
        The very best waterfront location in Tahrir square and beside many
        cool places
      </p>
      <div className="advants">
        <div>
          <span>Bedrooms</span>
          <div><i className="fas fa-th-large"></i><span>3</span></div>
        </div>
        <div>
          <span>Bathrooms</span>
          <div><i className="fas fa-shower"></i><span>2</span></div>
        </div>
        <div>
          <span>Area</span>
          <div>
            <i className="fas fa-vector-square"></i
            ><span>1800<span>M <sup>2</sup></span></span>
          </div>
        </div>
      </div>
      <div className="price">
        <span>For Sale</span>
        <span>$410,000</span>
        <button className="heart-button">
          <i className="fas fa-heart"></i>
      </button>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="top">
      <img src="imgs/blog-1.png" alt="" />
      <span>
      </span>
    </div>
    <div className="bottom">
      <h3>Home In Merrick Way</h3>
      <p>
        Enchanting three bedrooms, three bath home with spacious one
        bedroom, one bath...
      </p>
      <div className="advants">
        <div>
          <span>Bedrooms</span>
          <div><i className="fas fa-th-large"></i><span>3</span></div>
        </div>
        <div>
          <span>Bathrooms</span>
          <div><i className="fas fa-shower"></i><span>3</span></div>
        </div>
        <div>
          <span>Area</span>
          <div>
            <i className="fas fa-vector-square"></i
            ><span>4300<span>M <sup>2</sup></span></span>
          </div>
        </div>
      </div>
      <div className="price">
        <span>For Sale</span>
        <span>$540,000</span>
        <button className="heart-button">
          <i className="fas fa-heart"></i>
      </button>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="top">
      <img src="imgs/blog-1.png" alt="" />
      <span>
      </span>
    </div>
    <div className="bottom">
      <h3>Home In Merrick Way</h3>
      <p>
        Enchanting three bedrooms, three bath home with spacious one
        bedroom, one bath...
      </p>
      <div className="advants">
        <div>
          <span>Bedrooms</span>
          <div><i className="fas fa-th-large"></i><span>3</span></div>
        </div>
        <div>
          <span>Bathrooms</span>
          <div><i className="fas fa-shower"></i><span>3</span></div>
        </div>
        <div>
          <span>Area</span>
          <div>
            <i className="fas fa-vector-square"></i
            ><span>4300<span>M <sup>2</sup></span></span>
          </div>
        </div>
      </div>
      <div className="price">
        <span>For Sale</span>
        <span>$540,000</span>
        <button className="heart-button">
          <i className="fas fa-heart"></i>
      </button>
      </div>
    </div>
  </div> 
  <div className="box">
    <div className="top">
      <img src="imgs/blog-1.png" alt="" />
      <span>
      </span>
    </div>
    <div className="bottom">
      <h3>Home In Merrick Way</h3>
      <p>
        Enchanting three bedrooms, three bath home with spacious one
        bedroom, one bath...
      </p>
      <div className="advants">
        <div>
          <span>Bedrooms</span>
          <div><i className="fas fa-th-large"></i><span>3</span></div>
        </div>
        <div>
          <span>Bathrooms</span>
          <div><i className="fas fa-shower"></i><span>3</span></div>
        </div>
        <div>
          <span>Area</span>
          <div>
            <i className="fas fa-vector-square"></i
            ><span>4300<span>M <sup>2</sup></span></span>
          </div>
        </div>
      </div>
      <div className="price">
        <span>For Sale</span>
        <span>$540,000</span>
        <button className="heart-button">
          <i className="fas fa-heart"></i>
      </button>
      </div>
    </div>
  </div> 
  <div className="box">
    <div className="top">
      <img src="imgs/blog-1.png" alt="" />
      <span>
      </span>
    </div>
    <div className="bottom">
      <h3>Home In Merrick Way</h3>
      <p>
        Enchanting three bedrooms, three bath home with spacious one
        bedroom, one bath...
      </p>
      <div className="advants">
        <div>
          <span>Bedrooms</span>
          <div><i className="fas fa-th-large"></i><span>3</span></div>
        </div>
        <div>
          <span>Bathrooms</span>
          <div><i className="fas fa-shower"></i><span>3</span></div>
        </div>
        <div>
          <span>Area</span>
          <div>
            <i className="fas fa-vector-square"></i
            ><span>4300<span>M <sup>2</sup></span></span>
          </div>
        </div>
      </div>
      <div className="price">
        <span>For Sale</span>
        <span>$540,000</span>
        <button className="heart-button">
          <i className="fas fa-heart"></i>
      </button>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="top">
      <img src="imgs/blog-1.png" alt="" />
      <span>
      </span>
    </div>
    <div className="bottom">
      <h3>Home In Merrick Way</h3>
      <p>
        Enchanting three bedrooms, three bath home with spacious one
        bedroom, one bath...
      </p>
      <div className="advants">
        <div>
          <span>Bedrooms</span>
          <div><i className="fas fa-th-large"></i><span>3</span></div>
        </div>
        <div>
          <span>Bathrooms</span>
          <div><i className="fas fa-shower"></i><span>3</span></div>
        </div>
        <div>
          <span>Area</span>
          <div>
            <i className="fas fa-vector-square"></i
            ><span>4300<span>M <sup>2</sup></span></span>
          </div>
        </div>
      </div>
      <div className="price">
        <span>For Sale</span>
        <span>$540,000</span>
        <button className="heart-button">
          <i className="fas fa-heart"></i>
      </button>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="top">
      <img src="imgs/blog-1.png" alt="" />
      <span>
      </span>
    </div>
    <div className="bottom">
      <h3>Home In Merrick Way</h3>
      <p>
        Enchanting three bedrooms, three bath home with spacious one
        bedroom, one bath...
      </p>
      <div className="advants">
        <div>
          <span>Bedrooms</span>
          <div><i className="fas fa-th-large"></i><span>3</span></div>
        </div>
        <div>
          <span>Bathrooms</span>
          <div><i className="fas fa-shower"></i><span>3</span></div>
        </div>
        <div>
          <span>Area</span>
          <div>
            <i className="fas fa-vector-square"></i
            ><span>4300<span>M <sup>2</sup></span></span>
          </div>
        </div>
      </div>
      <div className="price">
        <span>For Sale</span>
        <span>$540,000</span>
        <button className="heart-button">
          <i className="fas fa-heart"></i>
      </button>
      </div>
    </div>
  </div>
  </div>
</div>
);
}

export default App;
