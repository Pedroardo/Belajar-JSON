import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useEffect } from "react";

const AppM = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          {posts.map((post) => (
            <div>
              <p key={post.id}>
                <b>{post.username}</b>
                <p>{post.email}</p>
                <p>{post.address.street}</p>
                <p>{post.address.suite}</p>
                <p>{post.address.city}</p>
                <p>{post.address.zipcode}</p>
              </p>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};
export default AppM;
