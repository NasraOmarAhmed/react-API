import React from 'react';
import{createRoot} from "react-dom/client"
import Classwork from './component/Classwork';
// import App from './component/App';


const root = createRoot(document.getElementById('root'));
root.render(

  <div> 
    {/* <App /> */}
    <Classwork />
  </div>
);

