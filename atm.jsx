const ATMDeposit = ({ onChange, isDeposit }) => {
    let choice = ['Deposit', 'Cash Back'];
    console.log(`ATM isDeposit : ${Number(isDeposit)}`)
    return (
      <label className="label huge">
        <h3>{choice[Number(!isDeposit)]}</h3>
        <input type="number" onChange={onChange}></input>
        <input type="submit"></input>
      </label>
    )
  };
  
  const Account = () => {
  
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
    
    let deposit = 0;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (deposit > totalState && !isDeposit) {
        alert('NOT ENOUGH BALANCE')
      } else {
        let newBalance = isDeposit ? totalState + deposit : totalState - deposit;
        setTotalState(newBalance);
      }
      
    };
  
    const handleChange = event => {
      console.log(`handleChange: ${event.target.value}`);
      deposit = Number(event.target.value);
      
    };
  
    const handleClick = (e) => {
      console.log(e.target.value);
      if (e.target.value == 'true') {
        setIsDeposit(true);
        document.getElementById('id-header').classList.add('header');
        document.getElementById('id-header').classList.remove('header-cashback');
      } else {
        setIsDeposit(false);
        document.getElementById('id-header').classList.remove('header');
        document.getElementById('id-header').classList.add('header-cashback');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2> Your Account Balance: ${totalState}</h2>
        <button className="deposit" id="id-deposit" value="true" onClick={handleClick}> Deposit</button>
        <button className="cash-back" id="id-cashback" value="false" onClick={handleClick}> Cash Back</button>
        <ATMDeposit onChange={handleChange} isDeposit={isDeposit}/>
      </form>
    )
  };
  
  ReactDOM.render(<Account />,document.getElementById('root')
)