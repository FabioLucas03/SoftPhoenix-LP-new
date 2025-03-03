import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: "Custom Software Development",
      description: "From web apps to mobile solutions, we build tailor-made software that aligns with your business goals."
    },
    {
      title: "AI & Machine Learning",
      description: "We integrate AI models to automate workflows, generate insights, and enhance user experience."
    },
    {
      title: "Cloud Solutions & DevOps",
      description: "We deploy and optimize cloud-based infrastructures on AWS, GCP, and Azure to ensure seamless scalability."
    },
    {
      title: "Web & Mobile App Development",
      description: "We create responsive, high-performance apps that work across all devices."
    },
    {
      title: "API & System Integrations",
      description: "We connect platforms and automate processes through robust API development."
    }
  ];

  return (
    <section className="services-section py-6" id="services">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-6 has-equal-height" data-aos="fade-right">
            <div className="service-image-container">
              <Image
                src="/soft.webp"
                alt="Custom Software Development Illustration"
                width={800}
                height={600}
                className="service-image"
                priority
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          <div className="column is-6 has-equal-height" data-aos="fade-left">
            <div className="content-box">
              <h2 className="title is-2 has-text-warning">Services</h2>
              <div className="content-wrapper">
                <h3 className="subtitle is-3 has-text-white">Custom Software Development</h3>
                <p className="description has-text-light is-size-5">
                  From web apps to mobile solutions, we build tailor-made software 
                  that aligns with your business goals.
                </p>
                {/* <button className="button is-warning is-medium">
                  Learn More About Our Services
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 