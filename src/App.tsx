import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col gap-5">
        <Header isLogin={isLogin} onClick={() => setIsLogin(!isLogin)} />

        <div>
          <Button label="버튼1" onClick={() => console.log('중요한 버튼입니다')} primary={true} />
        </div>
        <div>
          <Button label="버튼2" onClick={() => console.log('덜 중요한 버튼입니다')} primary={false} />
        </div>
      </div>
    </>
  );
}

export default App;
