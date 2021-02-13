import logo from './logo.svg';
import {useState,useEffect} from 'react'
import './App.css';
//import {v4 as uuidv4} from 'uuid';
import {useSpring, animated as a} from 'react-spring'
function App() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
    return (
  
   
   <div onClick={() => set(state => !state)}>
      <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >       <div className="text display-5">Happy Valentines day</div></a.div>
      <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) }}>
          <blockquote className="blockqoute">
              <p className="mb-0 title lead">
                Dear mylab,
              </p>
              <p className="mb-0 message ">
                Happy Valentines mylab, sorry if this is the only thing that i can give you in this day.
                Kabaw naman sad siguro kas akong feelings para nimo kung unsa tika ka love og unsa ka impartante sakoa.
                I know werent on the same path but lets just continue until the day would come that we will taking the same path until in the end.
                (batia ani oie HAHHAHAHAHA) basta pasabot ana padayon lang ta hantod sa hantod amen. Thank sad lab sa mga things nga gebuhat nimo
                para nako sa pag sabot sa , sa pag love and many more. ahak d ko kabaw express sako feeling in writing maong kani lang sa mylab.. i love youu (heart)
              </p>
          </blockquote>
      </a.div>
    </div>
  );
}

export default App;
