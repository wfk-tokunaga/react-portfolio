import React from 'react';

function About() {

  return (
    <div id='about-me'>
        <h1>About Me</h1>
        <article className='content-section'>
          
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum labore, ad optio laborum consectetur 
            dignissimos incidunt tempora consequuntur sit quae sint expedita excepturi obcaecati cupiditate non recusandae.</p>
          
          <div className='grid-row'>
            <p>Some text about coding and me. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum labore, 
              ad optio laborum consectetur dignissimos incidunt tempora consequuntur sit quae sint expedita excepturi 
              obcaecati cupiditate non recusandae, omnis sequi aliquid inventore a nihil, eum ducimus est mollitia? 
              Ullam laboriosam voluptates repellendus qui deleniti, odit inventore?</p>
            <img id='code-pic' src={require(`../../wiggins-pixel.png`)}></img>
          </div>
          
          <p>Some more text about my connection to music. Some text about coding and me. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum labore, ad optio laborum consectetur dignissimos incidunt tempora consequuntur sit quae sint expedita excepturi obcaecati cupiditate non recusandae, </p>

          <div className='grid-row'>
            <img id='music-pic' src={require(`../../butler.jpg`)}></img>
            <p>Some text about music and me. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum labore, ad optio laborum consectetur dignissimos incidunt tempora consequuntur sit quae sint expedita excepturi obcaecati cupiditate non recusandae, omnis sequi aliquid inventore a nihil, eum ducimus est mollitia? Ullam laboriosam voluptates repellendus qui deleniti, odit inventore?</p>
          </div>
        </article>
    </div>
  );
}

export default About;