interface ArrayDisplayProps {
    items: string[];
  }
  
  function ArrayDisplay({ items }: ArrayDisplayProps) {
    return (
      <div>
        {items.map((item, index) => (
          <div key={index} className="my-4">
            {item}
          </div>
        ))}
      </div>
    );
  }
  
  export default ArrayDisplay;
  