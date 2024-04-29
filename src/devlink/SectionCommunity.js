"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SectionCommunity.module.css";

export function SectionCommunity({ as: _Component = _Builtin.Block }) {
  return (
    <_Component tag="section">
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "padding-global",
          "padding-section-medium"
        )}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "accelerate-wrap")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "cool-head")}
              tag="h3"
            >
              {"Join our Community"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer-large")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "social-all-wrapper")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "social-wrap-container")}
                button={false}
                block="inline"
                options={{
                  href: "https://t.me/Omnifiprotocol",
                  target: "_blank",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "social-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "gradient")}
                    tag="div"
                  />
                  <_Builtin.Block tag="div">
                    <_Builtin.Image
                      className={_utils.cx(_styles, "social-image")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65f2a5de4475cceceb74f00b_3d%20icon%20x%20twitter%20(1).webp"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "spacer-custom")}
                    tag="div"
                  />
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "text-size-medium")}
                  >
                    {"Join Telegram"}
                    <br />
                  </_Builtin.Paragraph>
                  <_Builtin.Image
                    className={_utils.cx(_styles, "social-bg")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65f2a23b8271b5b81f8c9fc1_Rectangle%2014%20(1).webp"
                  />
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "social-wrap-container")}
                button={false}
                block="inline"
                options={{
                  href: "https://discord.gg/eHqHsn7WRb",
                  target: "_blank",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "social-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "gradient")}
                    tag="div"
                  />
                  <_Builtin.Image
                    className={_utils.cx(_styles, "social-bg")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65f2a23b8271b5b81f8c9fc1_Rectangle%2014%20(1).webp"
                  />
                  <_Builtin.Block tag="div">
                    <_Builtin.Image
                      className={_utils.cx(_styles, "social-image")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65f2a5dd9e6211e5ba5555b7_3d%20icon%20x%20twitter.webp"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "spacer-custom")}
                    tag="div"
                  />
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "text-size-medium")}
                  >
                    {"Join Discord"}
                    <br />
                  </_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "social-wrap-container")}
                button={false}
                block="inline"
                options={{
                  href: "https://x.com/omnifi_protocol",
                  target: "_blank",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "social-wrap")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "gradient")}
                    tag="div"
                  />
                  <_Builtin.Image
                    className={_utils.cx(_styles, "social-bg")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65f2a23b8271b5b81f8c9fc1_Rectangle%2014%20(1).webp"
                  />
                  <_Builtin.Block tag="div">
                    <_Builtin.Image
                      className={_utils.cx(_styles, "social-image")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65f2a5ddc28deb06b163424a_3d%20icon%20x%20twitter%20(2).webp"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "spacer-custom")}
                    tag="div"
                  />
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "text-size-medium")}
                  >
                    {"Follow us on Twitter"}
                    <br />
                  </_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
