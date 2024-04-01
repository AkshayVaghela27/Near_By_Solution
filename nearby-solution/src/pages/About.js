import React from 'react'

const About = () => {
return (
  <div className='flex justify-self-center'>
    <div className="container  mx-auto px-4 py-8">
      <div className="w-4/5 text-black">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-6">Welcome to Nearby Solutions, your ultimate bridge between customers and service/product providers. At Nearby Solutions, we strive to revolutionize the way people discover and access products and services in their vicinity. Our platform connects users with nearby businesses, making it convenient for both parties to engage in seamless transactions.</p>
        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
        <p className="text-lg mb-6">Our mission at Nearby Solutions is to empower local businesses and individuals by providing them with a platform to showcase their products and services to potential customers in their vicinity. </p>
        <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
        <p className="text-lg mb-6"> Through innovative technology and user-friendly interfaces, we aspire to create a vibrant ecosystem where local businesses thrive and customers find unparalleled convenience.</p>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="text-lg mb-2">Have questions or feedback? We'd love to hear from you! Reach out to us through the following channels:</p>
          <ul className="list-disc pl-4">
            <li className="mb-2"><strong>Email:</strong> contact@nearbysolutions.com</li>
            <li className="mb-2"><strong>Phone:</strong> +9195860642xx</li>
            <li className="mb-2"><strong>Address:</strong> VV Nagar, Anand, Gujarat-388120</li>
          </ul>
        </div>
        <p>Connect with us on social media:</p>
        <div className="flex justify-center space-x-4">
          <a href="https://Linkedin.com/in/smitdhimar"  target='_blank' className="text-blue-500 hover:text-blue-700">Linkedin</a>
          <a href="http://twitter.com/Smit_183" target='_blank' className="text-blue-500 hover:text-blue-700">Twitter</a>
          <a href="https://instagram.com/smitdhimar_" target='_blank' className="text-blue-500 hover:text-blue-700">Instagram</a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About
