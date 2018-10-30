import React, { Component } from 'react';
import axios from 'axios';
import ProductDetails from './ProductDetails';
import Recommendations from './Recommendations';
import RecentlyViewed from './RecentlyViewed';
import OthersBought from './OthersBought';

// css
import style from './css/App.css';

console.log(style);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: '', //can either change to description or specifications
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  renderViews() {
    let { view } = this.state;

    if (view === 'description') {
      console.log('I am the view');
    }
  }

  fetchData() {
    axios
      .get('shoedidas/product/details')
      .then(data => {
        let products = data.data;
        let randomized = products.sort(() => 0.5 - Math.random());
        let selected = randomized.slice(0, 15);
        this.setState({
          products: selected,
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    //One Product for details
    //6 for recommendation, othersbought & recentlyviewed
    const productArr = this.state.products;

    const oneProduct = productArr.slice(0, 1);

    //for 4 Products
    const selectedOtherBought = productArr.slice(1, 5);
    const selectedRecent = productArr.slice(6, 10);
    const selectedRecs = productArr.slice(11);

    return (
      <div>
        <div>
          <div>
            {oneProduct.map((value, i) => (
              <ProductDetails products={value} />
            ))}
          </div>
        </div>

        <div>
          <h2 style={style.h2}>Recently Viewed</h2>
          <div>
            {selectedRecent.map((value, i) => (
              <span className="recentDiv">
                <RecentlyViewed products={value} />
              </span>
            ))}
          </div>

          <div>
            <h2 style={style.h2}>Others Also Bought</h2>
            <div>
              {selectedOtherBought.map((value, i) => (
                <span className="othersBoughtDiv">
                  <OthersBought products={value} />
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 style={style.h2}>You May Also Like</h2>
            <div>
              {selectedRecs.map((value, i) => (
                <span className="recsDiv">
                  <Recommendations products={value} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
