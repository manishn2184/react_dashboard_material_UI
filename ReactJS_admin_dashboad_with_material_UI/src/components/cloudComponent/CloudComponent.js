import React, { Component } from 'react';
import TagCloud from 'react-tag-cloud';
import '../../assets/css/style.css'

const styles = {
  large: {
    fontSize: 36,
    fontWeight: 'bold',
    color:'#fff'
  },
  small: {
    opacity: 0.7,
    fontSize: 18,
    color:'#fff'
  },
  medium:{
    opacity: 0.8,
    fontSize: 25,
    fontWeight: 'bold',
    color:'#fff'
  }
};

class CloudComponent extends Component {
  componentDidMount() {
 
  }

  render() {
    return (
      <div className='app-outer'>
        <div className='app-inner'>
      
          <TagCloud 
            className='tag-cloud'
            style={{
              fontFamily: 'sans-serif',
              fontSize: 26,
              color:'#fff',
              padding: 5,
            }}>
            <div
              style={{
                fontFamily: 'serif',
                fontSize: 26,
                fontStyle: 'italic',
                fontWeight: 'bold',
                color: '#fff'
              }}>Futurama</div>
          
            <div style={styles.large}>Transformers</div>
            <div style={styles.large}>Simpsons</div>
            <div style={styles.medium}>Dragon Ball</div>
            <div style={styles.large}>Rick & Morty</div>
            <div style={{fontFamily: 'courier'}}>He man</div>
            <div style={{fontSize: 22}}>World trigger</div>
            <div style={{fontStyle: 'italic'}}>Avengers</div>
            <div style={{fontWeight: 200}}>Family Guy</div>
            <div style={{color: '#fff'}}>American Dad</div>
           
            <div>Gobots</div>
            <div>Thundercats</div>
            <div>M.A.S.K.</div>
            <div>GI Joe</div>
            <div>Inspector Gadget</div>
            <div>Bugs Bunny</div>
            <div>Tom & Jerry</div>
            <div>Cowboy Bebop</div>
            <div>Evangelion</div>
            <div>Bleach</div>
            <div>GITS</div>
            <div>Pokemon</div>
            <div>She Ra</div>
            <div>Fullmetal Alchemist</div>
            <div>Gundam</div>
            <div>Uni Taisen</div>
            <div>Pinky and the Brain</div>
            <div>Bobs Burgers</div>
            <div style={styles.small}>Dino Riders</div>
            <div style={styles.medium}>Silverhawks</div>
            <div style={styles.small}>Bravestar</div>
            <div style={styles.small}>Starcom</div>
            <div style={styles.medium}>Cops</div>
            <div style={styles.small}>Alfred J. Kwak</div>
            <div style={styles.medium}>Dr Snuggles</div>
          </TagCloud>
        </div>
      </div>
    );
  }
}

export default CloudComponent;
