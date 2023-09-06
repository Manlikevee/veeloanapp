import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './Spinner';
import axiosInstance from '../../../service/axiosinterceptor';
import { navigate } from "gatsby";


const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: '8px',
    padding: '10px',
  }),
  // Add more custom styles here for other parts of the component
};




const BankAccountVerification = () => {
  const [responseprofiledata, setresponseprofiledata] = useState('');
  const [isloading, setisloading] = useState(true);
  const [responsedata, setresponsedata] = useState('');
  const [banks, setBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState(null);
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [loadingBanks, setLoadingBanks] = useState(true);
  const [loadingVerification, setLoadingVerification] = useState(false);
  const [bankname, stebankname] = useState('')
  const [putloading, setputloading] = useState(false);  

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
        toast.error('Error fetching banks', {
          position: toast.POSITION.TOP_RIGHT,
           zIndex: 999999999,
        });
        setLoadingBanks(false);

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
        toast.error('Error verifying account', {
          position: toast.POSITION.TOP_RIGHT,
          zIndex: 999999999,
        });
      } finally {
        setLoadingVerification(false);
      }
    }
  };

  const setInitialValue = () => {
    const initialValue = selectedBank
      ? { value: selectedBank.value, label: bankname }
      : null; // Set the desired initial option here or use null if no initial value
    setSelectedBank(initialValue);
  };


  useEffect(() => {
    axiosInstance.get('/Accountdetailview/')
      .then(response => {
        setresponsedata(response.data);
        setSelectedBank(response.data.bank_code);
        setAccountName(response.data.account_name);
        setAccountNumber(response.data.account_number);
        stebankname(response.data.bank_name);
        setInitialValue();

        setisloading(false);
      })
      .catch(error => {
        console.error("Error fetching profile data:", error);
        setisloading(false);
      });


  }, []);





  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form submission logic here

    if (!selectedBank || !bankname || !accountNumber || !accountName  ) {
      toast.error('Please fill in all required fields.');
      return;
    }

    toast.info('Processing.......')

if(!putloading) {
  try {
    setputloading(true)
    const response = await axiosInstance.put('/Accountdetailview/', {
     
      accountdetails: {
        bank_code: selectedBank.value,
        bank_name: bankname,
        account_number: accountNumber,
        account_name: accountName
      },

      
    })

    .then(response => {
     
      // Handle the response as needed
      toast.success('Account Details Updated Successfully');
   
      setresponseprofiledata(response.data);
      console.log(response.data);
      setputloading(false)
      setTimeout(() => {
        navigate('/Nairacard');
      }, 3000); // 3000 milliseconds (3 seconds)
    });
    
    // Do something with the response if needed
  } catch (error) {
    setputloading(false)
    // Handle any errors that occur during the request
    console.error('Error updating profile:', error);
    console.log(error)
    // Display validation errors with toast if they exist
    if (error.response && error.response.data && error.response.data.errors) {
      const errors = error.response.data.errors;
       const errorcontainer = error.response.data.errors
       if (errors) {
        // Display profile errors
        const profileErrors = errors.profile_errors;
        for (const field in profileErrors) {
          const fieldErrors = profileErrors[field];
          fieldErrors.forEach((errorMessage) => {
            toast.error(`${field}: ${errorMessage}`, {
              position: toast.POSITION.TOP_RIGHT,
            });
          });
        }
}
    } else {
      setputloading(false)
      toast.error('An error occurred while updating the profile.');
    }
  }
};

if(putloading){
  toast.error('The System is still processing a request Please Wait')
}

}


  useEffect(() => {
    // When selectedBank changes, update bankname with the corresponding bank's label
    if (selectedBank) {
      stebankname(selectedBank.label);
    } else {
      stebankname(''); // Clear bankname if selectedBank is null
    }
  }, [selectedBank]);







  return (
<>
    {!isloading ? (

    <div className="dashboardform">
    
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
    <form className="dbform" onSubmit={handleSubmit}>
    <div className="dbform">
      <div className="dbcolumn">


      <div className="loginflex">
        <label htmlFor="">Bank</label>
       
        <Select
        options={banks}
        value={selectedBank}
        onChange={(bank) => {
          setSelectedBank(bank);
          
          setAccountName(''); // Clear account name when bank changes
        }}
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
          className="custom-select"
        />
        <div className='smb' onClick={handleAccountVerification}>Verify</div>
        </div>
</div>
        {loadingVerification && 
        
        <div className='skelenton'>
<div className="loginflex ">
  <label htmlFor="">Loading.......</label>

</div>


        </div>
        
        }
        {accountName && (
            <div className='bx'>
        <div className="loginflex">
          <label htmlFor="">Account Name</label>
          <input type="text" readOnly value={accountName} />
        </div>
        <div className="dbcolumn">
            <div className="loanrequestbutton">
            <button  disabled={putloading}>
        
   
        { putloading ? (<> <Spinner/> Processing..</>) : 'Submit' }
        
        </button>
            </div>
          </div>
        </div>
          )}
    
  
    </div>
    </form>
  </div> ) : 'loading.............' }
  </>
  );
};

export default BankAccountVerification;

