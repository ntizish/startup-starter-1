import React, { useState, useEffect } from 'react';
import A_Button from "./components/01_Atoms/A_Button";
import P_Home from "./components/05_Pages/P_Home";
import P_Onboarding from './components/05_Pages/P_Onboarding';
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

const App = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [savedPresentations, setSavedPresentations] = useState([]);

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    // Send message to main plugin code to save the preference
    parent.postMessage({ pluginMessage: { type: 'SAVE_ONBOARDING_STATUS', completed: true } }, '*');
  };

  useEffect(() => {
    // Request onboarding status when component mounts
    parent.postMessage({ pluginMessage: { type: 'GET_ONBOARDING_STATUS' } }, '*');

    // Listen for response from the main plugin code
    const messageHandler = (event) => {
      const message = event.data.pluginMessage;
      if (message) {
        if (message.type === 'ONBOARDING_STATUS') {
          setShowOnboarding(!message.completed);
        } else if (message.type === 'SAVED_PRESENTATIONS') {
          console.log('Received saved presentations:', message.presentations);
          setSavedPresentations(message.presentations);
        }
      }
    };

    window.addEventListener('message', messageHandler);
    return () => window.removeEventListener('message', messageHandler);
  }, []);

  const handleGenerateSlide = () => {
    // Send a message to the Figma plugin backend to generate the slide
    parent.postMessage({ pluginMessage: { type: 'generate-slide' } }, '*');
  };
  
  const componentDidMount = () => {
    setToStorage('hellou from plugin')
  };

  const getFromStorage = () => {
    parent.postMessage(
      {
        pluginMessage: {
          type: 'get-storage'
        }
      },
      '*'
    )
  };

  const setToStorage = (id) => {
    parent.postMessage(
      {
        pluginMessage: {
          type: 'set-storage',
          id: id
        }
      },
      '*'
    )
  };

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

  return (
    <div className="App">
      {showOnboarding ? (
        <P_Onboarding onComplete={handleOnboardingComplete} />
      ) : (
        <P_Home
          onGenerate={handleGenerateSlide}
          savedPresentations={savedPresentations}
        />
      )}
    </div>
  );
};

export default App;
