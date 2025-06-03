export default function PaymentStep({ onBack }) {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Payment Method</h2>
        {/* Payment options here */}
        <button onClick={onBack} className="mt-4 bg-gray-300 px-4 py-2 rounded">Back</button>
      </div>
    );
  }
  