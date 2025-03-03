import Image from 'next/image';

export default function ApiIntegrations() {
  return (
    <section className="api-integrations-section py-6" id="api-integrations">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-6 has-equal-height" data-aos="fade-right">
            <div className="service-image-container">
              <Image
                src="/api.webp"
                alt="API and System Integrations"
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

          <div className="column is-6 has-equal-height" data-aos="fade-left">
            <div className="dark-box">
              <h2 className="title is-2 has-text-warning">Integration</h2>
              <div className="content-wrapper">
                <h3 className="subtitle is-3 has-text-white">API & System Integrations</h3>
                <p className="description has-text-light is-size-5">
                  We connect platforms and automate processes through robust API development.
                </p>
                {/* <button className="button is-warning is-medium">
                  Learn More
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 