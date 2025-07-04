import React from 'react';

interface Step {
  id: string;
  title: string;
  component: React.ComponentType<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (stepIndex: number) => void;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, onStepClick }) => {
  const stepTitles = [
    'Step 1: Upload Audio',
    'Step 2: DNA Sensitivity',
    'Step 3: Profile Creation',
    'Step 4: Tagging and Categorization',
    'Publish'
  ];

  return (
    <div className= "fixed top-12 left-1/2 transform -translate-x-1/2 z-30" >
    <div className="flex items-center space-x-1 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-full px-3 py-2 shadow-lg" >
    {
      stepTitles.map((title, index) => (
        <React.Fragment key= { index } >
        <button
              onClick={() => onStepClick(index)}
className = {`px-3 py-2 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap ${index === currentStep
    ? 'bg-green-500 text-black shadow-lg'
    : index < currentStep
      ? 'bg-gray-700 text-white hover:bg-gray-600'
      : 'bg-transparent text-gray-400 hover:text-white hover:bg-gray-800'
  }`}
            >
  { title }
  </button>
{
  index < stepTitles.length - 1 && (
    <div className="w-px h-4 bg-gray-600 mx-1" > </div>
            )
}
</React.Fragment>
        ))}
</div>
  </div>
  );
};

export default StepIndicator;