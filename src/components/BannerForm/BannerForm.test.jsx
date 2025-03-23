import React from "react";
import { render, screen } from "@testing-library/react";
import BannerForm from "../BannerForm";

jest.mock("../Banner", () => () => (
  <div data-testid="mock-banner">Mock Banner</div>
));

describe("BannerForm Component", () => {
  test("renders BannerForm with default values", () => {
    render(<BannerForm />);
    expect(screen.getByTestId("banner-component")).toBeInTheDocument();
    expect(screen.getByTestId("mock-banner")).toBeInTheDocument();
    expect(screen.getByLabelText("Background Color:")).toBeInTheDocument();
    expect(screen.getByLabelText("Title:")).toBeInTheDocument();
    expect(screen.getByLabelText("Text:")).toBeInTheDocument();
    expect(screen.getByLabelText("Description:")).toBeInTheDocument();
    expect(screen.getByLabelText("Image URL:")).toBeInTheDocument();
    expect(screen.getByLabelText("Background Image URL:")).toBeInTheDocument();
    expect(screen.getByText("List Items:")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter banner title")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your banner text here")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter banner description")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Paste image URL here")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Paste background image URL here")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Add new list item")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Capturing moments and spending quality time with friends and family"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: "✕" })).toHaveLength(5);
  });
});
