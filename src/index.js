import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



import Navbar1 from './Navbar1';
import Caroussel1 from './Carousel1';
import Footer from './Footer'
import match11 from './images/saVseng11.webp'
import match12 from './images/newVSind12.webp'

import match1 from './images/nzVspak1.webp'
import match2 from './images/indVsban2.webp'
import match3 from './images/saVsafg3.webp'
import match4 from './images/engVsAus4.webp'
import match5 from './images/pakVsind5.webp'
import match6 from './images/banVsNz6.webp'
import match7 from './images/ausVsSa7.webp'
import match8 from './images/afgVsEng8.webp'
import match9 from './images/pakVsBAn9.webp'
import match10 from './images/afgVsAus10.webp'
import semifinal1 from './images/semi1.webp'
import semifinal2 from './images/semifinal2.webp'


import Projects from './Projects';
import Cards from './Cards';
import FilterDemo from './FilterDemo';
import RefDemo2 from './RefDemo2';
import PropValidation from './PropValidation';
import EventDemo from './EventDemo';


const abc=[1,2,3,4]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar1/>
    <Caroussel1
     match11={semifinal2} 
     title="South Africa vs New Zealand, 2nd Semi-Final (B1 v A2)" 
     timed="Match starts at Mar 05, 09:00 GMT"/>
    

    <Cards 
    matchname="Australia vs India, 1st Semi-Final (A1 v B2)" 
    match1={semifinal1}
    result="India won by 4 wkts" 
    matchlink="https://www.hotstar.com/in/sports/cricket/india-vs-australia-sf1-highlights/1540038881/video/highlights/watch"
    />

<Cards 
    matchname="India vs New Zealand, 12th Match" 
    match1={match12}
    result="India won by 44 runs" 
    matchlink="https://www.hotstar.com/in/sports/cricket/new-zealand-vs-india-highlights/1540038878/video/highlights/watch"
    />
  <Cards 
    matchname="England vs South Africa, 11th Match" 
    match1={match11}
    result="South Africa won by 7 wkts" 
    matchlink="https://www.hotstar.com/in/sports/cricket/south-africa-vs-england-highlights/1540038875/video/highlights/watch"
    />
     <Cards 
    matchname="Afghanistan vs Australia, 10th Match" 
    match1={match10}
    result="No result - due to rain" 
    matchlink=""
    />
    
<Cards 
    matchname="Pakistan vs Bangladesh, 9th Match" 
    match1={match9}
    result="Match abandoned due to rain (No toss)" 
    matchlink=""
    />
    
    <Cards 
    matchname="Afghanistan vs England, 8th Match" 
    match1={match8}
    result="Afghanistan won by 8 runs" 
    matchlink="https://www.hotstar.com/in/sports/cricket/aus-in-sf-rain-spoils-afgs-party/1540038872/video/highlights/watch"
    />

    
  <Cards 
    matchname="Australia vs South Africa, 7th Match" 
    match1={match7}
    result="Match abandoned due to rain (No toss)" 
    matchlink=""
    />

<Cards 
    matchname="Bangladesh vs New Zealand, 6th Match" 
    match1={match6}
    result="New Zealand won by 5 wkts" 
    matchlink="
https://www.hotstar.com/in/sports/cricket/nz-outclass-ban-enter-sfs-with-ind/1540038860/video/highlights/watch
"
    />
    
<Cards 
    matchname="Pakistan vs India, 5th Match" 
    match1={match5}
    result="India won by 6 wkts" 
    matchlink="
https://www.hotstar.com/in/sports/cricket/ind-school-pak-to-bury-2017-ghosts/1540038857/video/highlights/watch
"
    />



<Cards 
    matchname="England vs Australia, 4th Match" 
    match1={match4}
    result="Australia won by 5 wkts" 
    matchlink="https://www.hotstar.com/in/sports/cricket/aus-overcome-eng-end-16-year-wait/1540038854/video/highlights/watch"
    />
    <Cards 
    matchname="South Africa vs Afghanistan, 3rd Match" 
    match1={match3}
    result="South Africa won by 107 runs" 
    matchlink="https://www.hotstar.com/in/sports/cricket/clinical-sa-leave-afg-in-tatters/1540038851/video/highlights/watch"
    />
        <Cards 
    matchname="Bangladesh vs India" 
    match1={match2}
    result="India won by 6 wkts" 
    matchlink="https://www.hotstar.com/in/sports/cricket/efficient-ind-brush-aside-ban/1540038848/video/highlights/watch"/>

    <Cards 
    matchname="New Zealand vs Pakistan" 
    match1={match1} result="New Zealand won by 60 runs" 
    matchlink="https://www.hotstar.com/in/sports/cricket/nz-thrash-hosts-pak-in-opener/1540038845/video/highlights/watch"/>



<Footer/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
