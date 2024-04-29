"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ConnectWallet.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65f4b816c1f45e764a313f08|7567ccb5-7d10-c9e8-14b2-7d5262f1a188","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65f4b816c1f45e764a313f08|7567ccb5-7d10-c9e8-14b2-7d5262f1a188","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711119577239},"e-79":{"id":"e-79","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-80"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".close","originalId":"5a4bb604-43f5-d017-3431-9b2e1e89cba3","appliesTo":"CLASS"},"targets":[{"selector":".close","originalId":"5a4bb604-43f5-d017-3431-9b2e1e89cba3","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711124381539},"e-115":{"id":"e-115","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-116"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.launchapp","originalId":"f3198e58-ec79-ad0b-0c50-1dd26a2033f0","appliesTo":"CLASS"},"targets":[{"selector":".button.launchapp","originalId":"f3198e58-ec79-ad0b-0c50-1dd26a2033f0","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711467964340}},"actionLists":{"a-19":{"id":"a-19","title":"nav-connect","actionItemGroups":[{"actionItems":[{"id":"a-19-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".swap-wallet-wrapper-connect","selectorGuids":["cd0c4d94-4b28-0e8a-6075-491fe3bb7c6e"]},"value":"none"}}]},{"actionItems":[{"id":"a-19-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".swap-wallet-wrapper-connect","selectorGuids":["cd0c4d94-4b28-0e8a-6075-491fe3bb7c6e"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1711123768898},"a-20":{"id":"a-20","title":"close-wallet","actionItemGroups":[{"actionItems":[{"id":"a-20-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".swap-wallet-wrapper-connect","selectorGuids":["cd0c4d94-4b28-0e8a-6075-491fe3bb7c6e"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1711124389143}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ConnectWallet({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "swap-wallet-wrapper-connect")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "swap-wallet-wrapper-connect-wrap")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "connect-head")}
          tag="div"
        >
          {"Connect to a wallet"}
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "out-grad")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "connectwal-wrap")}
            tag="div"
          >
            <_Builtin.Block tag="div">{"Xdefi Wallet"}</_Builtin.Block>
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65fd84e37c7cfef25cf02794_connect-1.svg"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "out-grad")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "connectwal-wrap")}
            tag="div"
          >
            <_Builtin.Block tag="div">{"OKX wallet"}</_Builtin.Block>
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65fd88f3275685d6e0826c74_connect2.svg"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "out-grad")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "connectwal-wrap")}
            tag="div"
          >
            <_Builtin.Block tag="div">{"Metamask"}</_Builtin.Block>
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65fd8903777510929eebf184_connect3.svg"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "out-grad")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "connectwal-wrap")}
            tag="div"
          >
            <_Builtin.Block tag="div">{"Wallet Connect"}</_Builtin.Block>
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65fd8913ca9fba97317e1c38_connect4.svg"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block tag="div">
          {"New to Ethereum? "}
          <_Builtin.Link
            className={_utils.cx(_styles, "lear-more")}
            button={false}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Learn more about wallets"}
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "close")}
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.NotSupported _atom="DOM" />
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
