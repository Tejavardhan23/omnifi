"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./HeroSectionComp.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-43":{"id":"e-43","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-44"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1710425901175},"e-49":{"id":"e-49","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-50"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1710477644053},"e-115":{"id":"e-115","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-116"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.launchapp","originalId":"f3198e58-ec79-ad0b-0c50-1dd26a2033f0","appliesTo":"CLASS"},"targets":[{"selector":".button.launchapp","originalId":"f3198e58-ec79-ad0b-0c50-1dd26a2033f0","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711467964340}},"actionLists":{"a-7":{"id":"a-7","title":"to and fro","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":3000,"target":{"id":"920354dd-aa93-4fab-d917-14a136b1df98"},"yValue":1.8,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-7-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":3000,"target":{"id":"920354dd-aa93-4fab-d917-14a136b1df98"},"yValue":-3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1710425939970},"a-9":{"id":"a-9","title":"scroll","actionItemGroups":[{"actionItems":[{"id":"a-9-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"swingFromTo","duration":160,"target":{"id":"920354dd-aa93-4fab-d917-14a136b1df84"},"yValue":20,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-9-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"swingFromTo","duration":640,"target":{"id":"920354dd-aa93-4fab-d917-14a136b1df84"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-9-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":"swingFromTo","duration":640,"target":{"id":"920354dd-aa93-4fab-d917-14a136b1df84"},"yValue":-20,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-9-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":"swingFromTo","duration":640,"target":{"id":"920354dd-aa93-4fab-d917-14a136b1df84"},"yValue":-40,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-9-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":"swingFromTo","duration":640,"target":{"id":"920354dd-aa93-4fab-d917-14a136b1df84"},"yValue":-60,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-9-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":"swingFromTo","duration":640,"target":{"id":"920354dd-aa93-4fab-d917-14a136b1df84"},"yValue":-80,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-9-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":1000,"easing":"swingFromTo","duration":1000,"target":{"id":"920354dd-aa93-4fab-d917-14a136b1df84"},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1710477745516},"a-19":{"id":"a-19","title":"nav-connect","actionItemGroups":[{"actionItems":[{"id":"a-19-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".swap-wallet-wrapper-connect","selectorGuids":["cd0c4d94-4b28-0e8a-6075-491fe3bb7c6e"]},"value":"none"}}]},{"actionItems":[{"id":"a-19-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".swap-wallet-wrapper-connect","selectorGuids":["cd0c4d94-4b28-0e8a-6075-491fe3bb7c6e"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1711123768898}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HeroSectionComp({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section_hero")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "hero-bg")}
        loading="eager"
        width="auto"
        height="auto"
        alt=""
        src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/6602e2aa2d8465fca6711460_hero-webp.webp"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
          <_Builtin.Block className={_utils.cx(_styles, "hero-grid")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "hero-main-content")}
              id={_utils.cx(
                _styles,
                "w-node-_920354dd-aa93-4fab-d917-14a136b1df80-36b1df7b"
              )}
              tag="div"
            >
              <_Builtin.Heading tag="h1">
                {"Intent centric Bitcoin"}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "scrool-text-wrap")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "helper")}
                  data-w-id="920354dd-aa93-4fab-d917-14a136b1df84"
                  tag="div"
                >
                  <_Builtin.Heading tag="h1">
                    <_Builtin.Span
                      className={_utils.cx(_styles, "gradient-text")}
                    >
                      {"Defi Protocol"}
                    </_Builtin.Span>
                  </_Builtin.Heading>
                  <_Builtin.Heading tag="h1">
                    <_Builtin.Span
                      className={_utils.cx(_styles, "gradient-text")}
                    >
                      {"Swap"}
                    </_Builtin.Span>
                  </_Builtin.Heading>
                  <_Builtin.Heading tag="h1">
                    <_Builtin.Span
                      className={_utils.cx(_styles, "gradient-text")}
                    >
                      {"IDO"}
                    </_Builtin.Span>
                  </_Builtin.Heading>
                  <_Builtin.Heading tag="h1">
                    <_Builtin.Span
                      className={_utils.cx(_styles, "gradient-text")}
                    >
                      {"Stake"}
                    </_Builtin.Span>
                  </_Builtin.Heading>
                  <_Builtin.Heading tag="h1">
                    <_Builtin.Span
                      className={_utils.cx(_styles, "gradient-text")}
                    >
                      {"DEX"}
                    </_Builtin.Span>
                  </_Builtin.Heading>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "spacer-custom")}
                tag="div"
              />
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "text-size-large")}
              >
                {
                  "Trade like a PRO via single interface through different DEXes and blockchain networks."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "image-wrape")}
              id={_utils.cx(
                _styles,
                "w-node-_920354dd-aa93-4fab-d917-14a136b1df97-36b1df7b"
              )}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "hero-main-image")}
                data-w-id="920354dd-aa93-4fab-d917-14a136b1df98"
                loading="eager"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65f276290a852f82853c4cae_Rectangle%2012.webp"
              />
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65f27b03a2f5da73ed3a08b9_Group%2033971.webp"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "launch-wrap")}
              id={_utils.cx(
                _styles,
                "w-node-_920354dd-aa93-4fab-d917-14a136b1df9a-36b1df7b"
              )}
              tag="div"
            >
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
              <_Builtin.Block
                className={_utils.cx(_styles, "special-text")}
                tag="div"
              >
                {"Powered by Zetachain"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
