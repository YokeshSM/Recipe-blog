const Footer = () => {
    return (
      <footer className="bg-[#4a4a4a] text-white py-6">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">“Good food is all the sweeter when shared with good friends.”</h2>
          <div className="text-center">
            <p className="mb-1">Contact Us:</p>
            <p>Email: <a href="mailto:info@recipeapp.com" className="underline">info@recipeapp.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="underline">+1 (234) 567-890</a></p>
          </div>
          <p className="text-sm mt-4">© 2024 Recipe App. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  