import React from 'react';
import { motion } from 'framer-motion';
import { Check, Share2, Download } from 'lucide-react';

interface PublishStepProps {
  onNext: () => void;
  onPrev: () => void;
  isActive: boolean;
}

const PublishStep: React.FC<PublishStepProps> = ({ isActive }) => {
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
      DNA Creation Complete!
        </h1>
        < p className = "text-gray-400 text-lg md:text-xl max-w-3xl mx-auto" >
          Your DNA has been successfully created and is ready to be used.
        </p>
            </div>

            < div className = "bg-gray-900/50 border border-gray-700 rounded-2xl md:rounded-3xl p-8 md:p-20 text-center" >
              <div className="w-24 h-24 md:w-32 md:h-32 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 md:mb-12" >
                <Check className="w-12 h-12 md:w-16 md:h-16 text-black" />
                  </div>

                  < h2 className = "text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8" >
                    Your DNA is now live!
                      </h2>

                      < p className = "text-gray-400 mb-8 md:mb-16 text-base md:text-xl max-w-3xl mx-auto leading-relaxed" >
                        Other creators can now discover and use your DNA to create amazing music.
                          You'll earn passive income whenever your DNA is used.
                            </p>

                            < div className = "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-lg mx-auto" >
                              <button className="bg-green-500 hover:bg-green-600 text-black px-6 md:px-12 py-4 md:py-5 rounded-xl font-bold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 md:space-x-3 text-sm md:text-lg" >
                                <Share2 className="w-5 h-5 md:w-6 md:h-6" />
                                  <span>Share DNA </span>
                                    </button>
                                    < button className = "bg-gray-700 hover:bg-gray-600 text-white px-6 md:px-12 py-4 md:py-5 rounded-xl font-bold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 md:space-x-3 text-sm md:text-lg border border-gray-600" >
                                      <Download className="w-5 h-5 md:w-6 md:h-6" />
                                        <span>Download </span>
                                        </button>
                                        </div>
                                        </div>
                                        </motion.div>
  );
};

export default PublishStep;