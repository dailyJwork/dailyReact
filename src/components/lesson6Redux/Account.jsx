import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../../redux/accountSlice";

export const Account = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.account.balance);

  const handleDeposit = (value) => {
    dispatch(deposit(10));
  };

  const handleWithdraw = (value) => {
    dispatch(withdraw(5));
  };

  return (
  
    <div>
      <p>
        <b>Balance: {balance} credits</b>
      </p>
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};
