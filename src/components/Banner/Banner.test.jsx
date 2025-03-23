import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from "./index";

describe("Banner Component", () => {
  const defaultProps = {
    background: "#6a11cb",
    title: "Personal Growth",
    text: "I enjoy improving myself both in life and work.",
    description:
      "Alongside personal growth, I find fulfillment in various activities.",
    listItems: ["Reading", "playing music"],
    imageUrl:
      "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    backgroundImage:
      "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  test("renders the banner with default props", () => {
    render(<Banner {...defaultProps} />);
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
    defaultProps.listItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
    const image = screen.getByAltText("Banner illustration");
    expect(image).toBeInTheDocument();
    expect(image.src).toBe(defaultProps.imageUrl);
  });

  test("renders the banner without optional props", () => {
    render(<Banner />);
    expect(screen.getByText("Personal Growth")).toBeInTheDocument();
    expect(
      screen.getByText("I enjoy improving myself both in life and work.")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Alongside personal growth, I find fulfillment in various activities that enrich my perspective and well-being."
      )
    ).toBeInTheDocument();
    const image = screen.getByAltText("Banner illustration");
    expect(image).toBeInTheDocument();
    expect(image.src).toBe(
      "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
  });
});
