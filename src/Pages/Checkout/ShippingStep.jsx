export default function ShippingStep({ onNext, onBack }) {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Shipping Method</h2>
        {/* Your shipping method options */}
        <div className="flex justify-between mt-6">
          <button onClick={onBack} className="bg-gray-300 px-4 py-2 rounded">Back</button>
          <button onClick={onNext} className="bg-orange-500 text-white px-4 py-2 rounded">Continue</button>
        </div>
      </div>
    );
  }
  