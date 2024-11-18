import React, { useState, FormEvent, useEffect } from 'react';
import { Heart, Send, Smile, MapPin, ArrowRight, School, Star } from 'lucide-react';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [location, setLocation] = useState('');
  const [locationError, setLocationError] = useState('');
  const [formData, setFormData] = useState({
    phone: '',
    dob: '',
    happiness: '3',
    hobbies: '',
    hobbyTime: '',
    sleepHours: '7',
    socialMedia: '',
    friendCount: '0',
    friendHappiness: '3',
    favoriteFood: '',
    parentLove: '5',
    overallHappiness: '3',
    school: '',
    favorites: ''
  });

 useEffect(() => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`${latitude},${longitude}`);
      },
      (error) => {
        setLocationError("Please enable location access to continue.");
      }
    );
  } else {
    setLocationError("Geolocation is not supported by your browser.");
  }
}, []);


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const subject = "Happiness Index Survey Response";
    const body = `
Location Coordinates: ${location}

Phone Number: ${formData.phone}
Date of Birth: ${formData.dob}
School: ${formData.school}
Things You Like Most: ${formData.favorites}
Current Happiness Level: ${formData.happiness}/5
Hobbies: ${formData.hobbies}
Time for Hobbies: ${formData.hobbyTime}
Sleep Hours: ${formData.sleepHours}
Preferred Social Media: ${formData.socialMedia}
Number of Friends: ${formData.friendCount}
Happiness with Friends: ${formData.friendHappiness}/5
Favorite Food: ${formData.favoriteFood}
Love for Parents: ${formData.parentLove}/5
Overall Happiness: ${formData.overallHappiness}/5
    `;

    window.location.href = `mailto:ayanmandal059@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!showForm) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <Smile className="w-8 h-8" />
              Welcome!
            </h1>
            <Heart className="w-6 h-6 text-pink-200" />
          </div>
        </div>
        
        <div className="p-8">
          <p className="text-lg text-gray-700 mb-6">
            Hi <strong>Anwesha</strong>! I am Hira (Ayan's AI assistant). This is a personalized form developed for you to know your happiness index.
          </p>

          
          <div className="flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-2 animate-bounce" />
              <p className="text-gray-600 mb-4">
                {locationError || (location ? "Location access granted!" : "Accessing your location...")}
              </p>
              {location && (
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
                >
                  Continue
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <Smile className="w-8 h-8" />
              Happiness Index Survey
            </h1>
            <Heart className="w-6 h-6 text-pink-200" />
          </div>
          <p className="mt-2 text-purple-100">Hi Anwesha, please help us understand your happiness better!</p>
        </div>

        <form onSubmit={handleSubmit} className="px-8 py-6 space-y-6">
          <div className="space-y-6">
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                pattern="[0-9]{10}"
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                onChange={handleChange}
                value={formData.phone}
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
              <input
                type="date"
                name="dob"
                required
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                onChange={handleChange}
                value={formData.dob}
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <School className="w-4 h-4" />
                Which school did you pass from?
              </label>
              <input
                type="text"
                name="school"
                required
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                onChange={handleChange}
                value={formData.school}
                placeholder="Enter your school name"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Star className="w-4 h-4" />
                What do you like the most?
              </label>
              <textarea
                name="favorites"
                required
                rows={3}
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                onChange={handleChange}
                value={formData.favorites}
                placeholder="Tell us about your favorite things, activities, or moments..."
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-2">How happy are you?</label>
              <input
                type="range"
                name="happiness"
                min="1"
                max="5"
                className="w-full accent-purple-600"
                onChange={handleChange}
                value={formData.happiness}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Not Happy</span>
                <span>Very Happy</span>
              </div>
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-2">What are your hobbies?</label>
              <textarea
                name="hobbies"
                required
                rows={3}
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                onChange={handleChange}
                value={formData.hobbies}
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-2">Do you get time for your hobbies?</label>
              <select
                name="hobbyTime"
                required
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                onChange={handleChange}
                value={formData.hobbyTime}
              >
                <option value="">Select an option</option>
                <option value="Always">Always</option>
                <option value="Sometimes">Sometimes</option>
                <option value="Rarely">Rarely</option>
                <option value="Never">Never</option>
              </select>
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-2">How many hours do you sleep?</label>
              <input
                type="number"
                name="sleepHours"
                min="0"
                max="24"
                required
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                onChange={handleChange}
                value={formData.sleepHours}
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred social media apps</label>
              <input
                type="text"
                name="socialMedia"
                required
                placeholder="e.g., Instagram, Facebook, Twitter"
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                onChange={handleChange}
                value={formData.socialMedia}
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-2">How many friends do you have?</label>
              <input
                type="number"
                name="friendCount"
                min="0"
                required
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                onChange={handleChange}
                value={formData.friendCount}
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-2">How happy are you with your friends?</label>
              <input
                type="range"
                name="friendHappiness"
                min="1"
                max="5"
                className="w-full accent-purple-600"
                onChange={handleChange}
                value={formData.friendHappiness}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Not Happy</span>
                <span>Very Happy</span>
              </div>
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-2">What is your favorite food?</label>
              <input
                type="text"
                name="favoriteFood"
                required
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                onChange={handleChange}
                value={formData.favoriteFood}
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-2">How much do you love your parents? (1-5)</label>
              <div className="flex gap-4 mt-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <label key={num} className="flex items-center">
                    <input
                      type="radio"
                      name="parentLove"
                      value={num}
                      checked={formData.parentLove === num.toString()}
                      onChange={handleChange}
                      className="form-radio h-4 w-4 text-purple-600"
                    />
                    <span className="ml-2">{num}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-2">Overall happiness scale (1-5)</label>
              <input
                type="range"
                name="overallHappiness"
                min="1"
                max="5"
                className="w-full accent-purple-600"
                onChange={handleChange}
                value={formData.overallHappiness}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Not Happy</span>
                <span>Very Happy</span>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
            >
              <Send className="w-5 h-5" />
              Submit Survey
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;