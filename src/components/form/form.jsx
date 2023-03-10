
import React, { useState } from 'react';

function Form() {
  const [name,setName]=useState("");
  const [isChecked, setIsChecked] = useState(false);
  function getFormData(e)
  {
    alert(isChecked, name)
    e.preventDefault()
  }

  return (
    <div className='box'>
      <form onSubmit={getFormData}>
        <input disabled={isChecked} type="text" placeholder="имя" value={name} onChange={(e)=>setName(e.target.value)} /> <br /><br />
          <select disabled={isChecked} onChange={(e)=>setInterest(e.target.value)}>
            <option>холост</option>
            <option>женат</option>
            <option>замужем</option>
          </select>
        <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        <button disabled={!isChecked}>Нажмите меня</button>
      </form>
    </div>
  );
}

export default Form
