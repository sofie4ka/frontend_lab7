import React from 'react';
import './Content.css';

export class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedElements: {},
    };
  }

  handleClick = (event, elementId) => {
    const { clickedElements } = this.state;
    const nextElementId = elementId + 1;

    if (!clickedElements[`element${elementId}`]) {
      const updatedClickedElements = { ...clickedElements };
      updatedClickedElements[`element${elementId}`] = true;
      this.setState({ clickedElements: updatedClickedElements });
      event.target.classList.add('highlight');
    } else {
      event.target.classList.toggle('highlight');
    }

    const nextElement = document.getElementById(`element${nextElementId}`);
    if (nextElement) {
      if (!clickedElements[`element${nextElementId}`]) {
        const updatedClickedElements = { ...clickedElements };
        updatedClickedElements[`element${nextElementId}`] = true;
        this.setState({ clickedElements: updatedClickedElements });
        nextElement.classList.add('highlightNext');
      } else {
        nextElement.classList.toggle('highlightNext');
      }
    }
  };

  render() {
    const { clickedElements } = this.state;

    return (
      <main onClick={(event) => this.handleClick(event, 0)}>
        <h2 id="element0" onClick={(event) => this.handleClick(event, 0)}
          className={clickedElements['element0'] ? 'highlight' : ''}>Mendyk Sofiia Ihorivna</h2>

        <p id="element1">Place and date of birth: Kyiv, Ukraine; 28.05.2004</p>

        <p id="element2">
          Education: School №40, Kyiv;
          <br />
          National Technical University of Ukraine
          “Igor Sikorsky Kyiv Polytechnic Institute”, Kyiv;
        </p>

        <h3 id="element4">HOBBY:</h3>
        <ul id="element5">
          <li id="element6">Rhytmic gymnastics</li>
          <li id="element7">Watching films</li>
          <li id="element8">Spending time with friends</li>
          <li id="element9">Going to the gym</li>
        </ul>

        <h3 id="element10">FAVORITE FILMS:</h3>
        <ol id="element11">
          <li id="element12">Enchanted, 2007</li>
          <li id="element13">Last Christmas, 2019</li>
          <li id="element14">Hacksaw Ridge, 2016</li>
        </ol>

        <p id="element15">
          The most incredible city where i have ever been to was <b>London</b>.
          <br />
          <b>London</b> is a world cultural capital. It is the world's most-visited city as measured by international arrivals and has the world's largest city airport system measured by passenger traffic. London's 43 universities form the largest concentration of higher education institutes in Europe.
        </p>
      </main>
    );
  }
}