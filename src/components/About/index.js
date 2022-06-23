import React from 'react';

function About() {

  return (
    <div id='about-me'>
        <h1 className='page-title'>About Me</h1>
        <article className='content-section'>
          
          <p>Hello! My name is Eika Tokunaga and I'm a musical composer and software engineer living in Albany, California. </p>
          
          <div className='grid-row'>
            <p>I began coding when I started attending Oberlin College in 2017. Since then, my passion for problem solving and desire to create interactive, engaging, and artistic applications has led me to pursue a career in software engineering. </p>
            <img id='code-pic' src={require(`../../reactPortfolioPfp.jpeg`)}></img>
          </div>
          
          <p>I first got into music when my dad forced me to join choir in 6th grade to "make friends." Thankfully, he was onto something. Since then, I've dedicated large portions of my life to studying and creating music. </p>

          <div className='grid-row'>
            <img id='music-pic' src={require(`../../reactPortfolioMusicPic.jpeg`)}></img>
            <p>Since taking my first composition class at Oberlin College, I've slowly dived deeper into the composition world. My main two areas of composition are experimental chamber vocal ensembles and kumi daiko MAKE THIS A LINK LATER</p>
          </div>
        </article>
    </div>
  );
}

export default About;