import React, {useState} from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import CallLogList from './CallLogList.jsx';

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className='container'>
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>

        <CallLogList selectedTab={selectedTab}/>
      <Footer/>
    </div>
  );
};

export default App;
