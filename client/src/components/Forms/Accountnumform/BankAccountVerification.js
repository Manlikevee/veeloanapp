import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BankAccountVerification = () => {
  const [banks, setBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState(null);
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [loadingBanks, setLoadingBanks] = useState(true);
  const [loadingVerification, setLoadingVerification] = useState(false);

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await axios.get(
          'https://api.paystack.co/bank',
          {
            headers: {
              Authorization: `Bearer sk_test_c1f886a70706e4f3e7ae82860d178f6d48a4822c`,
            },
          }
        );

        const formattedBanks = response.data.data.map((bank) => ({
          value: bank.code,
          label: bank.name,
        }));

        setBanks(formattedBanks);
        setLoadingBanks(false);
      } catch (error) {
        
        console.error('Error fetching banks:', error);
        setLoadingBanks(false);
        toast.error('You Are Now Logged In', {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    };

    fetchBanks();
  }, []);

  const handleAccountNumberChange = (event) => {
    setAccountNumber(event.target.value);
    setAccountName('');
  };

  const handleAccountVerification = async () => {
    if (selectedBank && accountNumber) {
      try {
        setLoadingVerification(true);
        const response = await axios.get(
          `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${selectedBank.value}`,
          {
            headers: {
              Authorization: `Bearer sk_test_c1f886a70706e4f3e7ae82860d178f6d48a4822c`,
            },
          }
        );

        setAccountName(response.data.data.account_name);
      } catch (error) {
        console.error('Error verifying account:', error);
      } finally {
        setLoadingVerification(false);
      }
    }
  };

  return (
    <div className="dashboardform">
        <ToastContainer/>
    <div className="loanrequesttitles">
      <h4> Profile Update </h4>
    </div>
    <p className="info-text">
      Verify your account number to ensure accurate and secure transactions. This
      process helps us provide you with a better experience and ensures that your
      information is up-to-date.
    </p>
    <div className="dashboardformflex">
      <div className="dashboardformtitle">Complete Your Profile Update</div>
      <div className="updcanc">
        <div className="circle done" /> <div className="lint" />{" "}
        <div className="circle done" /> <div className="lint" />
        <div className="circle" />
      </div>
    </div>
    <div className="dbform">
      <div className="dbcolumn">


      <div className="loginflex">
        <label htmlFor="">Bank</label>
       
        <Select
        options={banks}
        value={selectedBank}
        onChange={setSelectedBank}
        placeholder="Select a bank"
        isLoading={loadingBanks}
      />
  
      </div>
      </div>

      <div className="dbcolumn">
        <div className="loginflex">
          <label htmlFor="">Account Number</label>
          <input
          type="text"
          placeholder="Account Number"
          value={accountNumber}
          onChange={handleAccountNumberChange}
        />
        <button className='smb' onClick={handleAccountVerification}>Verify</button>
        </div>
</div>
        {loadingVerification && <div>Loading...</div>}
        {accountName && (
            <div className='bx'>
        <div className="loginflex">
          <label htmlFor="">Account Name</label>
          <input type="text" readOnly value={accountName} />
        </div>
        <div className="dbcolumn">
            <div className="loanrequestbutton">
              <button>Submit</button>
            </div>
          </div>
        </div>
          )}
    
  
    </div>
  </div>
  );
};

export default BankAccountVerification;

