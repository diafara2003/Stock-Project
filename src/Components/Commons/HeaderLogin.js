import React, { Component } from "react";

class HeaderLogin extends Component {
  constructor() {
    super();
    this.state = {
      product: [{ name: "jau", id: 1 }, { name: "andres", id: 2 }]
    };
    this.HandleLess=this.HandleLess.bind(this);
  }

  HandleInfo = function(e) {
    alert(this.state.product[0].name);
  };

  HandleLess = function(e) {
    alert(this.state.product[0].name);
    alert(e.target.name);
  };

  render() {
    const _product = this.state.product.map((_p, i) => {
      return (
        <div>
          <ul>
            <li key={_p.id}>{_p.name}</li>
          </ul>
        </div>
      );
    });

    return (
      <div>
        <h1>Shpiing for ... </h1>
        <h2>{this.props.name}</h2>
        <button
          onClick={e => {
            this.HandleInfo(e);
          }}
        >
          Get more informacion
        </button>

        <button name="LessInfo" onClick={this.HandleLess}>Get less informacion</button>

        <hr />

        {_product}
      </div>
    );
  }
}

export default HeaderLogin;
