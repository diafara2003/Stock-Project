import React, { Component } from "react";

class HeaderLogin extends Component {
  constructor() {
    super();
    this.state = {
      product: [{ name: "jau", id: 1 }, { name: "andres", id: 2 }]
    };
  }

  render() {
    const _product = this.state.product.map((_p, i) => {
      return (
        <div>
          <ul>
            <li>{_p.name}</li>
          </ul>
        </div>
      );
    });

    return (
      <div>
        <h1>Shpiing for ...  </h1>
        <h2>{this.props.name}</h2>
        <hr />

        {_product}
      </div>
    );
  }
}

export default HeaderLogin;
