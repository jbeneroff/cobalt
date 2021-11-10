import whitepaper from '../assets/Cobalt_white_paper.pdf'
import { Link } from 'react-router-dom'
import './About.css'
import logo from '../assets/logo.png';

export default function About() {
  return (
    <div>
      <div>
        <Link to='/'> 
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
      <h2 id='about-header'>About Cobalt (CBLT)</h2>
      <a id='white-paper' id='white-paper-btn' href={whitepaper} >
        View the Cobalt White Paper
      </a>
      <p id='part-1'>Cobalt Coin was born not from a question, but a desire. To build a foundational community around the superior feline-themed cryptocurrency, Cobalt Coin. This mission is derived from a number of core beliefs, but you may be wondering why Cobalt and our feline mascot CBLT Cat are linked? The answer is simple. Cobalt, in pure elemental form, has a wide variety of use cases within the current socioeconomic structures of modern day humanity. From lithium ion batteries in EVs and smartphones, to catalyst compounds within the petroleum and chemical industries, through corrosion and wear-resistant alloys, vehicle airbag assemblies and many, many more applications. In this pure elemental form, it quite literally weaves the fabric of creation for almost all of humanity's greatest technological achievements. The element we owe the most thanks to, really. But the question remains, why cats? Not only is the development team cat-obsessed, but cats aren’t so different from the element of Cobalt in terms of their benefits throughout the historical progression of humanity. Approximately 9,000 years ago cats began to integrate themselves into a symbiotic relationship with humans, helping protect children, eating disease ridden vermin, and reducing airborne allergens around our settlements. Outside of their behavior, it’s also obvious that their companionship has had an enormous effect on our physiological well-being, offering lower blood pressure, lowered stress levels, and better cardiovascular health. An animal companion we’d be nowhere without. So, why Cobalt Coin? The answer is a question: why not celebrate both entities in a single grassroots-built cryptocurrency with ownership focused on the individuals within this spontaneously built community? And so the dev’s said, “let there be CBLT!” And so it was built</p>
      <p id='part-2'>We’ve approached the creation of this project as a means of creating a platform where crazy cat people and techies alike gather united in community around our core principals and the overall decentralization of wealth and governance at the individual level that a centralized initiative could never replicate. We are everything with this community, understanding we do indeed stand united in both purpose and control. From Day 1, we’ve encouraged all individuals who love cats, cherish the sanctity of SoV, understand the value of Cobalt, and those who stand for the power of The People to join what we call the “Cobalition”, the collective of all those who join our power-distributed community. Join the movement and drink your Cobaltinis in celebration of wealth and power!</p>
    </div>
  )
}
