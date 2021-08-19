import React from "react";
import { render, screen } from "@testing-library/react";
import ItemCart from "../ItemCart/ItemCart";
import Category from "../Category/Category";
import TitlePublisher from "../TitlePublisher/TitlePublisher";




describe("test home page", () => {
  test("create item", () => {
    const itemBlock = {
      title: "one",
      image: "image",
      content: "music text",
      price: "143"
    }

    const mockItem = jest.fn()

    expect(mockItem)
    render(<ItemCart item={itemBlock}/>);
  });

  test("test title item", () => { 
    const itemTitle = "one product";

    render(<ItemCart itemTitle={itemTitle}/>);
    screen.getByText(itemTitle);
  });

  test("test category block", () => {
    const categoryTitle = "one category";
    const categoryContent = "content category"
  
    render(<Category categoryTitle={categoryTitle} categoryContent={categoryContent}/>);
    screen.getByText(categoryTitle);
    screen.getByText(categoryContent);
  })

  test("test title on page", () => {
    const title = "test title page";

    render(<TitlePublisher titlePublisher={title}/>)
    screen.getByText(title);
  })
});
