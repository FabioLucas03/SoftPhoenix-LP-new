import Image from 'next/image';

export default function AiMachineLearning() {
  return (
    <section className="ai-ml-section py-6" id="ai-ml">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-6 has-equal-height" data-aos="fade-right">
            <div className="dark-box">
              <h2 className="title is-2 has-text-warning">AI Solutions</h2>
              <div className="content-wrapper">
                <h3 className="subtitle is-3 has-text-white">AI & Machine Learning</h3>
                <p className="description has-text-light is-size-5">
                  We integrate AI models to automate workflows, generate insights, 
                  and enhance user experience.
                </p>
                {/* <button className="button is-warning is-medium">
                  Learn More
                </button> */}
              </div>
            </div>
          </div>

          <div className="column is-6 has-equal-height" data-aos="fade-left">
            <div className="service-image-container">
              <Image
                src="/ia.webp"
                alt="AI and Machine Learning"
                width={800}
                height={600}
                className="service-image"
                priority
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '1rem'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 