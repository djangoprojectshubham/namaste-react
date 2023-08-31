import { getByTestId, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";

import Headers from "../Header";
import store from "../../utils/store";
import { LOGO_URL } from "../../utils/constants";
import { on } from "process";

test("Logo should load on rendering header", () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Headers />
      </Provider>
    </StaticRouter>
  );
  // check if logo is loaded
  const logo = header.getByTestId("logo");
  expect(logo.src).toBe(LOGO_URL);
});

test("Online status should be green on rendering header", () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Headers />
      </Provider>
    </StaticRouter>
  );

  const onlineStatus = header.getByTestId("online-status");
  expect(onlineStatus.innerHTML).toBe("Online Status: Active");
});

test("Cart items should be 0 on rendering header", () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Headers />
      </Provider>
    </StaticRouter>
  );
  const cartItem = header.getByTestId("cart-item");
  expect(cartItem.innerHTML).toBe("Cart- 0");
});
