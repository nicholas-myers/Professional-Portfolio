import React from "react";
import { NavLink, Route } from "react-router-dom";
import styled from "styled-components";

const SkillSection = styled.section`
  height: 100%;
  width: 100%;
  div {
    height: 100%;
  }
  article {
    height: 90%;
    display: flex;
    /* border: 1px solid black; */
    justify-content: space-around;
    flex-flow: column;
  }
  @media (max-width: 500px) {
    overflow: scroll;
    overflow-x: hidden;
  }
`;
const SkillNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 0 10px 5px #3abae6;
  margin: 0;
  a {
    background-color: #2f63ad;
    padding: 0 1rem;
    box-shadow: 0 0 10px 5px #3abae6;
    border-radius: 1rem;
    color: #d5e3eb;
    text-decoration: none;
    text-shadow: 0px 0px 15px #1a2243;
    transition: 1s;
    &:hover {
      background-color: #3abae6;
      box-shadow: 0 0 10px 1px #1a2243;
      padding: 0 1%;
      transition: 1s;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
    flex-wrap: wrap;
    position: sticky;
    top: 0;
    background-color: #d5e3eb;
    a {
      margin: 1rem;
    }
  }
`;

const SkillContent = styled.div`
  overflow: hidden;
`;

export default function Skills() {
  const languages = ["HTML", "CSS", "JAVASCRIPT", "REACT", "JAVA", "PYTHON"];
  return (
    <SkillSection>
      <SkillNav>
        <NavLink to="/skills/html" activeStyle={{ backgroundColor: "#3ABAE6" }}>
          HTML
        </NavLink>
        <NavLink to="/skills/css" activeStyle={{ backgroundColor: "#3ABAE6" }}>
          CSS
        </NavLink>
        <NavLink to="/skills/js" activeStyle={{ backgroundColor: "#3ABAE6" }}>
          JAVASCRIPT
        </NavLink>
        <NavLink
          to="/skills/react"
          activeStyle={{ backgroundColor: "#3ABAE6" }}
        >
          REACT
        </NavLink>
        <NavLink to="/skills/java" activeStyle={{ backgroundColor: "#3ABAE6" }}>
          JAVA
        </NavLink>
        <NavLink
          to="/skills/python"
          activeStyle={{ backgroundColor: "#3ABAE6" }}
        >
          PYTHON
        </NavLink>
      </SkillNav>
      <SkillContent>
        <Route path="/skills/html">
          <article>
            <h2>HTML</h2>
            <p>Rule to remember: Everything is a box.</p>
            <p>
              Step ONE: Draw out on paper or drawing tool of your choice a
              layout using boxes.
            </p>
            <p>Step TWO: Label each box that has symantic meaning.</p>
            <p>
              Write your Code. Inserting each element into it's proper "box".
            </p>
            {/* <div>
                  <pre>
                    <code>
                      <p>
                        1 |
                      </p> <p>{`function blitz(){return “function body is visible”}`}</p>
                    </code>
                  </pre>
              </div> */}
          </article>
        </Route>
        <Route path="/skills/css">
          <article>
            <h2>CSS</h2>
            <p>Rule to remember: Everything is a box.</p>
            <p>
              Step One: We can go back to our Layout of boxes and make sure we
              have out non-symantic positioning boxes properly labeled.
            </p>
            <p>
              Step TWO: Starting at our top level(outer-most box). We can use{" "}
              <code>flex</code> or <code>grid</code> to get all our boxes into
              the right position.
            </p>
            <p>
              Step Three: If our boxes need additional postioning. Use with
              width and height, again starting at the outermost box.
            </p>
            <p>
              Step Four: If our boxes still need additional postioning. Use
              Margin and Padding to position elements.
            </p>
            <p>
              Note: when we follow this pattern, in general, we have an easier
              time with responsive design.
            </p>
            <p>
              Step Five: add color and animation to make our site look clean and
              professional.
            </p>
          </article>
        </Route>
        <Route path="/skills/js">
          <article>
            <h2>JAVASCRIPT</h2>
            <p>We can use JS to help with our animations.</p>
            <p>Choose an element.</p>
            <p>Choose a trigger.</p>
            <p>We can also use JS to set up forms.</p>
            <p>Talk with a server or API.</p>
            <p>
              Dynamically create and remove elements, based on user interaction
              with our site or by interacting with a server or api.
            </p>
            <p>
              JS is not strongly typed we can fluidly use OOP(object oriented
              programming) or FP(Functional Programming) to solve problems.
            </p>
          </article>
        </Route>
        <Route path="/skills/react">
          <article>
            <h2>REACT</h2>
            <p>
              A combination of JS, HTML, and CSS with an extra tool set to more
              easily work with the DOM.This combonation is called JSX.
            </p>
            <p>Keep in Mind: everything is a box.</p>
            <p>
              When creating our components. We can go back to our design Layout
              and define which boxes we want to be a component. We especially
              make components that we can reuse more than once to reduce the
              lines of code(DRY code).
            </p>
            <p>
              Examine How much state we need and what management system is best
              suited for our purposes. Use Redux for large and scalable state.
              We can use Context if we don't need to reuse state too much. Or
              props if most of our state is local and only needs to flow one
              direction with a minimal amount of passing.
            </p>
            <p>
              If we want quick already styled components, use a component
              library such as Material UI. If we want custom components, we can
              use styled-Components and SASS or LESS.
            </p>
            <p>Add testing to make sure all components are functional.</p>
          </article>
        </Route>
        <Route path="/skills/java">
          <article>
            <h2>JAVA</h2>
            <p>I can Build a backend Server.</p>
            <p>Strongly Typed, OOP</p>
            <p>
              Draw out what our data structure will look like. Draw each table,
              and each piece of data is connected to a particular table. Draw
              the connections to each table.
            </p>
            <p>Build class constructors</p>
            <p>determine what services(interfaces) each table will have.</p>
            <p>Build the endpoints in our Controllers.</p>
            <p>Create Exception handling.</p>
            <p>Test server returns.</p>
            <p>Add data persistence and host.</p>
          </article>
        </Route>
        <Route path="/skills/python">
          <article>
            <h2>PYTHON</h2>
            <p>UPER</p>
            <li>Understand</li>
            <li>Plan</li>
            <li>Execute</li>
            <li>Review</li>
            <p>Strongly Typed, OOP</p>
          </article>
        </Route>
      </SkillContent>
    </SkillSection>
  );
}
