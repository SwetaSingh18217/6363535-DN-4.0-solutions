import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [view, setView] = useState("book");

  
  let content;
  if (view === "book") {
    content = <BookDetails />;
  } else if (view === "blog") {
    content = <BlogDetails />;
  } else {
    content = <CourseDetails />;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Blogger App</h1>

      {/* Buttons to switch views */}
      <div>
        <button onClick={() => setView("book")}>Show Book</button>
        <button onClick={() => setView("blog")}>Show Blog</button>
        <button onClick={() => setView("course")}>Show Course</button>
      </div>

      <hr />

      {/* Way 2: Element Variable */}
      {content}

      {/* Way 3: Ternary Operator */}
      <div>
        {view === "book" ? <p>You're viewing a Book</p> : null}
      </div>

      {/* Way 4: Logical && operator */}
      <div>
        {view === "blog" && <p>This is a Blog section</p>}
        {view === "course" && <p>Courses help you grow</p>}
      </div>
    </div>
  );
}

export default App;
