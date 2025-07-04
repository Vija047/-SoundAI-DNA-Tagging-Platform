import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Plus, Upload, User, Tag, Eye, DollarSign, Shield, Music } from 'lucide-react';

interface ProfileData {
  creatorName: string;
  description: string;
  tags: string[];
  dnaVisibility: string;
  price: string;
  license: string;
  tracks: string;
  becomePartner: string;
}

interface ProfileCreationStepProps {
  onNext: () => void;
  onPrev: () => void;
  isActive: boolean;
}

const ProfileCreationStep: React.FC<ProfileCreationStepProps> = ({ onNext, onPrev, isActive }) => {
  const [profileData, setProfileData] = useState<ProfileData>({
    creatorName: '',
    description: '',
    tags: [],
    dnaVisibility: 'Public',
    price: '$9.99',
    license: 'Distribution',
    tracks: 'Visible',
    becomePartner: 'Yes'
  });

  const [showDropdowns, setShowDropdowns] = useState<{ [key: string]: boolean }>({});
  const [newTag, setNewTag] = useState('');

  const toggleDropdown = (key: string) => {
    setShowDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const addTag = () => {
    if (newTag.trim() && !profileData.tags.includes(newTag.trim())) {
      setProfileData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setProfileData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const visibilityOptions = [
    { value: 'Public (Default)', label: 'Public (Default)', icon: Eye },
    { value: 'Private', label: 'Private', icon: Shield },
    { value: 'Draft', label: 'Draft', icon: Upload }
  ];

  const priceOptions = [
    { value: '$0.99', label: '$0.99' },
    { value: '$4.99', label: '$4.99' },
    { value: '$9.99', label: '$9.99' },
    { value: '$19.99', label: '$19.99' },
    { value: 'Custom', label: 'Custom' }
  ];

  const licenseOptions = [
    { value: 'Distribution', label: 'Distribution' },
    { value: 'Streaming', label: 'Streaming' },
    { value: 'Commercial', label: 'Commercial' },
    { value: 'Educational', label: 'Educational' }
  ];

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (profileData.creatorName.trim() && profileData.description.trim()) {
      onNext();
    }
  };

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
      Create Your DNA Profile
        </h1>
        < p className = "text-gray-400 text-lg md:text-xl max-w-3xl mx-auto" >
          Set up your DNA profile to help other creators discover and use your unique sound.
        </p>
            </div>

            < div className = "bg-gray-900/50 border border-gray-700 rounded-3xl p-8 md:p-12" >
              <div className="grid md:grid-cols-2 gap-8" >
                {/* Left Column */ }
                < div className = "space-y-6" >
                  {/* Creator Name */ }
                  < div >
                  <label className="flex items-center text-lg font-medium text-white mb-3" >
                    <User className="w-5 h-5 mr-2" />
                      Creator Name
                        </label>
                        < input
type = "text"
value = { profileData.creatorName }
onChange = {(e) => handleInputChange('creatorName', e.target.value)}
placeholder = "e.g., Skrillex, Coldplay"
className = "w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
  />
  </div>

{/* Description */ }
<div>
  <label className="flex items-center text-lg font-medium text-white mb-3" >
    <Music className="w-5 h-5 mr-2" />
      Description
      </label>
      < textarea
value = { profileData.description }
onChange = {(e) => handleInputChange('description', e.target.value)}
placeholder = "Describe your musical style and what makes your DNA unique..."
rows = { 4}
maxLength = { 300}
className = "w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors resize-none"
  />
  <p className="text-gray-400 text-sm mt-2" >
    { profileData.description.length } / 300 characters
      </p>
      </div>

{/* Tags */ }
<div>
  <label className="flex items-center text-lg font-medium text-white mb-3" >
    <Tag className="w-5 h-5 mr-2" />
      Tags
      </label>
      < div className = "flex flex-wrap gap-2 mb-3" >
      {
        profileData.tags.map((tag, index) => (
          <span
                    key= { index }
                    className = "bg-green-500 text-black px-3 py-1 rounded-full text-sm font-medium flex items-center"
          >
          { tag }
          < button
                      onClick = {() => removeTag(tag)}
className = "ml-2 text-black hover:text-red-600 transition-colors"
  >
                      ×
</button>
  </span>
                ))}
</div>
  < div className = "flex gap-2" >
    <input
                  type="text"
value = { newTag }
onChange = {(e) => setNewTag(e.target.value)}
onKeyPress = {(e) => e.key === 'Enter' && addTag()}
placeholder = "Add a tag..."
className = "flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
  />
  <button
                  onClick={ addTag }
className = "px-4 py-2 bg-green-500 hover:bg-green-600 text-black rounded-lg font-medium transition-colors"
  >
  <Plus className="w-4 h-4" />
    </button>
    </div>
    </div>
    </div>

{/* Right Column */ }
<div className="space-y-6" >
  {/* DNA Visibility */ }
  < div >
  <label className="flex items-center text-lg font-medium text-white mb-3" >
    <Eye className="w-5 h-5 mr-2" />
      DNA Visibility
        </label>
        < div className = "relative" >
          <button
                  onClick={ () => toggleDropdown('visibility') }
className = "w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white text-left flex items-center justify-between hover:border-green-500 transition-colors"
  >
  <span>{ profileData.dnaVisibility } </span>
  < ChevronDown className = "w-4 h-4" />
    </button>
{
  showDropdowns.visibility && (
    <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-600 rounded-lg shadow-lg" >
    {
      visibilityOptions.map((option) => (
        <button
                        key= { option.value }
                        onClick = {() => {
        handleInputChange('dnaVisibility', option.value);
      toggleDropdown('visibility');
    }
}
className = "w-full px-4 py-3 text-left text-white hover:bg-gray-700 transition-colors flex items-center"
  >
  <option.icon className="w-4 h-4 mr-2" />
    { option.label }
    </button>
                    ))}
</div>
                )}
</div>
  </div>

{/* Price */ }
<div>
  <label className="flex items-center text-lg font-medium text-white mb-3" >
    <DollarSign className="w-5 h-5 mr-2" />
      Price
      </label>
      < div className = "relative" >
        <button
                  onClick={ () => toggleDropdown('price') }
className = "w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white text-left flex items-center justify-between hover:border-green-500 transition-colors"
  >
  <span>{ profileData.price } </span>
  < ChevronDown className = "w-4 h-4" />
    </button>
{
  showDropdowns.price && (
    <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-600 rounded-lg shadow-lg" >
    {
      priceOptions.map((option) => (
        <button
                        key= { option.value }
                        onClick = {() => {
        handleInputChange('price', option.value);
      toggleDropdown('price');
    }
}
className = "w-full px-4 py-3 text-left text-white hover:bg-gray-700 transition-colors"
  >
  { option.label }
  </button>
                    ))}
</div>
                )}
</div>
  </div>

{/* License */ }
<div>
  <label className="flex items-center text-lg font-medium text-white mb-3" >
    <Shield className="w-5 h-5 mr-2" />
      License Type
        </label>
        < div className = "relative" >
          <button
                  onClick={ () => toggleDropdown('license') }
className = "w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white text-left flex items-center justify-between hover:border-green-500 transition-colors"
  >
  <span>{ profileData.license } </span>
  < ChevronDown className = "w-4 h-4" />
    </button>
{
  showDropdowns.license && (
    <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-600 rounded-lg shadow-lg" >
    {
      licenseOptions.map((option) => (
        <button
                        key= { option.value }
                        onClick = {() => {
        handleInputChange('license', option.value);
      toggleDropdown('license');
    }
}
className = "w-full px-4 py-3 text-left text-white hover:bg-gray-700 transition-colors"
  >
  { option.label }
  </button>
                    ))}
</div>
                )}
</div>
  </div>

{/* Become Partner */ }
<div>
  <label className="flex items-center text-lg font-medium text-white mb-3" >
    <User className="w-5 h-5 mr-2" />
      Become Partner
        </label>
        < div className = "flex space-x-4" >
          <button
                  onClick={ () => handleInputChange('becomePartner', 'Yes') }
className = {`flex-1 px-4 py-3 rounded-xl font-medium transition-colors ${profileData.becomePartner === 'Yes'
    ? 'bg-green-500 text-black'
    : 'bg-gray-800 text-white border border-gray-600'
  }`}
                >
  Yes
  </button>
  < button
onClick = {() => handleInputChange('becomePartner', 'No')}
className = {`flex-1 px-4 py-3 rounded-xl font-medium transition-colors ${profileData.becomePartner === 'No'
    ? 'bg-green-500 text-black'
    : 'bg-gray-800 text-white border border-gray-600'
  }`}
                >
  No
  </button>
  </div>
  </div>
  </div>
  </div>
  </div>

{/* Action Buttons */ }
<div className="flex justify-between mt-8" >
  <button
          onClick={ onPrev }
className = "px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl font-medium transition-all duration-200"
  >
  Previous
  </button>

  < button
onClick = { handleNext }
disabled = {!profileData.creatorName.trim() || !profileData.description.trim()}
className = {`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${profileData.creatorName.trim() && profileData.description.trim()
    ? 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-lg'
    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
  }`}
        >
  Continue to Tagging
    </button>
    </div>
    </motion.div>
  );
};

export default ProfileCreationStep;