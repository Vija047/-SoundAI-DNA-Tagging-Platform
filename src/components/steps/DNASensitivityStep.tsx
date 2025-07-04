import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Info, Zap, Shield, Target } from 'lucide-react';

interface DNASensitivityStepProps {
  onNext: () => void;
  onPrev: () => void;
  isActive: boolean;
}

const DNASensitivityStep: React.FC<DNASensitivityStepProps> = ({ onNext, onPrev, isActive }) => {
  const [sensitivityValue, setSensitivityValue] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSensitivityValue(parseInt(e.target.value));
  };

  const handleSetSensitivity = () => {
    onNext();
  };

  const getSensitivityLabel = (value: number) => {
    if (value <= 33) return 'Least Sensitive';
    if (value <= 66) return 'Recommended';
    return 'Highly Sensitive';
  };

  const getSensitivityDescription = (value: number) => {
    if (value <= 33) return 'Generic Genre DNAs - Broader appeal, easier to use';
    if (value <= 66) return 'Balanced approach - Good mix of uniqueness and usability';
    return 'Niche Genre DNAs - Very specific style, unique characteristics';
  };

  const getSensitivityColor = (value: number) => {
    if (value <= 33) return 'from-green-400 to-blue-500';
    if (value <= 66) return 'from-blue-400 to-purple-500';
    return 'from-purple-400 to-pink-500';
  };

  const getSensitivityIcon = (value: number) => {
    if (value <= 33) return Shield;
    if (value <= 66) return Target;
    return Zap;
  };

  const SensitivityIcon = getSensitivityIcon(sensitivityValue);

  return (
    <motion.div
      initial= {{ opacity: 0, y: 20 }
}
animate = {{ opacity: isActive ? 1 : 0.7, y: 0 }}
transition = {{ duration: 0.6 }}
className = "w-full max-w-6xl mx-auto px-4 py-8"
  >
  <div className="text-center mb-12" >
    <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 tracking-wide" >
      Set DNA Sensitivity
        </h1>
        < p className = "text-gray-400 text-lg md:text-xl max-w-3xl mx-auto" >
          Adjust how specific or generic your DNA should be.This affects how other creators can use your DNA.
        </p>
            </div>

            < div className = "bg-gray-900/50 border border-gray-700 rounded-3xl p-8 md:p-12 mb-8" >
              {/* Sensitivity Slider */ }
              < div className = "mb-12" >
                <div className="flex items-center justify-center mb-8" >
                  <div className={ `w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br ${getSensitivityColor(sensitivityValue)} rounded-full flex items-center justify-center` }>
                    <SensitivityIcon className="w-8 h-8 md:w-12 md:h-12 text-white" />
                      </div>
                      </div>

                      < div className = "text-center mb-8" >
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-2" >
                          { getSensitivityLabel(sensitivityValue) }
                          </h2>
                          < p className = "text-gray-400 text-base md:text-lg" >
                            { getSensitivityDescription(sensitivityValue) }
                            </p>
                            </div>

                            < div className = "relative" >
                              <input
              type="range"
min = "0"
max = "100"
value = { sensitivityValue }
onChange = { handleSliderChange }
className = "w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
style = {{
  background: `linear-gradient(to right, #10b981 0%, #10b981 ${sensitivityValue}%, #374151 ${sensitivityValue}%, #374151 100%)`
}}
            />
  < div className = "flex justify-between text-xs text-gray-400 mt-2" >
    <span>0 </span>
    < span > 25 </span>
    < span > 50 </span>
    < span > 75 </span>
    < span > 100 </span>
    </div>
    </div>

    < div className = "text-center mt-4" >
      <span className="text-3xl font-bold text-white" > { sensitivityValue } % </span>
        </div>
        </div>

{/* Sensitivity Options */ }
<div className="grid md:grid-cols-3 gap-6 mb-8" >
  <div className={
    `p-6 rounded-2xl border-2 transition-all cursor-pointer ${sensitivityValue <= 33
      ? 'border-green-500 bg-green-500/10'
      : 'border-gray-600 bg-gray-800/30'
    }`
}
onClick = {() => setSensitivityValue(20)}>
  <div className="flex items-center mb-4" >
    <Shield className="w-6 h-6 text-green-400 mr-2" />
      <h3 className="text-lg font-bold text-white" > Least Sensitive </h3>
        </div>
        < p className = "text-gray-400 text-sm" >
          Creates broader, more generic DNA that's easier for others to use and adapt.
            </p>
            </div>

            < div className = {`p-6 rounded-2xl border-2 transition-all cursor-pointer ${sensitivityValue > 33 && sensitivityValue <= 66
                ? 'border-blue-500 bg-blue-500/10'
                : 'border-gray-600 bg-gray-800/30'
              }`}
onClick = {() => setSensitivityValue(50)}>
  <div className="flex items-center mb-4" >
    <Target className="w-6 h-6 text-blue-400 mr-2" />
      <h3 className="text-lg font-bold text-white" > Recommended </h3>
        </div>
        < p className = "text-gray-400 text-sm" >
          Balanced approach that maintains your unique style while being accessible.
            </p>
            </div>

            < div className = {`p-6 rounded-2xl border-2 transition-all cursor-pointer ${sensitivityValue > 66
                ? 'border-purple-500 bg-purple-500/10'
                : 'border-gray-600 bg-gray-800/30'
              }`}
onClick = {() => setSensitivityValue(80)}>
  <div className="flex items-center mb-4" >
    <Zap className="w-6 h-6 text-purple-400 mr-2" />
      <h3 className="text-lg font-bold text-white" > Highly Sensitive </h3>
        </div>
        < p className = "text-gray-400 text-sm" >
          Preserves very specific characteristics, creating highly unique DNA.
            </p>
            </div>
            </div>

{/* Info Box */ }
<div className="bg-gray-800/50 border border-gray-600 rounded-2xl p-6 mb-8" >
  <div className="flex items-start space-x-3" >
    <Info className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
      <div>
      <h4 className="text-white font-medium mb-2" > How DNA Sensitivity Works: </h4>
        < ul className = "text-gray-400 text-sm space-y-1" >
          <li>• <strong>Lower sensitivity: </strong> Creates more adaptable DNA that works with various styles</li >
            <li>• <strong>Higher sensitivity: </strong> Preserves specific nuances and unique characteristics</li >
              <li>• <strong>Recommended setting: </strong> Balances uniqueness with usability for most creators</li >
                </ul>
                </div>
                </div>
                </div>
                </div>

{/* Action Buttons */ }
<div className="flex justify-between" >
  <button
          onClick={ onPrev }
className = "px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl font-medium transition-all duration-200"
  >
  Previous
  </button>

  < div className = "flex space-x-4" >
    <button
            onClick={ handleSetSensitivity }
className = "px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
  >
  <Sliders className="w-5 h-5" />
    <span>Set Sensitivity </span>
      </button>

      < button
onClick = { onNext }
className = "px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl font-medium transition-all duration-200"
  >
  Skip
  </button>
  </div>
  </div>
  </motion.div>
  );
};

export default DNASensitivityStep;