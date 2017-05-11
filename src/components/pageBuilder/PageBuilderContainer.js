import React, { Component } from "react";

import PageBuilder from "components/pageBuilder/PageBuilder";

export default class PageBuilderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [
        {
          id: 1,
          name: "Glass"
        },
        {
          id: 2,
          name: "Banana"
        },
        {
          id: 3,
          name: "Paper"
        }
      ]
    };
  }

  render() {
    return <PageBuilder components={this.state.components} />;
  }
}
