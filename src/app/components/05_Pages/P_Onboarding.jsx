import React, { useState } from 'react';
import A_Button from '../01_Atoms/A_Button';
import { CaretRight } from '@phosphor-icons/react';
import onboarding1 from '../../assets/images/illustrations/onboarding-1.png';
import onboarding2 from '../../assets/images/illustrations/onboarding-2.svg';
import onboarding3 from '../../assets/images/illustrations/onboarding-3.svg';
import onboarding4 from '../../assets/images/illustrations/onboarding-4.svg';

const onboardingSteps = [
  {
    image: onboarding1,
    heading: 'You’ve made a smart choice',
    description: 'Let’s dive into how to generate pitch decks in Pitchiro with a brief onboarding.',
    showDismiss: true
  },
  {
    image: onboarding2,
    heading: 'Bulletproof decks. No designer.',
    description: 'Create involving pitch decks that truly appeal to investors and get the job done without the need to hire any professional designer'
  },
  {
    image: onboarding3,
    heading: 'Any style. It’s all good.',
    description: 'Select any graphics you like from our selection and be sure it suits your business'
  },
  {
    image: onboarding4,
    heading: 'Evolve. Not from scratch.',
    description: 'Go back to your previous pitch deck, generate lost slides or entire pitch deck any number of times'
  }
];

const P_Onboarding = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep === onboardingSteps.length - 1) {
      onComplete();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleDismiss = () => {
    onComplete();
  };

  const currentStepData = onboardingSteps[currentStep];

  return (
    <div className="P_Onboarding">
    
        <img 
            src={currentStepData.image} 
            alt={`Onboarding step ${currentStep + 1}`}
            className="P_Onboarding__image"
        />
        
        <div className="P_Onboarding__info-container">
            <div className="P_Onboarding__text">
                <h1 className="A_Text A_Text--heading A_Text--heading-center">
                    {currentStepData.heading}
                </h1>
                <p className="A_Text A_Text--small A_Text--small-center" style={{maxWidth: '296px'}}>
                    {currentStepData.description}
                </p>
            </div>

            <div className="P_Onboarding__action-block">
                {currentStepData.showDismiss ? (
                    <button 
                        className="P_Onboarding__dismiss A_Text A_Text--small"
                        onClick={handleDismiss}
                    >
                        Already done this? Skip it.
                    </button>
                ) : (
                    <div className="M_StepIndicator M_StepIndicator--small">
                        {[1, 2, 3].map((_, index) => (
                            <div 
                                key={index} 
                                className={`A_StepDot A_StepDot--small ${index <= currentStep - 1 ? 'A_StepDot--active' : ''}`}
                            >
                                {index <= currentStep - 1 && <div className="A_StepDot_Inner A_StepDot_Inner--small"></div>}
                            </div>
                        ))}
                    </div>
                )}

                <A_Button
                    text={currentStep === onboardingSteps.length - 1 ? "Get Started" : "Next"}
                    variant="primary-special"
                    onClick={handleNext}
                />
            </div>
        </div>
    
    </div>
  );
};

export default P_Onboarding; 