import React, { useState } from "react";

const blogs = [
  { title: "Mastering JavaScript", content: "JavaScript is a powerful language for web development." },
  { title: "React in Indian Startups", content: "React is widely used in many Indian tech companies." },
  { title: "Career in Web Development", content: "Explore job roles and growth in web development." },
];

const App = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>📰 Blog Titles</h1>
      <ul>
        {blogs.map((blog, index) => (
          <li
            key={index}
            style={{ cursor: "pointer", color: "blue", marginBottom: "10px" }}
            onClick={() => setSelectedBlog(blog)}
          >
            {blog.title}
          </li>
        ))}
      </ul>

      <hr />

      {selectedBlog ? (
        <div>
          <h2>{selectedBlog.title}</h2>
          <p>{selectedBlog.content}</p>
        </div>
      ) : (
        <p style={{ color: "gray", fontStyle: "italic" }}>Select a blog to read</p>
      )}
    </div>
  );
};

export default App;
