import React from "react";
import { render, screen } from "@testing-library/react";
import ModalOrder from "../ModalOrder/ModalOrder";

describe("test from order", () => {
  test("test open modal window", () => {
    const modalShow = false;

    render(
      <ModalOrder show={modalShow} />
    );
  });
});
