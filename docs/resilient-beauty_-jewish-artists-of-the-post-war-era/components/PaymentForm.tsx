
import React, { useState } from 'react';
import { Language } from '../types';

interface PaymentFormProps {
  lang: Language;
  onSuccess: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ lang, onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handlePay = (method: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess();
      alert(lang === Language.EN ? `Payment successful via ${method}!` : `התשלום בוצע בהצלחה באמצעות ${method}!`);
    }, 1500);
  };

  const isRtl = lang === Language.HE;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-stone-100 max-w-md w-full">
      <h2 className="text-2xl font-serif font-bold mb-6 text-stone-800">
        {lang === Language.EN ? "Support & Tickets" : "תמיכה וכרטיסים"}
      </h2>
      <p className="text-stone-600 mb-8">
        {lang === Language.EN 
          ? "Support our mission to preserve this history. Your contribution unlocks all artists and grants a physical entry ticket." 
          : "תמכו במשימה שלנו לשמר את ההיסטוריה הזו. תרומתכם תפתח את כל האמנים ותעניק כרטיס כניסה פיזי."}
      </p>

      <div className="space-y-4">
        <button 
          disabled={loading}
          onClick={() => handlePay('Stripe')}
          className="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.911 10.55c-.53-.217-1.127-.406-1.791-.568V13.8c.324.085.748.156 1.134.156 1.402 0 2.164-.678 2.164-1.683 0-1.107-.905-1.506-1.507-1.723zM9.462 10.334c0 .873.746 1.341 1.706 1.541l.001-3.136c-.843.141-1.707.57-1.707 1.595z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.983 14.502c-.372.181-.793.313-1.134.394v1.121c0 .542-.441.983-.983.983s-.983-.441-.983-.983V16.89c-.198-.029-.4-.067-.601-.115-.812-.191-1.58-.567-2.115-1.077-.478-.456-.474-1.228.01-1.677.442-.41 1.144-.365 1.554.093.264.296.65.518 1.152.641v-3.111c-.426-.098-.867-.225-1.24-.384-1.398-.598-2.228-1.582-2.228-3.082 0-1.264.678-2.31 1.83-2.912.384-.2.83-.356 1.278-.455V4.698c0-.542.441-.983.983-.983s.983.441.983.983v1.14c.168.017.337.042.506.074.839.16 1.48.435 1.954.811.517.411.564 1.178.118 1.656-.412.442-1.1.48-1.555.088-.239-.207-.514-.356-.911-.433v3.088c.42.111.905.25 1.413.447 1.644.64 2.658 1.666 2.658 3.328 0 1.538-1.002 2.651-2.43 3.344z"/></svg>
          {lang === Language.EN ? "Pay with Stripe" : "שלם באמצעות Stripe"}
        </button>

        <button 
          disabled={loading}
          onClick={() => handlePay('Apple Pay')}
          className="w-full py-3 bg-black text-white rounded-lg font-bold hover:bg-stone-900 transition flex items-center justify-center gap-2"
        >
          {lang === Language.EN ? "Apple Pay" : "Apple Pay"}
        </button>

        <button 
          disabled={loading}
          onClick={() => handlePay('Google Pay')}
          className="w-full py-3 bg-stone-100 border border-stone-200 text-stone-900 rounded-lg font-bold hover:bg-stone-200 transition flex items-center justify-center gap-2"
        >
          {lang === Language.EN ? "Google Pay" : "Google Pay"}
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
