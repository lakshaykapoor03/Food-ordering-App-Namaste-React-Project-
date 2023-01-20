const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10)
        .fill("")
        .map((e,idx) => (
          <div key={idx} className="shimmer"></div>
        ))}
    </div>
  );
};

export default Shimmer;
