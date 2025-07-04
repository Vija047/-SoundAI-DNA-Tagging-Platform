import { useState } from 'react';
import { User, Settings, LogOut, HelpCircle, ArrowLeft } from 'lucide-react';

interface TopBarProps {
  onBackToLanding?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onBackToLanding }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className= "fixed top-0 left-16 right-0 h-12 bg-black/90 backdrop-blur-sm flex items-center justify-between px-6 z-40 border-b border-gray-800" >
    <div className="flex items-center space-x-4" >
      { onBackToLanding && (
        <button
            onClick={ onBackToLanding }
  className = "flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
    >
    <ArrowLeft className="w-4 h-4" />
      <span className="text-sm" > Back to Landing </span>
        </button>
        )}
<h1 className="text-white text-base font-medium" > DNA Making </h1>
  </div>

  <div div className = "relative" >
    <button
          onClick={ () => setIsDropdownOpen(!isDropdownOpen) }
className = "flex items-center space-x-2 hover:bg-gray-900 px-3 py-2 rounded-lg transition-colors duration-200"
  >
  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center" >
    <User className="w-4 h-4 text-white" />
      </div>
      </button>

{/* Dropdown Menu */ }
{
  isDropdownOpen && (
    <div className="absolute top-12 right-0 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg py-2" >
      <div className="px-4 py-2 border-b border-gray-700" >
        <p className="text-white text-sm font-medium" > John Doe </p>
          < p className = "text-gray-400 text-xs" > john@example.com</p>
            </div>
            < button className = "w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200 flex items-center space-x-2" >
              <Settings className="w-4 h-4" />
                <span>Settings </span>
                </button>
                < button className = "w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200 flex items-center space-x-2" >
                  <HelpCircle className="w-4 h-4" />
                    <span>Help </span>
                    </button>
                    < button className = "w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200 flex items-center space-x-2" >
                      <LogOut className="w-4 h-4" />
                        <span>Sign Out </span>
                          </button>
                          </div>
        )
}
</div>
  </div>
  );
};

export default TopBar;