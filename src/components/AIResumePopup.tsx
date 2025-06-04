import React, { useState, useRef } from "react";
import { X, Upload, FileText, CheckCircle, Sparkle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AIResumePopup = ({ onClose, isFirstVisit }) => {
  const [stage, setStage] = useState("upload"); // upload, analyzing, complete
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setStage("analyzing");

      // Simulate analysis (would be replaced with actual API call)
      setTimeout(() => {
        setStage("complete");
      }, 3000);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleViewJobs = () => {
    // Simulate redirecting to filtered jobs
    navigate("/jobs?skills=react,javascript&experience=3-5");
    onClose();
  };

  // Conditional class for animation based on if it's first visit
  const popupClasses = isFirstVisit
    ? "fixed inset-0 z-50 flex items-center justify-center"
    : "fixed inset-0 z-50 flex items-center justify-center fade-in";

  return (
    <div className={popupClasses}>
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 relative z-10 overflow-hidden">
        {/* Purple gradient header */}
        <div className="bg-blue-600 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
            aria-label="Close popup"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="flex items-center space-x-2 mb-2">
            <Sparkle className="h-6 w-6" />
            <h2 className="text-xl font-bold">AI-Powered Job Matching</h2>
          </div>

          <p className="text-blue-100">
            Upload your resume and our AI will find the perfect jobs matching
            your skills and experience.
          </p>
        </div>

        <div className="p-6">
          {stage === "upload" && (
            <div className="text-center">
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-4 cursor-pointer hover:border-purple-500 transition-colors"
                onClick={handleUploadClick}
              >
                <Upload className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                <p className="text-gray-600 mb-1">
                  Drag and drop your resume or click to browse
                </p>
                <p className="text-sm text-gray-500">
                  Supported formats: PDF, DOCX
                </p>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.docx"
                  className="hidden"
                />
              </div>

              <button
                className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-md hover:shadow-lg transition-all duration-200"
                onClick={handleUploadClick}
              >
                Upload Resume
              </button>
            </div>
          )}

          {stage === "analyzing" && (
            <div className="text-center py-4">
              <div className="relative mx-auto w-24 h-24 mb-4">
                <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-transparent border-t-purple-600 rounded-full animate-spin"></div>
                <FileText className="absolute inset-0 m-auto h-10 w-10 text-gray-600" />
              </div>

              <h3 className="text-lg font-medium text-gray-800 mb-1">
                Analyzing your resume...
              </h3>
              <p className="text-gray-600 mb-2">{fileName}</p>
              <p className="text-sm text-gray-500">
                Our AI is identifying your skills and experience to find the
                best matches
              </p>
            </div>
          )}

          {stage === "complete" && (
            <div className="text-center py-4">
              <div className="mx-auto w-16 h-16 mb-4 text-green-500">
                <CheckCircle className="h-16 w-16" />
              </div>

              <h3 className="text-lg font-medium text-gray-800 mb-3">
                Analysis Complete!
              </h3>

              <div className="bg-gray-100 rounded-lg p-4 mb-4 text-left">
                <h4 className="font-medium text-gray-700 mb-2">
                  Recommended job categories:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded">
                    Frontend Development
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-1 rounded">
                    React.js
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-1 rounded">
                    UI/UX
                  </span>
                </div>
              </div>

              <button
                className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-md hover:shadow-lg transition-all duration-200"
                onClick={handleViewJobs}
              >
                View Matching Jobs
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIResumePopup;
