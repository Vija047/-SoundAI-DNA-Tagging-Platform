import { useState } from 'react';
import StepIndicator from './StepIndicator';
import UploadAudioStep from './steps/UploadAudioStep';
import DNASensitivityStep from './steps/DNASensitivityStep';
import ProfileCreationStep from './steps/ProfileCreationStep';
import TaggingStep from './steps/TaggingStep';
import PublishStep from './steps/PublishStep';

const DNACreation = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { id: 'upload', title: 'Upload Audio', component: UploadAudioStep },
    { id: 'sensitivity', title: 'DNA Sensitivity', component: DNASensitivityStep },
    { id: 'profile', title: 'Profile Creation', component: ProfileCreationStep },
    { id: 'tagging', title: 'Tagging and Categorization', component: TaggingStep },
    { id: 'publish', title: 'Publish', component: PublishStep }
  ];

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className= "ml-16 min-h-screen bg-gradient-to-br from-black via-gray-900 to-black" >
    {/* Step Indicator */ }
    < StepIndicator
  steps = { steps }
  currentStep = { currentStep }
  onStepClick = { handleStepClick }
    />

    {/* Content Container */ }
    < div className = "pt-16 pb-8" >
      {
        steps.map((step, index) => {
          const StepComponent = step.component;
          return (
            <div
              key= { step.id }
          className = {`w-full transition-all duration-500 ${currentStep === index ? 'block' : 'hidden'
            }`
        }
            >
          <div className="min-h-screen flex items-center justify-center px-4 py-8" >
        <div className="w-full max-w-7xl mx-auto" >
        <StepComponent
                    onNext={ handleNextStep }
                    onPrev = { handlePrevStep }
                    isActive = { currentStep === index}
      />
      </div>
      </div>
      </div>
          );
        })}
</div>
  </div>
  );
};

export default DNACreation;