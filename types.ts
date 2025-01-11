export interface AIModel {
  id: string;
  name: string;
  description: string;
  type: string;
  status: 'active' | 'inactive' | 'training';
  createdAt: string;
  accuracy: number;
}

export interface NewModelFormData {
  name: string;
  description: string;
  type: string;
  parameters: {
    learningRate: number;
    epochs: number;
    batchSize: number;
  };
}