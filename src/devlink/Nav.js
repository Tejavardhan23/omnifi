"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Nav.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-407"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65f1e45567f81fe186575af0|635e13cf-6e16-ab3e-6d15-511ca0b739c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65f1e45567f81fe186575af0|635e13cf-6e16-ab3e-6d15-511ca0b739c8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626227992075},"e-2":{"id":"e-2","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-590"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65f1e45567f81fe186575af0|635e13cf-6e16-ab3e-6d15-511ca0b739c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65f1e45567f81fe186575af0|635e13cf-6e16-ab3e-6d15-511ca0b739c8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626227992075},"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8ba72d32-943b-c023-c40f-3343a70449b1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8ba72d32-943b-c023-c40f-3343a70449b1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664356978139},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8ba72d32-943b-c023-c40f-3343a70449b1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8ba72d32-943b-c023-c40f-3343a70449b1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664356978139},"e-51":{"id":"e-51","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-52"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65f4b816c1f45e764a313f08|635e13cf-6e16-ab3e-6d15-511ca0b739c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65f4b816c1f45e764a313f08|635e13cf-6e16-ab3e-6d15-511ca0b739c8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1710536727117},"e-52":{"id":"e-52","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-51"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65f4b816c1f45e764a313f08|635e13cf-6e16-ab3e-6d15-511ca0b739c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65f4b816c1f45e764a313f08|635e13cf-6e16-ab3e-6d15-511ca0b739c8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1710536727117},"e-61":{"id":"e-61","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-62"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65f4b84dffef53e9e0666c0d|635e13cf-6e16-ab3e-6d15-511ca0b739c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65f4b84dffef53e9e0666c0d|635e13cf-6e16-ab3e-6d15-511ca0b739c8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1710536782401},"e-62":{"id":"e-62","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-61"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65f4b84dffef53e9e0666c0d|635e13cf-6e16-ab3e-6d15-511ca0b739c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65f4b84dffef53e9e0666c0d|635e13cf-6e16-ab3e-6d15-511ca0b739c8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1710536782401},"e-85":{"id":"e-85","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-86"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f3198e58-ec79-ad0b-0c50-1dd26a2033f5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f3198e58-ec79-ad0b-0c50-1dd26a2033f5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711371449202},"e-86":{"id":"e-86","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-85"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f3198e58-ec79-ad0b-0c50-1dd26a2033f5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f3198e58-ec79-ad0b-0c50-1dd26a2033f5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711371449202},"e-95":{"id":"e-95","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-96"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6602e4d4b78d3b0f0a69f37b|635e13cf-6e16-ab3e-6d15-511ca0b739c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6602e4d4b78d3b0f0a69f37b|635e13cf-6e16-ab3e-6d15-511ca0b739c8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711465685210},"e-96":{"id":"e-96","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-95"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6602e4d4b78d3b0f0a69f37b|635e13cf-6e16-ab3e-6d15-511ca0b739c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6602e4d4b78d3b0f0a69f37b|635e13cf-6e16-ab3e-6d15-511ca0b739c8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711465685210},"e-115":{"id":"e-115","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-116"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.launchapp","originalId":"f3198e58-ec79-ad0b-0c50-1dd26a2033f0","appliesTo":"CLASS"},"targets":[{"selector":".button.launchapp","originalId":"f3198e58-ec79-ad0b-0c50-1dd26a2033f0","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711467964340}},"actionLists":{"a":{"id":"a","title":"Navbar [Open Menu]","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navbar_menu-icon-line-middle","selectorGuids":["aa586855-d53a-96ff-f62c-b528bfd01388"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".navbar_menu-icon-line-bottom","selectorGuids":["aa586855-d53a-96ff-f62c-b528bfd01394"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".navbar_menu-icon-line-top","selectorGuids":["aa586855-d53a-96ff-f62c-b528bfd01387"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".navbar_menu-icon-line-top","selectorGuids":["aa586855-d53a-96ff-f62c-b528bfd01387"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".navbar_menu-icon-line-bottom","selectorGuids":["aa586855-d53a-96ff-f62c-b528bfd01394"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-2":{"id":"a-2","title":"Navbar [Close Menu]","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".navbar_menu-icon-line-bottom","selectorGuids":["aa586855-d53a-96ff-f62c-b528bfd01394"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".navbar_menu-icon-line-top","selectorGuids":["aa586855-d53a-96ff-f62c-b528bfd01387"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".navbar_menu-icon-line-bottom","selectorGuids":["aa586855-d53a-96ff-f62c-b528bfd01394"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".navbar_menu-icon-line-top","selectorGuids":["aa586855-d53a-96ff-f62c-b528bfd01387"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navbar_menu-icon-line-middle","selectorGuids":["aa586855-d53a-96ff-f62c-b528bfd01388"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-21":{"id":"a-21","title":"Navbar [Open Menu] 2","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navbar_menu-icon-line-middle","selectorGuids":["aa586855-d53a-96ff-f62c-b528bfd01388"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-21-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".navbar_menu-icon-line-bottom","selectorGuids":["aa586855-d53a-96ff-f62c-b528bfd01394"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-21-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".navbar_menu-icon-line-top","selectorGuids":["aa586855-d53a-96ff-f62c-b528bfd01387"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-21-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".navbar_menu-icon-line-top","selectorGuids":["aa586855-d53a-96ff-f62c-b528bfd01387"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-21-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".navbar_menu-icon-line-bottom","selectorGuids":["aa586855-d53a-96ff-f62c-b528bfd01394"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-22":{"id":"a-22","title":"Navbar [Close Menu] 2","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".navbar_menu-icon-line-bottom","selectorGuids":["aa586855-d53a-96ff-f62c-b528bfd01394"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-22-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".navbar_menu-icon-line-top","selectorGuids":["aa586855-d53a-96ff-f62c-b528bfd01387"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-22-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".navbar_menu-icon-line-bottom","selectorGuids":["aa586855-d53a-96ff-f62c-b528bfd01394"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-22-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".navbar_menu-icon-line-top","selectorGuids":["aa586855-d53a-96ff-f62c-b528bfd01387"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-22-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navbar_menu-icon-line-middle","selectorGuids":["aa586855-d53a-96ff-f62c-b528bfd01388"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-19":{"id":"a-19","title":"nav-connect","actionItemGroups":[{"actionItems":[{"id":"a-19-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".swap-wallet-wrapper-connect","selectorGuids":["cd0c4d94-4b28-0e8a-6075-491fe3bb7c6e"]},"value":"none"}}]},{"actionItems":[{"id":"a-19-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".swap-wallet-wrapper-connect","selectorGuids":["cd0c4d94-4b28-0e8a-6075-491fe3bb7c6e"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1711123768898}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Nav({
  as: _Component = _Builtin.NavbarWrapper,
  buttonVisibility = true,
  launchApp = false,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navbar_component")}
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      fs-scrolldisable-element="smart-nav"
      config={{
        animation: "default",
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        collapse: "medium",
        noScroll: false,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "navbar_container")}
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "nav-logo-link")}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            loading="eager"
            width="auto"
            height="auto"
            alt="omnifi protocol logo"
            src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65fe9f79a8be02b905a86205_omnifi%20protocol%20logo.svg"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "navbar_menu")}
          tag="nav"
          role="navigation"
        >
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "navbar_link", "hide")}
            options={{
              href: "#",
            }}
          >
            {"Documentation"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "navbar_link", "hide")}
            options={{
              href: "#",
            }}
          >
            {"Swap"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "navbar_link", "hide")}
            options={{
              href: "#",
              target: "_blank",
            }}
          >
            {"Listings"}
          </_Builtin.NavbarLink>
          <_Builtin.Link
            className={_utils.cx(_styles, "navbar_link")}
            button={false}
            block="inline"
            options={{
              href: "https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/661e5e825dc8d432e352df0d_Omnifi%20Lightpaper.pdf",
              target: "_blank",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "navbar_link-text")}
              tag="div"
            >
              {"Light Paper"}
            </_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "navbar_link")}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "navbar_link-text")}
              tag="div"
            >
              {"Swap"}
            </_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "navbar_link")}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "navbar_link-text")}
              tag="div"
            >
              {"Listings"}
            </_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar_button-wrapper")}
            tag="div"
          >
            {launchApp ? (
              <_Builtin.Link
                className={_utils.cx(_styles, "button")}
                button={true}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Launch App"}
              </_Builtin.Link>
            ) : null}
            {buttonVisibility ? (
              <_Builtin.Link
                className={_utils.cx(_styles, "button", "launchapp")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Connect Wallet"}
              </_Builtin.Link>
            ) : null}
          </_Builtin.Block>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton
          className={_utils.cx(_styles, "navbar_menu-button")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar_menu-icon")}
            data-w-id="f3198e58-ec79-ad0b-0c50-1dd26a2033f5"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "navbar_menu-icon-line-top")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "navbar_menu-icon-line-middle")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "navbar_menu-icon-line-middle-inner"
                )}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "navbar_menu-icon-line-bottom")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.NavbarButton>
      </_Builtin.Block>
    </_Component>
  );
}
