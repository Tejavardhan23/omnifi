"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./SectionCoolComp.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-45":{"id":"e-45","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-46"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1710426568919},"e-115":{"id":"e-115","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-116"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.launchapp","originalId":"f3198e58-ec79-ad0b-0c50-1dd26a2033f0","appliesTo":"CLASS"},"targets":[{"selector":".button.launchapp","originalId":"f3198e58-ec79-ad0b-0c50-1dd26a2033f0","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711467964340}},"actionLists":{"a-16":{"id":"a-16","title":"in and out about","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeInOut","duration":3000,"target":{"id":"89c5094a-f71e-79dc-acc6-f749124262e5"},"xValue":1.08,"yValue":1.08,"zValue":null,"locked":true}}]},{"actionItems":[{"id":"a-16-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeInOut","duration":3000,"target":{"id":"89c5094a-f71e-79dc-acc6-f749124262e5"},"xValue":0.92,"yValue":0.92,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1710431088822},"a-19":{"id":"a-19","title":"nav-connect","actionItemGroups":[{"actionItems":[{"id":"a-19-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".swap-wallet-wrapper-connect","selectorGuids":["cd0c4d94-4b28-0e8a-6075-491fe3bb7c6e"]},"value":"none"}}]},{"actionItems":[{"id":"a-19-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".swap-wallet-wrapper-connect","selectorGuids":["cd0c4d94-4b28-0e8a-6075-491fe3bb7c6e"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1711123768898}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SectionCoolComp({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section_cool")} tag="section">
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "padding-global",
          "padding-section-medium"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "relative-cool")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
            <_Builtin.Heading
              className={_utils.cx(_styles, "cool-head")}
              tag="h3"
            >
              {"Coolest DeFi Protocol with the Intersection of Bitcoin and EVM"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer-xxhuge")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "cool-content-wrap")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "cool-image-wrap")}
                id={_utils.cx(
                  _styles,
                  "w-node-_89c5094a-f71e-79dc-acc6-f749124262e4-124262dc"
                )}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "about-image")}
                  data-w-id="89c5094a-f71e-79dc-acc6-f749124262e5"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65f291c91f2b91ff16dc31fd_Rectangle%209.webp"
                />
              </_Builtin.Block>
              <_Builtin.Block tag="div">
                <_Builtin.Block
                  className={_utils.cx(_styles, "cool-content")}
                  tag="div"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "max-width-medium")}
                  >
                    {
                      "Enjoy CEX-like experience while trading across multiple chains with a Dex aggregator."
                    }
                  </_Builtin.Paragraph>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "button")}
                    button={true}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Swap"}
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "spacer-medium")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "cool-content", "second")}
                  tag="div"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "max-width-medium")}
                  >
                    {
                      "Enabling Modular Account Abstraction for BTC wallets, to expereince Gasless transactions and empowering users to pay gas fees with any token."
                    }
                  </_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Image
            className={_utils.cx(_styles, "line-cool-bg")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65f7b5d9a05c1a6291dbab5e_Vector%2037.svg"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
