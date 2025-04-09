import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';

interface TutoronResponse {
  response: string;
}

function App() {
  const [formData, setFormData] = useState({
    exercise: '',
    correct_answer: '',
    user_answer: '',
    tutor: 'HINT',
    tutor_mode: 'Friendly',
  });
  const [response, setResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResponse('');

    const queryString = new URLSearchParams(formData).toString();
    const url = `http://127.0.0.1:8000/v1/tutoron?${queryString}`;

    try {
      const fetchResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!fetchResponse.ok) {
        const errorData = await fetchResponse.text();
        throw new Error(`Failed to get response from Tutoron: ${errorData}`);
      }

      const data = await fetchResponse.json(); 
      
      if (data && typeof data.response === 'string') {
        setResponse(data.response);
      } else if (data && typeof data === 'string') {
        setResponse(data); 
      } else {
        setResponse(JSON.stringify(data));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while fetching the response');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log('Current response state:', response); // Log state hiện tại

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Tutoron</h1>
          <p className="text-lg text-gray-600">Your AI-powered learning companion</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="exercise" className="block text-sm font-medium text-gray-700 mb-1">
                Exercise
              </label>
              <input
                type="text"
                name="exercise"
                id="exercise"
                value={formData.exercise}
                onChange={handleInputChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                placeholder="e.g., Find x if x + 2 = 4"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="correct_answer" className="block text-sm font-medium text-gray-700 mb-1">
                  Correct Answer
                </label>
                <input
                  type="text"
                  name="correct_answer"
                  id="correct_answer"
                  value={formData.correct_answer}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  required
                />
              </div>

              <div>
                <label htmlFor="user_answer" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Answer
                </label>
                <input
                  type="text"
                  name="user_answer"
                  id="user_answer"
                  value={formData.user_answer}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="tutor" className="block text-sm font-medium text-gray-700 mb-1">
                  Tutor Response Type
                </label>
                <select
                  name="tutor"
                  id="tutor"
                  value={formData.tutor}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                >
                  <option value="HINT">Hint</option>
                  <option value="DETAILS">Details</option>
                  <option value="ANSWER">Answer</option>
                </select>
              </div>

              <div>
                <label htmlFor="tutor_mode" className="block text-sm font-medium text-gray-700 mb-1">
                  Tutor Mode
                </label>
                <select
                  name="tutor_mode"
                  id="tutor_mode"
                  value={formData.tutor_mode}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                >
                  <option value="Friendly">Friendly</option>
                  <option value="Normal">Normal</option>
                  <option value="Grumpy">Grumpy</option>
                  <option value="BOSS">BOSS</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {isLoading ? 'Processing...' : 'Submit'}
            </button>
          </div>
        </form>

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Response Area */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">AI Response</h2>
          <div className="min-h-[100px]">
            {isLoading ? (
              <p className="text-gray-500 italic">Loading response...</p>
            ) : response ? (
              <div className="text-gray-800 whitespace-pre-wrap">{response}</div>
            ) : (
              <p className="text-gray-500 italic">Submit the form to see the response here</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;