const SectionTitle = ({ h2 }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="section-title">
      <h2
        className="text-4xl md:text-6xl lg:text-7xl"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        {h2}
      </h2>
    </div>
  );
};

export default SectionTitle;
