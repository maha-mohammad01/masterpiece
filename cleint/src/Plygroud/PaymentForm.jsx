import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate} from 'react-router-dom';

const PaymentForm = () => {
  const [selectedType, setSelectedType] = useState('type1');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('01');
  const [expirationYear, setExpirationYear] = useState('2023');
  const [securityCode, setSecurityCode] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleCardNameChange = (e) => {
    setCardName(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    // Format card number with space every four digits
    const formattedCardNumber = e.target.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    setCardNumber(formattedCardNumber.slice(0, 19));
  };

  const handleExpirationMonthChange = (e) => {
    setExpirationMonth(e.target.value);
  };

  const handleExpirationYearChange = (e) => {
    setExpirationYear(e.target.value);
  };

  const handleSecurityCodeChange = (e) => {
    // Limit security code to three digits
    setSecurityCode(e.target.value.slice(0, 3));
  };

  const validateInputs = () => {
    const errors = {};

    // Validate card name if not 'Cash'
    if (selectedType !== 'type2' && !cardName.trim()) {
      errors.cardName = 'Card name is required';
    }

    // Validate card number if not 'Cash'
    if (selectedType !== 'type2') {
      const cardNumberRegex = /^[0-9]{16}$/;
      if (!cardNumberRegex.test(cardNumber)) {
        errors.cardNumber = 'Invalid card number';
      }
    }

    // Validate security code if not 'Cash'
    if (selectedType !== 'type2') {
      const securityCodeRegex = /^[0-9]{3}$/;
      if (!securityCodeRegex.test(securityCode)) {
        errors.securityCode = 'Invalid security code';
      }
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handlePaymentSubmit = () => {
    const isValid = validateInputs();

    if (isValid) {
      // Perform the payment submission logic here

      // Show toast alert
      toast.success('Payment submitted successfully! Redirecting to details page.');
      navigate('/done');
      // Redirect to details page after a short delay
      // history.push('/details'); // Update with your actual details page path
    }
  };

  return (
    <div className="min-w-screen min-h-screen bg-white flex items-center justify-center px-5 pb-10 pt-16 mt-12">
      <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{ maxWidth: '600px' }}>
        <div className="w-full pt-1 pb-5">
          <div className="bg-emerald-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
            <i className="mdi mdi-credit-card-outline text-3xl"></i>
          </div>
        </div>
        <div className="mb-10">
          <h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
        </div>
        <div className="mb-3 flex -mx-2">
          <div className="px-2">
            <label htmlFor="type1" className="flex items-center cursor-pointer">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-emerald-500"
                name="type"
                id="type1"
                checked={selectedType === 'type1'}
                onChange={() => handleTypeChange('type1')}
              />
              <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3" />
            </label>
          </div>
          <div className="px-2">
            <label htmlFor="type2" className="flex items-center cursor-pointer font-bold">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-emerald-500"
                name="type"
                id="type2"
                checked={selectedType === 'type2'}
                onChange={() => handleTypeChange('type2')}
              />
              &nbsp; Cash
            </label>
          </div>
        </div>
        {selectedType !== 'type2' && (
          <>
            <div className="mb-3">
              <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
              <div>
                <input
                  className={`w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none ${
                    errors.cardName ? 'border-red-500' : 'focus:border-emerald-500'
                  } transition-colors`}
                  placeholder="John Smith"
                  type="text"
                  value={cardName}
                  onChange={handleCardNameChange}
                />
                {errors.cardName && <p className="text-red-500 text-xs italic">{errors.cardName}</p>}
              </div>
            </div>
            <div className="mb-3">
              <label className="font-bold text-sm mb-2 ml-1">Card number</label>
              <div>
                <input
                  className={`w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none ${
                    errors.cardNumber ? 'border-red-500' : 'focus:border-emerald-500'
                  } transition-colors`}
                  placeholder="XXXX XXXX XXXX XXXX"
                  type="text"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                />
                {errors.cardNumber && (
                  <p className="text-red-500 text-xs italic">{errors.cardNumber}</p>
                )}
              </div>
            </div>
            <div className="mb-3 -mx-2 flex items-end">
              <div className="px-2 w-1/2">
                <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
                <div>
                  <select
                    className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                    value={expirationMonth}
                    onChange={handleExpirationMonthChange}
                  >
                    <option value="01">01 - January</option>
                    <option value="02">02 - February</option>
                    <option value="03">03 - March</option>
                    <option value="04">04 - April</option>
                    <option value="05">05 - May</option>
                    <option value="06">06 - June</option>
                    <option value="07">07 - July</option>
                    <option value="08">08 - August</option>
                    <option value="09">09 - September</option>
                    <option value="10">10 - October</option>
                    <option value="11">11 - November</option>
                    <option value="12">12 - December</option>
                  </select>
                </div>
              </div>
              <div className="px-2 w-1/2">
                <select
                  className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                  value={expirationYear}
                  onChange={handleExpirationYearChange}
                >
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                </select>
              </div>
            </div>
            <div className="mb-10">
              <label className="font-bold text-sm mb-2 ml-1">Security code</label>
              <div>
                <input
                  className={`w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none ${
                    errors.securityCode ? 'border-red-500' : 'focus:border-emerald-500'
                  } transition-colors`}
                  placeholder="000"
                  type="text"
                  value={securityCode}
                  onChange={handleSecurityCodeChange}
                />
                {errors.securityCode && (
                  <p className="text-red-500 text-xs italic">{errors.securityCode}</p>
                )}
              </div>
            </div>
          </>
        )}
       <Link to='/done'> <div>
          
          <button
            className="block w-full max-w-xs mx-auto bg-emerald-500 hover:bg-emerald-700 focus:bg-emerald-700 text-white rounded-lg px-3 py-3 font-semibold"
            onClick={handlePaymentSubmit}
          >
            <i className="mdi mdi-lock-outline mr-1"></i> Book NOW
          </button>
        </div></Link>
      </div>
    </div>
  );
};

export default PaymentForm;
