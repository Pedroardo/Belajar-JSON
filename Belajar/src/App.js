import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AppM from "./components/modal";

const SettingFunction = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    //mounting
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        // Update state with fetched data
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        {posts.map((post) => (
          <div>
            <p key={post.id}>
              <b>{post.username}</b>
            </p>
            <p key={post.id}>{post.email}</p>
            <AppM />
          </div>
        ))}
      </div>
      <modal />
    </>
  );
};

export default SettingFunction;
