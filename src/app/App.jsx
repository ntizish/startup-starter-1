import React from 'react'
import A_Button from "./components/01_Atoms/A_Button";
import P_Home from "./components/05_Pages/P_Home";
// import * as React from 'react'
// import * as ReactDOM from 'react-dom'

// import { getRandom } from '../plugin/utilities'

// Array.prototype.remove = function () {
//   // prettier-ignore
//   var what, a = arguments, L = a.length, ax;
//   while (L && this.length) {
//     what = a[--L]
//     while ((ax = this.indexOf(what)) !== -1) {
//       this.splice(ax, 1)
//     }
//   }
//   return this
// }

export default class App extends React.Component {
  constructor(params) {
    super(params)

    // this.state = {}

    // байндим метод с конктекстом класса
    this.handleGenerateSlide = this.handleGenerateSlide.bind(this);
  }

  handleGenerateSlide() {
    // Send a message to the Figma plugin backend to generate the slide
    parent.postMessage({ pluginMessage: { type: 'generate-slide' } }, '*');
  }
  
  componentDidMount() {
    this.setToStorage('hellou from plugin')
  }

  getFromStorage = () => {
    parent.postMessage(
      {
        pluginMessage: {
          type: 'get-storage'
        }
      },
      '*'
    )
  }

  setToStorage = (id) => {
    parent.postMessage(
      {
        pluginMessage: {
          type: 'set-storage',
          id: id
        }
      },
      '*'
    )
  }

  // exportPageToFigma = () => {
  //   // const { data } = this.props
  //   // const { data } = this.state

  //   parent.postMessage(
  //     {
  //       pluginMessage: {
  //         type: 'export'
  //         // data: data
  //       }
  //     },
  //     '*'
  //   )
  // }

  render() {
    console.log("App is rendering!");  // Debugging App render
    return (
      <P_Home
          onGenerate={this.handleGenerateSlide}
      />
    )
  }
}
