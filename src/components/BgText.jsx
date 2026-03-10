import './BgText.css';

const bgItems = [
  { text: 'MMM', className: 'bg-a' },
  { text: 'MM.', className: 'bg-b' },
  { text: 'MMM', className: 'bg-c' },
  { text: 'MMM', className: 'bg-d' },
  { text: 'MM.', className: 'bg-e' },
  { text: 'MMM', className: 'bg-f' },
  { text: 'MMM', className: 'bg-g' },
  { text: 'MM.', className: 'bg-h' },
];

const BgText = () => {
  return (
    <div className="bg-text-layer" aria-hidden="true">
      {bgItems.map((item, i) => (
        <div key={i} className={`bg-text-item ${item.className}`}>
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default BgText;
