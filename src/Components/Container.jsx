const Container = ({ children, content }) => {
  return (
    <div className="container px-4">
      <div className="flex justify-between">
        <h2 className="flex w-full justify-between text-xl">
          <span>{content.title}</span>
          <span>Quantity: {content.quantity}</span>
        </h2>
      </div>
      <div className="mt-3 flex flex-wrap gap-4">{children}</div>
    </div>
  );
};

export default Container;
