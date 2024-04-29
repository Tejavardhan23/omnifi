"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SectionAboutComp.module.css";

export function SectionAboutComp({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "section-about")} tag="section">
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "padding-global",
          "padding-section-large"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "relative-about")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "about-bg-line")}
            id={_utils.cx(
              _styles,
              "w-node-_55f2b220-cb25-417b-8e65-8465e8af7ccf-e8af7ccc"
            )}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65f73f4482267139b97c985c_Vector%2017%20(1).svg"
          />
          <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "about-wrap")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "about-image-wrap")}
                id={_utils.cx(
                  _styles,
                  "w-node-_55f2b220-cb25-417b-8e65-8465e8af7cd2-e8af7ccc"
                )}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "about-image-bg")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65f281a72f093ed930b5e193_Rectangle%2014.webp"
                />
                <_Builtin.Image
                  className={_utils.cx(_styles, "about-image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65f2822feaed8d7b267d73e0_Rectangle%207.webp"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "mb-text-align-center")}
                id={_utils.cx(
                  _styles,
                  "w-node-_55f2b220-cb25-417b-8e65-8465e8af7cd5-e8af7ccc"
                )}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "h2-omnifi")}
                  tag="h2"
                >
                  {"About Omnifi Protocol"}
                </_Builtin.Heading>
                <_Builtin.Block
                  className={_utils.cx(_styles, "spacer-large")}
                  tag="div"
                />
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "max-width-medium")}
                >
                  {
                    "Omnifi is a Bitcoin Defi Protocol, providing easy access to multiple chains eliminating the necessity for wrapped/synthetic alternatives, delivering secure and optimized trading solutions, enabling users to access fragmented liquidity seamlessly."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
