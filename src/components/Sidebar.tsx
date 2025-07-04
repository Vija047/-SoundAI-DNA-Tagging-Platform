import React, { useState } from 'react';
import { Home, Search, Library, Volume2, Settings, User, PlusCircle, Target, Headphones } from 'lucide-react';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('DNA');

  const sidebarItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'target', icon: Target, label: 'Explore' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'library', icon: Library, label: 'Library' },
    { id: 'headphones', icon: Headphones, label: 'Audio' },
    { id: 'create', icon: PlusCircle, label: 'Create' },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-16 bg-black flex flex-col items-center py-4 z-50">
      {/* Logo */}
      <div className="mb-8 p-2">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <Volume2 className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col space-y-6">
        {sidebarItems.map((item) => (
          <div key={item.id} className="group relative">
            <button
              onClick={() => setActiveItem(item.id)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                activeItem === item.id
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-500 hover:text-white hover:bg-gray-900'
              }`}
            >
              <item.icon className="w-5 h-5" />
            </button>
            
            {/* Tooltip */}
            <div className="absolute left-14 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
              <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow-lg border border-gray-700 whitespace-nowrap">
                {item.label}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-800 border-l border-b border-gray-700 rotate-45"></div>
              </div>
            </div>
          </div>
        ))}
      </nav>

      {/* DNA Indicator */}
      <div className="mb-4">
        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
          <span className="text-black text-xs font-bold">DNA</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;