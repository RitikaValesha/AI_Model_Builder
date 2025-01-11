import { useState } from 'react';
import { NewModelFormData } from '../types';
import { X } from 'lucide-react';

interface NewModelDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: NewModelFormData) => void;
}

export function NewModelDialog({ isOpen, onClose, onSave }: NewModelDialogProps) {
  const [formData, setFormData] = useState<NewModelFormData>({
    name: '',
    description: '',
    type: 'classification',
    parameters: {
      learningRate: 0.001,
      epochs: 10,
      batchSize: 32,
    },
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Create New Model</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Model Name
            </label>
            <input
              type="text"
              placeholder="Enter Model Name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Model Type
            </label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            >
              <option value="classification">Select</option>
              <option value="classification">Classification</option>
              <option value="regression">Regression</option>
              <option value="clustering">Clustering</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              LLM
            </label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            >
              <option value="classification">Neutral(recommended)</option>
              <option value="classification">ABC</option>
              <option value="regression">DEF</option>
              <option value="clustering">HGI</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Model Description
            </label>
            <textarea
            placeholder="Enter Model Description"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          {/* <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-700">
              Training Parameters
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-gray-500">
                  Learning Rate
                </label>
                <input
                  type="number"
                  step="0.001"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={formData.parameters.learningRate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      parameters: {
                        ...formData.parameters,
                        learningRate: parseFloat(e.target.value),
                      },
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500">Epochs</label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={formData.parameters.epochs}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      parameters: {
                        ...formData.parameters,
                        epochs: parseInt(e.target.value),
                      },
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500">Batch Size</label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={formData.parameters.batchSize}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      parameters: {
                        ...formData.parameters,
                        batchSize: parseInt(e.target.value),
                      },
                    })
                  }
                />
              </div>
            </div>
          </div> */}

          <div className="flex justify-between gap-4 mt-6">
            <button
              type="button"
              style={{backgroundColor: '#E7E6FA'}}
              onClick={onClose}
              className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}