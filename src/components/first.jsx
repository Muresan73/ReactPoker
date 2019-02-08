import React, { Component } from "react";

type Props = {
  className?: string,
  disabled?: boolean
};

export default class First extends Component<Props> {
  alma(test: string) {
    return test.toUpperCase();
  }

  render() {
    return <div>almafa</div>;
  }
}
