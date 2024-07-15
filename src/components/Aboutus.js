import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-rose text-center p-10 rounded-md shadow-md w-screen mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">About Us</h2>
            <p className="text-lg text-gray-700 mb-4">
                We are an organization committed to providing a high-quality education
                for every child in India. We believe that every child, regardless of
                their socio-economic status, location or circumstances, deserves an
                opportunity to reach their full potential.
            </p>
            <p className="text-lg text-gray-700">
                We exist to enable government schools in India to provide quality
                education to every child. We believe that a good 'quality' education
                is the foundation of a child's future, and we are dedicated to
                supporting the government in delivering this to all children in India.
            </p>
        </div>
    );
};

export default AboutUs;