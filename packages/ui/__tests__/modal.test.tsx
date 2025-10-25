import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { useDisclosure } from "../src/hooks/useDisclosure";

// Simple Modal component for testing
function TestModal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!isOpen) return null;

  return (
    <div role="dialog" aria-modal="true" data-testid="modal">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-content">
        <button onClick={onClose} aria-label="Close modal">
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

function TestModalWithHook() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button onClick={onOpen}>Open Modal</button>
      <TestModal isOpen={isOpen} onClose={onClose}>
        <h2>Modal Content</h2>
        <p>This is a test modal</p>
      </TestModal>
    </>
  );
}

describe("Modal", () => {
  it("is hidden by default", () => {
    render(
      <TestModal isOpen={false} onClose={() => {}}>
        Content
      </TestModal>,
    );
    expect(screen.queryByText(/Content/)).toBeNull();
  });

  it("renders when open", () => {
    render(
      <TestModal isOpen={true} onClose={() => {}}>
        Test content
      </TestModal>,
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();

    render(
      <TestModal isOpen={true} onClose={handleClose}>
        Test content
      </TestModal>,
    );

    await user.click(screen.getByLabelText("Close modal"));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when backdrop is clicked", async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();

    render(
      <TestModal isOpen={true} onClose={handleClose}>
        Test content
      </TestModal>,
    );

    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) {
      await user.click(backdrop);
      expect(handleClose).toHaveBeenCalledTimes(1);
    }
  });

  it("has proper accessibility attributes", () => {
    render(
      <TestModal isOpen={true} onClose={() => {}}>
        Test content
      </TestModal>,
    );

    const modal = screen.getByRole("dialog");
    expect(modal).toHaveAttribute("aria-modal", "true");
  });

  it("works with useDisclosure hook", async () => {
    const user = userEvent.setup();

    render(<TestModalWithHook />);

    // Initially closed
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    // Open modal
    await user.click(screen.getByText("Open Modal"));
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    // Close modal
    await user.click(screen.getByLabelText("Close modal"));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
