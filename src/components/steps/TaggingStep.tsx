import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Music, X, CheckCircle, FileAudio, AlertCircle } from 'lucide-react';

interface UploadAudioStepProps {
  onNext: () => void;
  onPrev: () => void;
  isActive: boolean;
}

const UploadAudioStep: React.FC<UploadAudioStepProps> = ({ onNext, isActive }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    const audioFiles = files.filter(file => file.type.startsWith('audio/'));
    setUploadedFiles(prev => [...prev, ...audioFiles]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const audioFiles = files.filter(file => file.type.startsWith('audio/'));
    setUploadedFiles(prev => [...prev, ...audioFiles]);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    if (uploadedFiles.length > 0) {
      setIsUploading(true);
      // Simulate upload process
      setTimeout(() => {
        setIsUploading(false);
        onNext();
      }, 2000);
    }
  };

  const formatFileSize = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 Bytes';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
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
      Upload Your Audio
        </h1>
        < p className = "text-gray-400 text-lg md:text-xl max-w-3xl mx-auto" >
          Upload your audio tracks to create your unique Sonic DNA.Our AI will analyze your music to capture its essence.
        </p>
            </div>

{/* Upload Area */ }
<div className="bg-gray-900/50 border border-gray-700 rounded-3xl p-8 md:p-12 mb-8" >
  <div
          className={
  `border-2 border-dashed rounded-2xl p-12 md:p-20 text-center transition-all duration-300 ${isDragOver
    ? 'border-green-500 bg-green-500/10 scale-105'
    : 'border-gray-600 bg-gray-800/30'
  }`
}
onDragOver = { handleDragOver }
onDragLeave = { handleDragLeave }
onDrop = { handleDrop }
  >
  {/* Upload Icon */ }
  < div className = "mb-8" >
    <div className="w-20 h-20 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center" >
      <Upload className="w-10 h-10 md:w-16 md:h-16 text-white" />
        </div>
        </div>

{/* Upload Text */ }
<div className="mb-8" >
  <h4 className="text-xl md:text-2xl font-bold text-white mb-4" >
    Choose audio file(s) or drag them here
      </h4>
      < p className = "text-gray-400 text-sm md:text-base mb-4" >
        Supported Formats: MP3, WAV, FLAC, AAC, M4A
          </p>
          < p className = "text-gray-500 text-xs md:text-sm" >
            Maximum file size: 50MB per file
              </p>
              </div>

{/* Upload Button */ }
<button
            onClick={ handleUploadClick }
className = "bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
  >
  Upload audio file(s)
    </button>

{/* Hidden File Input */ }
<input
            ref={ fileInputRef }
type = "file"
multiple
accept = "audio/*"
onChange = { handleFileSelect }
className = "hidden"
  />
  </div>
  </div>

{/* Uploaded Files Display */ }
{
  uploadedFiles.length > 0 && (
    <motion.div
          initial={ { opacity: 0, y: 20 } }
  animate = {{ opacity: 1, y: 0 }
}
transition = {{ duration: 0.5 }}
className = "bg-gray-900/50 border border-gray-700 rounded-3xl p-6 md:p-8 mb-8"
  >
  <div className="flex items-center justify-between mb-6" >
    <h4 className="text-lg md:text-xl font-bold text-white flex items-center" >
      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 mr-2" />
        Uploaded Files({ uploadedFiles.length })
          </h4>
          < button
onClick = {() => setUploadedFiles([])}
className = "text-gray-400 hover:text-white transition-colors"
  >
  Clear All
    </button>
    </div>

    < div className = "grid gap-4" >
    {
      uploadedFiles.map((file, index) => (
        <motion.div
                key= { index }
                initial = {{ opacity: 0, x: -20 }}
animate = {{ opacity: 1, x: 0 }}
transition = {{ duration: 0.3, delay: index * 0.1 }}
className = "bg-gray-800/50 rounded-xl p-4 flex items-center justify-between"
  >
  <div className="flex items-center space-x-3" >
    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center" >
      <FileAudio className="w-5 h-5 text-white" />
        </div>
        < div >
        <p className="text-white font-medium" > { file.name } </p>
          < p className = "text-gray-400 text-sm" > { formatFileSize(file.size) } </p>
            </div>
            </div>
            < button
onClick = {() => removeFile(index)}
className = "text-gray-400 hover:text-red-400 transition-colors p-1"
  >
  <X className="w-4 h-4" />
    </button>
    </motion.div>
            ))}
</div>
  </motion.div>
      )}

{/* Upload Tips */ }
<div className="bg-gray-900/30 border border-gray-700 rounded-2xl p-6 mb-8" >
  <div className="flex items-start space-x-3" >
    <AlertCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
      <div>
      <h4 className="text-white font-medium mb-2" > Tips for better DNA creation: </h4>
        < ul className = "text-gray-400 text-sm space-y-1" >
          <li>• Upload high - quality audio files(at least 320kbps for MP3)</li>
            <li>• Include diverse tracks that represent your musical style </li>
              <li>• Minimum 3 - 5 tracks recommended for accurate DNA analysis </li>
                <li>• Ensure you own the rights to all uploaded content </li>
                  </ul>
                  </div>
                  </div>
                  </div>

{/* Terms */ }
<div className="text-center mb-8" >
  <p className="text-gray-400 text-sm" >
    By uploading files, you agree that you have the ownership and authority to upload them.{ ' ' }
<button className="text-blue-400 underline hover:text-blue-300 transition-colors" >
  Terms of Service
    </button>
    </p>
    </div>

{/* Action Buttons */ }
<div className="flex justify-center space-x-4" >
  <button
          onClick={ handleNext }
disabled = { uploadedFiles.length === 0 }
className = {`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${uploadedFiles.length > 0
    ? 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-lg'
    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
  }`}
        >
{
  isUploading?(
            <>
  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" > </div>
    < span > Processing...</span>
      </>
          ) : (
  <>
  <span>Continue to DNA Analysis </span>
    < Music className = "w-5 h-5" />
      </>
          )}
</button>
  </div>
  </motion.div>
  );
};

export default UploadAudioStep;