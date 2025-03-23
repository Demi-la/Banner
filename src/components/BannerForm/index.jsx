import React, { useState } from "react";
import Banner from "../Banner";
import "./BannerForm.css";

function BannerForm() {
  const [background, setBackground] = useState("#6a11cb");
  const [title, setTitle] = useState("Personal Growth");
  const [text, setText] = useState(
    "I enjoy improving myself both in life and work."
  );
  const [description, setDescription] = useState(
    "Alongside personal growth, I find fulfillment in various activities that enrich my perspective and well-being."
  );
  const [backgroundImage, setBackgroundImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [listItems, setListItems] = useState([
    "Capturing moments and spending quality time with friends and family",
    "Building Relationships: Growing my professional and personal network",
    "Personal Wellness: Balancing work with physical and mental health",
    "Music Appreciation: Playing instruments and discovering new artists",
    "Setting Goals: Creating measurable targets for continuous improvement",
  ]);
  const [newListItem, setNewListItem] = useState("");

  const handleBackgroundChange = (e) => {
    setBackground(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleBackgroundImageChange = (e) => {
    setBackgroundImage(e.target.value);
  };

  const handleAddListItem = (e) => {
    e.preventDefault();
    if (newListItem.trim()) {
      setListItems([...listItems, newListItem]);
      setNewListItem("");
    }
  };

  const handleRemoveListItem = (index) => {
    const updatedList = [...listItems];
    updatedList.splice(index, 1);
    setListItems(updatedList);
  };

  return (
    <div className="bannerContainer" data-testid="banner-component">
      <h1 className="bannerTitle">Things I Enjoy</h1>

      <Banner
        background={background}
        title={title}
        text={text}
        description={description}
        backgroundImage={backgroundImage}
        imageUrl={imageUrl}
        listItems={listItems}
      />

      <form className="form">
        <div className="formItem">
          <label htmlFor="bgColor">Background Color:</label>
          <div className="backgroundColorForm">
            <input
              id="bgColor"
              type="color"
              value={background}
              onChange={handleBackgroundChange}
            />
            <span style={{ color: "#666", fontSize: "0.9rem" }}>
              {background}
            </span>
          </div>
        </div>

        <div className="formItem">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter banner title"
          />
        </div>

        <div className="formItem">
          <label htmlFor="bannerText">Text:</label>
          <input
            id="bannerText"
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Enter your banner text here"
          />
        </div>

        <div className="formItem">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter banner description"
            rows="3"
            className="descriptionInput"
          />
        </div>
        <div className="formItem">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            id="imageUrl"
            type="text"
            value={imageUrl}
            onChange={handleImageChange}
            placeholder="Paste image URL here"
          />
        </div>

        <div className="formItem">
          <label htmlFor="backgroundImageUrl">Background Image URL:</label>
          <input
            id="backgroundImageUrl"
            type="text"
            value={backgroundImage}
            onChange={handleBackgroundImageChange}
            placeholder="Paste background image URL here"
          />
        </div>

        <div className="formItem">
          <label>List Items:</label>
          <div className="listItemsContainer">
            <ul className="listItems">
              {listItems.map((item, index) => (
                <li key={index} className="listItem">
                  <span style={{ flex: 1 }}>{item}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveListItem(index)}
                    className="removeButton"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
            <div className="addItemContainer">
              <input
                type="text"
                value={newListItem}
                onChange={(e) => setNewListItem(e.target.value)}
                placeholder="Add new list item"
                style={{ flex: 1 }}
              />
              <button
                type="button"
                onClick={handleAddListItem}
                className="addButton "
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BannerForm;
