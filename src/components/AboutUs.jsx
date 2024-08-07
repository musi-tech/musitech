import { motion } from 'framer-motion';

const AboutUs = () => (
  <section className="bg-secondary py-12">
    <div className="container mx-auto px-4">
      <div className="relative flex flex-col-reverse lg:flex-row lg:items-center gap-8">
        
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:order-2">
          <motion.div
            className="w-full lg:w-full flex flex-col justify-center items-center lg:items-center gap-5"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://media.licdn.com/dms/image/D4D03AQFf9YQf9CCjWQ/profile-displayphoto-shrink_800_800/0/1716027411481?e=1728518400&v=beta&t=pWx-BIyuUuGxMbsIK63DL8IuM7Zxmftiq0qX_ltasiA" // Replace with the actual URL for the founder's image
              alt="Aditya Jadhav"
              className="w-72 object-cover rounded-full shadow-lg"
            />
            <div className="mb-8 text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-accent mb-2">Meet Our Founder & CEO</h3>
              <p className="text-lg mb-4 text-center">
                Aditya Jadhav
              </p>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-right lg:order-1">
          <div className="mb-8">
            <p className="text-lg">
              Our mission is to provide innovative and tailored <strong>digital solutions</strong> that enhance your online presence and drive business success. We focus on building long-term relationships by delivering exceptional services and support.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default AboutUs;
