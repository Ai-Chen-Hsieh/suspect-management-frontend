const Container = ({ children, title, count }) => {
  return (
    <div className="container px-4">
      <div className="flex justify-between">
        <h2 className="flex w-full justify-between text-xl">
          <span>{title}</span>
          <span>Quantity: {count}</span>
        </h2>
      </div>
      <div className="cardContainer">{children}</div>
    </div>
  );
};

export default Container;
