export default function BillingStep({ onNext }) {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Billing Information</h2>
        {/* Form fields here */}
        <button onClick={onNext} className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
          Continue
        </button>
      </div>
    );
  }
  