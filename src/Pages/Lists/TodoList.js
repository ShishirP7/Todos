import React from "react";
import Carousel from "react-bootstrap/Carousel";
import List from "../../Images/List.jpg";
import Todo from "../../Images/Todo.jpg";
import Notes from "../../Images/Notes.jpg";
import TOdoBanner from "../../Images/todoBanner.png";
export default function TodoList() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="BannerBackground" src={Todo} alt="First slide" />
        <div className="TodoBackground">
          <div>
            <h3>To Do List</h3>
            <p>
              The to-do list you would actually follow is Any.do. Developed to
              assist you in becoming organized, achieving your goals, and never
              forgetting anything
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img className="BannerBackground" src={List} alt="Second slide" />
        <div className="TodoBackground">
        <div>
            <h3>To Do List</h3>
            <p>
              The to-do list you would actually follow is Any.do. Developed to
              assist you in becoming organized, achieving your goals, and never
              forgetting anything
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img className="BannerBackground" src={Notes} alt="Third slide" />
        <div className="TodoBackground">
        <div>
            <h3>To Do List</h3>
            <p>
              The to-do list you would actually follow is Any.do. Developed to
              assist you in becoming organized, achieving your goals, and never
              forgetting anything
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
