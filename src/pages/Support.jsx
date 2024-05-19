import React from 'react';

const Support = () => {
  return (
    <div className="flex items-center justify-center gap-5  bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 m-4 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <div className="text-gray-700 space-y-4">
          <p className="text-lg font-semibold">
            Welcome to our application. By accessing or using our app, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you must not use our app.
          </p>
          <h2 className="text-2xl font-semibold">1. Use of the App</h2>
          <p className="text-lg font-semibold">
            You agree to use the app only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the app.
          </p>
          <h2 className="text-2xl font-semibold">2. Changes to Terms</h2>
          <p className="text-lg font-semibold">
            We reserve the right to modify these terms at any time. Your continued use of the app following any changes indicates your acceptance of the new terms.
          </p>
          <h2 className="text-2xl font-semibold">3. Contact Us</h2>
          <p className="text-lg font-semibold">
            If you have any questions about these terms, please contact us at support@example.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
