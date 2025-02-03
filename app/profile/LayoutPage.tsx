'use client'; // Mark this as a Client Component
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  FaBox,
  FaHeart,
  FaTag,
  FaGem,
  FaArrowRight,
} from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';




export default function LayoutPage() {


  const { user } = useAuth()


  if (!user) {
    return <div>Please log in to view your profile.</div>
  }

  // // Fetch user data on component mount
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const accessToken = localStorage.getItem('access_token');
  //       if (!accessToken) {
  //         throw new Error('No access token found');
  //       }

  //       // Decode the JWT to get the userId
  //       const decodedToken = jwtDecode<DecodedToken>(accessToken);
  //       const userId = decodedToken.user_id;

  //       const response = await axios.get(`http://127.0.0.1:8000/auth/user/${userId}/`, {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });
  //       const userData = response.data as User;
  //       setUser(userData);
  //       setFormData({
  //         email: userData.email,
  //         username: userData.username,
  //         first_name: userData.first_name,
  //         last_name: userData.last_name,
  //         phone: userData.phone || '',
  //         address: userData.address || '',
  //       });
  //     } catch (err) {
  //       setError('Failed to fetch user data');
  //       console.error('Error fetching user data:', err);
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  // Handle form input changes
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // // Handle form submission (update user data)
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError(null);

  //   try {
  //     const accessToken = localStorage.getItem('access_token');
  //     if (!accessToken) {
  //       throw new Error('No access token found');
  //     }

  //     const response = await axios.put(
  //       'http://127.0.0.1:8000/auth/user/',
  //       formData,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       }
  //     );
  //     setUser(response.data as User);
  //     setIsEditing(false);
  //   } catch (err) {
  //     setError('Failed to update user data');
  //     console.error('Error updating user data:', err);
  //   }
  // };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <section id="user_dashboard" className="py-20 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dashboard Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-amber-100">
              <Image
                src="/banner/closeup-portrait-gorgeous-young-woman-with-big-golden-earrings-using-eye-patches-pensive-european-girl-posing-turban.jpg"
                alt="User Profile"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900">
                Welcome, 
              </h2>
              <p className="text-gray-600">Member since January 2024</p>
            </div>
          </div>
          <button
          
            className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors duration-300"
          >
          cancel
          </button>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <FaBox className="text-amber-600 text-xl" />
                </div>
                <h3 className="font-medium">Orders</h3>
                <p className="text-2xl font-bold text-amber-600">12</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <FaHeart className="text-amber-600 text-xl" />
                </div>
                <h3 className="font-medium">Wishlist</h3>
                <p className="text-2xl font-bold text-amber-600">8</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <FaTag className="text-amber-600 text-xl" />
                </div>
                <h3 className="font-medium">Coupons</h3>
                <p className="text-2xl font-bold text-amber-600">3</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <FaGem className="text-amber-600 text-xl" />
                </div>
                <h3 className="font-medium">Points</h3>
                <p className="text-2xl font-bold text-amber-600">450</p>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Orders</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-amber-100 overflow-hidden">
                      <Image
                        src="/banner/closeup-portrait-gorgeous-young-woman-with-big-golden-earrings-using-eye-patches-pensive-european-girl-posing-turban.jpg"
                        alt="Diamond Ring"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Diamond Gold Ring</h4>
                      <p className="text-sm text-gray-600">Order #12345 • Jan 15, 2024</p>
                    </div>
                  </div>
                  <span className="text-amber-600 font-medium">4,500 QAR</span>
                </div>
                <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-amber-100 overflow-hidden">
                      <Image
                        src="/banner/closeup-portrait-gorgeous-young-woman-with-big-golden-earrings-using-eye-patches-pensive-european-girl-posing-turban.jpg"
                        alt="Arabic Necklace"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Arabic Calligraphy Necklace</h4>
                      <p className="text-sm text-gray-600">Order #12344 • Jan 10, 2024</p>
                    </div>
                  </div>
                  <span className="text-amber-600 font-medium">7,800 QAR</span>
                </div>
              </div>
              <Link href="/orders">
                <button className="mt-4 text-amber-600 hover:text-amber-700 font-medium flex items-center gap-2">
                  View All Orders <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile Details */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Profile Details</h3>
            
            </div>

            {/* Recent Wishlisted Items */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Wishlist</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-amber-100 overflow-hidden">
                    <Image
                      src="/banner/closeup-portrait-gorgeous-young-woman-with-big-golden-earrings-using-eye-patches-pensive-european-girl-posing-turban.jpg"
                      alt="Gold Bracelet"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-medium">Diamond Tennis Bracelet</h4>
                    <p className="text-amber-600">9,500 QAR</p>
                  </div>
                </div>
              </div>
              <Link href="/wishlist">
                <button className="mt-4 text-amber-600 hover:text-amber-700 font-medium flex items-center gap-2">
                  View Wishlist <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}