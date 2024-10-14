import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-600">About Us</h1>
        <p className="text-gray-700 mt-2">Your go-to destination for delicious recipes!</p>
      </header>

      <section className="container mx-auto bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-600 mb-4">
          Welcome to Cooking Corner! Our journey began with a passion for cooking and sharing delicious recipes with friends and family.
          Over the years, we’ve developed a love for experimenting in the kitchen, and now we want to share our favorite recipes with you.
          Our goal is to inspire you to cook and explore new flavors, whether you're a beginner or a seasoned chef.
        </p>
        <p className="text-gray-600 mb-4">
          We believe that cooking should be enjoyable and accessible to everyone. That's why we focus on providing easy-to-follow recipes
          that use simple ingredients, along with helpful tips and tricks to make your cooking experience delightful.
        </p>
      </section>

      <section className="container mx-auto bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          At Cooking Corner, our mission is to create a community where food lovers can come together to share their culinary experiences
          and discover new recipes. We strive to promote healthy eating and encourage everyone to enjoy the art of cooking.
        </p>
      </section>

      <section className="container mx-auto bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
        <p className="text-gray-600 mb-4">
          We invite you to join our cooking community! Share your experiences, ask questions, and connect with fellow food enthusiasts.
          Subscribe to our newsletter to stay updated on the latest recipes, cooking tips, and special features.
        </p>
        <p className="text-gray-600 mb-4">
          Thank you for visiting Cooking Corner. We hope you enjoy our recipes as much as we do!
        </p>
      </section>

     
    </div>
  );
};

export default About;

