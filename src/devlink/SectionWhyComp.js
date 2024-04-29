"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SectionWhyComp.module.css";

export function SectionWhyComp({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "section_why")} tag="section">
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "padding-global",
          "padding-section-large"
        )}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
          <_Builtin.Heading
            className={_utils.cx(_styles, "whydefi-head")}
            tag="h2"
          >
            {"Intent centric DeFi"}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "snu-wrapper")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "svg-image")}
              id={_utils.cx(
                _styles,
                "w-node-bc57a44d-177f-5384-4a83-28344dfb9219-4dfb9213"
              )}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65f72319ade737a64b5f40b7_bottom-svg.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "snu-content-wrap")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "h3-bitcoin")}
                tag="h3"
              >
                {"Native Asset Transfers"}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "highlighter", "security")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "snu-content")}
                tag="div"
              >
                {
                  "Experience seamless native asset swaps without any slippage and wave goodbye to synthetic alternatives."
                }
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "snu-content-wrap")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "h3-bitcoin")}
                tag="h4"
              >
                {"Bitcoin DeFi, Unbanked"}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "highlighter", "network")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "snu-content")}
                tag="div"
              >
                {
                  "Omnifi enables direct trading of native Bitcoin with other assets in one transaction, users can seamlessly access fragmented liquidity."
                }
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "snu-content-wrap")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "h3-bitcoin")}
                tag="h4"
              >
                {"Break the Barriers"}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "highlighter", "utility")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "snu-content")}
                tag="div"
              >
                {
                  "Omnifi enables to expereince a super liquid swap with gasless transactions & enhancing security by eliminating attack surfaces like relayers and oracles with omnichain contracts."
                }
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "why-bg-text")} tag="div">
        {"OMNIFIDEFI"}
      </_Builtin.Block>
      <_Builtin.Image
        className={_utils.cx(_styles, "why-bg-image")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65f7ba9e044c97db5562cb72_Ellipse%208.svg"
      />
    </_Component>
  );
}
