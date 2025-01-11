import React, { useState } from 'react';
import { Brain, Search, Bell, Heart, Database, Code, TestTube2, HelpCircle, Settings, LifeBuoy } from 'lucide-react';
import { ModelTable } from './components/ModelTable';
import { NewModelDialog } from './components/NewModelDialog';
import type { AIModel, NewModelFormData } from './types';
import Aventisia from "./images/Aventisia.png";
import Label from "./images/Label.svg";
import Model from "./images/Model.svg";
import Test from "./images/Test.svg";
import Setting from "./images/Setting.svg";
import Support from "./images/Support.svg";
import ModelLib from "./images/ModelLib.svg";

// Dummy data for the table
const dummyData: AIModel[] = Array.from({ length: 25 }, (_, i) => ({
  id: `model-${i + 1}`,
  name: `Model ${i + 1}`,
  description: `Description for Model ${i + 1}`,
  type: ['Classification', 'Regression', 'Clustering'][i % 3],
  status: ['active', 'inactive', 'training'][i % 3] as AIModel['status'],
  createdAt: new Date(2024, 0, i + 1).toISOString(),
  accuracy: Math.round(Math.random() * 30 + 70), // Random accuracy between 70-100
}));

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSaveNewModel = (data: NewModelFormData) => {
    console.log('New model data:', data);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            {/* <Brain className="h-8 w-8 text-indigo-600" /> */}
            {/* <span className="text-xl font-bold"><img src="Aventisia.png" alt="" /></span> */}
            <img
        className="h-15 w-15"
        src={Aventisia}
        alt="Aventisia"
      />
        {/* alt="Profile" */}
          </div>
        </div>

        <nav className="px-4 space-y-1">
          <div className="py-2">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Model Library
            </div>
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-sm font-medium rounded-md bg-black  text-white">
              {/* <Database className="mr-3 h-5 w-5" /> */}
              <img className="mr-3 h-4 w-4" src={ModelLib} alt="ModelLib" />
              Model Library
            </a>
          </div>

          <div className="py-2">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Extraction Builder
            </div>
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50">
              {/* <Code className="mr-3 h-5 w-5" /> */}
              <img className="mr-3 h-4 w-4" src={Label} alt="Label" />
              Label Data
            </a>
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50">
              {/* <Brain className="mr-3 h-5 w-5" /> */}
              <img className="mr-3 h-4 w-4" src={Model} alt="Model" />
              Model
            </a>
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50">
              {/* <TestTube2 className="mr-3 h-5 w-5" /> */}
              <img className="mr-3 h-4 w-4" src={Test} alt="Test" />
              Test
            </a>
          </div>

          <div className="py-2">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Help
            </div>
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50">
              {/* <Settings className="mr-3 h-5 w-5" /> */}
              <img className="mr-3 h-4 w-4" src={Setting} alt="Setting" />
              Setting
            </a>
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50">
              {/* <LifeBuoy className="mr-3 h-5 w-5" /> */}
              <img className="mr-3 h-4 w-4" src={Support} alt="Support" />
              Support
            </a>
          </div>
        </nav>
      </aside>

      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Back</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <span className="ml-2 text-gray-900">AI/ML Model Builder</span>
                <div className="ml-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-gray-400 hover:text-gray-500">
                  <Bell className="h-6 w-6" />
                </button>
                <button className="text-gray-400 hover:text-gray-500">
                  <Heart className="h-6 w-6" />
                </button>
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full wrapper"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Ccircle cx='16' cy='16' r='16' fill='gray' /%3E%3C/svg%3E"
                    alt="Profile"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700">Neurotic Spy</p>
                    <p className="text-xs text-gray-500">neurotic@taildo.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="p-8">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Model Library</h1>
            <button
              onClick={() => setIsDialogOpen(true)}
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create New Model
            </button>
          </div>

          <div className="bg-white shadow rounded-lg">
            <ModelTable data={dummyData} />
          </div>
        </main>
      </div>

      <NewModelDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={handleSaveNewModel}
      />
    </div>
  );
}

export default App;