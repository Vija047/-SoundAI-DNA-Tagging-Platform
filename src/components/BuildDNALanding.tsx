import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Upload, Sparkles, Users, Coins, ChevronRight, CheckCircle, AlertCircle } from 'lucide-react';

interface BuildDNALandingProps {
    onStartBuilding: () => void;
}

const BuildDNALanding: React.FC<BuildDNALandingProps> = ({ onStartBuilding }) => {
    const [profileClaimed, setProfileClaimed] = useState(false);
    const [isClaimingProfile, setIsClaimingProfile] = useState(false);

    const handleClaimProfile = async () => {
        setIsClaimingProfile(true);

        // Simulate profile claiming process
        setTimeout(() => {
            setProfileClaimed(true);
            setIsClaimingProfile(false);
            // Show success notification
            setTimeout(() => {
                onStartBuilding();
            }, 1500);
        }, 2000);
    };

    const handleUploadAudio = () => {
        // Simulate file upload
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'audio/*';
        input.multiple = true;
        input.onchange = (e) => {
            const files = (e.target as HTMLInputElement).files;
            if (files && files.length > 0) {
                // Start the DNA building process
                onStartBuilding();
            }
        };
        input.click();
    };

    return (
        <div className= "min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white" >
        {/* Animated Background Elements */ }
        < div className = "absolute inset-0 overflow-hidden" >
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse" > </div>
                < div className = "absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" > </div>
                    < div className = "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000" > </div>
                        </div>
    {/* Header */ }
    <motion.div
                initial={ { opacity: 0, y: -20 } }
    animate = {{ opacity: 1, y: 0 }
}
transition = {{ duration: 0.8 }}
className = "relative z-10 px-6 py-8"
    >
    <div className="max-w-6xl mx-auto" >
        <div className="flex items-center space-x-4 mb-4" >
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center" >
                <Music className="w-6 h-6 text-white" />
                    </div>
                    < h1 className = "text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent" >
                        BUILD DNA
                            </h1>
                            </div>
                            < p className = "text-gray-400 text-lg max-w-4xl leading-relaxed" >
                                Create your unique Sonic DNA and earn passive income as your DNA is used by other creators around the world.{ ' ' }
<button className="text-green-400 underline hover:text-green-300 transition-colors font-medium" >
    Learn more about DNA creation
        </button>
        </p>
        </div>
        </motion.div>

{/* Stats Bar */ }
<motion.div
        initial={ { opacity: 0, y: 20 } }
animate = {{ opacity: 1, y: 0 }}
transition = {{ duration: 0.8, delay: 0.2 }}
className = "relative z-10 px-6 mb-12"
    >
    <div className="max-w-6xl mx-auto" >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center" >
                <div className="flex items-center justify-center mb-2" >
                    <Users className="w-6 h-6 text-green-400 mr-2" />
                        <span className="text-2xl font-bold text-white" > 10k + </span>
                            </div>
                            < p className = "text-gray-400 text-sm" > Active Creators </p>
                                </div>
                                < div className = "bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center" >
                                    <div className="flex items-center justify-center mb-2" >
                                        <Coins className="w-6 h-6 text-yellow-400 mr-2" />
                                            <span className="text-2xl font-bold text-white" > $2M + </span>
                                                </div>
                                                < p className = "text-gray-400 text-sm" > Creator Earnings </p>
                                                    </div>
                                                    < div className = "bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center" >
                                                        <div className="flex items-center justify-center mb-2" >
                                                            <Music className="w-6 h-6 text-blue-400 mr-2" />
                                                                <span className="text-2xl font-bold text-white" > 50k + </span>
                                                                    </div>
                                                                    < p className = "text-gray-400 text-sm" > DNA Creations </p>
                                                                        </div>
                                                                        </div>
                                                                        </div>
                                                                        </motion.div>

{/* Main Content */ }
<div className="relative z-10 px-6 pb-8" >
    <div className="max-w-6xl mx-auto space-y-8" >
        {/* Creator Identity Section */ }
        < motion.div
initial = {{ opacity: 0, y: 20 }}
animate = {{ opacity: 1, y: 0 }}
transition = {{ duration: 0.8, delay: 0.4 }}
className = "bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 md:p-12 relative overflow-hidden"
    >
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-2xl" > </div>

        < div className = "relative" >
            <div className="flex items-center mb-6" >
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center mr-4" >
                    <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        < h2 className = "text-3xl font-bold text-white" >
                            Verify your creator identity
                                </h2>
                                < ChevronRight className = "w-8 h-8 text-gray-400 mx-4" />
                                    <span className="text-2xl font-bold text-green-400" > Unlock your DNA </span>
                                        </div>

                                        < p className = "text-gray-400 mb-8 text-lg leading-relaxed max-w-4xl" >
                                            Simply claim your profile, and we'll build your DNA automatically using AI. Are you a creator with music already on Spotify, YouTube, or other platforms?
                                                </p>

                                                < div className = "flex flex-wrap gap-4" >
                                                    <button
                  onClick={ handleClaimProfile }
disabled = { profileClaimed || isClaimingProfile}
className = {`px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 ${profileClaimed
    ? 'bg-green-600 text-white cursor-not-allowed'
    : isClaimingProfile
        ? 'bg-green-600/50 text-white cursor-not-allowed'
        : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-green-500/25'
    }`}
                >
{
    isClaimingProfile?(
                    <>
    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" > </div>
        < span > Claiming Profile...</span>
            </>
                  ) : profileClaimed ? (
    <>
    <CheckCircle className= "w-5 h-5" />
    <span>Profile Claimed ✓</span>
        </>
                  ) : (
    <>
    <Sparkles className= "w-5 h-5" />
    <span>Claim your profile </span>
        </>
                  )}
</button>

    < button
onClick = { onStartBuilding }
className = "px-8 py-4 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 border border-gray-600"
    >
    This doesn't apply to me
        </button>
        </div>
        </div>
        </motion.div>

{/* Upload Audio Section */ }
<motion.div
            initial={ { opacity: 0, y: 20 } }
animate = {{ opacity: 1, y: 0 }}
transition = {{ duration: 0.8, delay: 0.6 }}
className = "bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 md:p-12 relative overflow-hidden"
    >
    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-2xl" > </div>

        < div className = "relative" >
            <div className="flex items-center mb-6" >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mr-4" >
                    <Upload className="w-6 h-6 text-white" />
                        </div>
                        < h2 className = "text-3xl font-bold text-white" >
                            Build DNA by Uploading Audio Tracks
                                </h2>
                                </div>

                                < p className = "text-gray-400 mb-8 text-lg leading-relaxed" >
                                    Upload your music and build your Sonic DNA.Please note that by default all DNAs remain private until you choose to publish them.
              </p>

                                        < div className = "grid md:grid-cols-2 gap-6 mb-8" >
                                            <div className="bg-gray-900/50 border border-gray-600 rounded-2xl p-6" >
                                                <div className="flex items-start space-x-4" >
                                                    <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mt-1 flex-shrink-0" > </div>
                                                        < div >
                                                        <h3 className="font-bold text-white text-lg mb-2" > Build with AI </h3>
                                                        < p className = "text-gray-400 text-sm leading-relaxed" >
                                                            AI will automatically take care of captions, categorizations, and tags.Perfect for quick and efficient DNA creation.
                      </p>
                                                                </div>
                                                                </div>
                                                                </div>

                                                                < div className = "bg-gray-900/50 border border-gray-600 rounded-2xl p-6" >
                                                                    <div className="flex items-start space-x-4" >
                                                                        <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-1 flex-shrink-0" > </div>
                                                                            < div >
                                                                            <h3 className="font-bold text-white text-lg mb-2" > Build Manually </h3>
                                                                                < p className = "text-gray-400 text-sm leading-relaxed" >
                                                                                    You'll have complete control over captions, categorizations, and tags. Ideal for precise customization.
                                                                                        </p>
                                                                                        </div>
                                                                                        </div>
                                                                                        </div>
                                                                                        </div>

                                                                                        < button
onClick = { handleUploadAudio }
className = "px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-lg hover:shadow-purple-500/25"
    >
    <Upload className="w-5 h-5" />
        <span>Upload audio files </span>
            </button>
            </div>
            </motion.div>

{/* Features Grid */ }
<motion.div
            initial={ { opacity: 0, y: 20 } }
animate = {{ opacity: 1, y: 0 }}
transition = {{ duration: 0.8, delay: 0.8 }}
className = "grid md:grid-cols-3 gap-6"
    >
    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center" >
        <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4" >
            <Music className="w-6 h-6 text-white" />
                </div>
                < h3 className = "text-xl font-bold text-white mb-2" > AI - Powered Analysis </h3>
                    < p className = "text-gray-400 text-sm" > Advanced AI analyzes your music to create unique DNA signatures </p>
                        </div>

                        < div className = "bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center" >
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4" >
                                <Coins className="w-6 h-6 text-white" />
                                    </div>
                                    < h3 className = "text-xl font-bold text-white mb-2" > Passive Income </h3>
                                        < p className = "text-gray-400 text-sm" > Earn money whenever other creators use your DNA </p>
                                            </div>

                                            < div className = "bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center" >
                                                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4" >
                                                    <Users className="w-6 h-6 text-white" />
                                                        </div>
                                                        < h3 className = "text-xl font-bold text-white mb-2" > Global Reach </h3>
                                                            < p className = "text-gray-400 text-sm" > Connect with creators worldwide and expand your influence </p>
                                                                </div>
                                                                </motion.div>

{/* Footer Info */ }
<motion.div
            initial={ { opacity: 0, y: 20 } }
animate = {{ opacity: 1, y: 0 }}
transition = {{ duration: 0.8, delay: 1.0 }}
className = "text-center py-8"
    >
    <p className="text-gray-500 text-sm mb-4" >
        Build your unique DNA and start earning from your creative work
            </p>
            < div className = "flex items-center justify-center space-x-2 text-xs text-gray-600" >
                <AlertCircle className="w-4 h-4" />
                    <span>All uploads are secure and encrypted </span>
                        </div>
                        </motion.div>
                        </div>
                        </div>
                        </div>
  );
};

export default BuildDNALanding;
