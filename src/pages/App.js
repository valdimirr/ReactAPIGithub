import { useState } from 'react';
import gitLogo from '../assets/git.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';


import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {

const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id)

      if(!isExist){

      
      setRepos(prev => [...prev, data]);
      setCurrentRepo('')
      return
    }
  }
    alert('Repositório já pesquisado!')
  }

 const handleRemoveRepo = (id) => {
  const sla = repos.filter(repo => repo.id === id)
  if(!sla){
    console.log('to aqui');
    setRepos('');
  }else{
    console.log('to aqui2');
    console.log(repo => repo.id);
    console.log(repos);
    setRepos(repos.id === null, repos.name === null, repos.full_name=null );
  }
  


  
 }

  return (
    <Container className="App">
      <img src={gitLogo} width={72} height={72} alt="Github logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
  );
}
export default App;
