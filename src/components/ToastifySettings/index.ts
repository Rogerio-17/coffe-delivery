import { Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.minimal.css";

import { styled } from "styled-components";
import { ToastContainer } from "react-toastify";

export const ToastContainerStyled = styled(ToastContainer)`
  .Toastify__toast {
    border-radius: 6px;
    background: ${({ theme }) => theme["purple-light-200"]};

    svg {
      fill: ${({ theme }) => theme["purple-dark-800"]};
    }
  }

  .Toastify__progress-bar {
    background: ${({ theme }) => theme["purple-dark-800"]};
  }
`;

type TypeOptions = 'info' | 'success' | 'warning' | 'error'| 'default'

export function toastifySuccess(alert: string, type: TypeOptions) {
  toast(alert, {
    type: type,
    autoClose: 1000,
    pauseOnFocusLoss: false,
    transition: Flip,
  });
}
