
import './App.css';
import Login from './components/login/Login'
import SignUp from './components/sign up/signUp'
import Header from './components/Header/Header';
/*import ChallengePost from './components/challenge post/ChallengePost'; */

import ChallengePost from './components/challenge post/ChallengePost';
import Container from '@material-ui/core/Container';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import NewChallenge from './components/new Challenge/newChallenge';
import Profile from './components/profile/profile';





function App() {
  return (
    <div className="App">
        <Header/>
         <div className='container'>
          <ChallengePost/>
        </div>
   
    </div>
  );
}

export default App;
