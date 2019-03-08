import React, { Component } from 'react';
import './ground.scss';

type Props = {
  className?: string
};
type State = {
  cardlist: { value: string, name: string }[]
};

export default class Playground extends Component<Props, State> {
  state = {
    cardlist: [
      { value: '1', name: 'almaaa' },
      { value: '2', name: 'almaaaa' },
      { value: '3', name: 'eseztiszt' },
      { value: '4', name: 'almaasdasd' },
      { value: '5', name: 'allmlfdlkmasda' },
      { value: '9', name: 'almaasdas Xassddasd' },
      { value: '2', name: 'almaaaa' },
      { value: '3', name: 'eseztiszt' },
      { value: '4', name: 'almaasdasd' },
      { value: 'PASS', name: 'allmlfdlkmasda' },
      { value: '6', name: 'almaasdasda' },
      { value: '3', name: 'eseztiszt' }
    ]
  };

  textMaxWidth = (text: string) => 0.6;
  // Math.pow(Math.max(...text.split(" ").map(s => s.length)), 1.4) / 50;

  render() {
    return (
      <div className="gridContainer">
        <div className="maingroundgrid">
          {this.state.cardlist.map((c, i) => (
            <div key={i}>
              <div className="nametag">
                {c.name.split(/\s+/g).map((text, i) => (
                  <svg viewBox="0 0 60 20" key={i}>
                    <text
                      x="30"
                      y="20"
                      textAnchor="middle"
                      textLength="60"
                      lengthAdjust="spacingAndGlyphs"
                      fontSize="20"
                    >
                      {text}
                    </text>
                  </svg>
                ))}
              </div>
              <div className="card">
                <svg viewBox="0 0 30 40">
                  <text
                    x="15"
                    y="30"
                    textAnchor="middle"
                    textLength="30"
                    lengthAdjust={c.value.length < 3 ? 'spacing' : 'spacingAndGlyphs'}
                  >
                    {c.value}
                  </text>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
