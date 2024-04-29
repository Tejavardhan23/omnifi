"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "footer_component")} tag="footer">
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "padding-global",
          "padding-section-small"
        )}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
          <_Builtin.Block tag="div">
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "padding-bottom",
                "padding-xxlarge"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "footer_top-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer_left-wrapper")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "logo-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "footer-logo")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="omnifi protocol logo"
                      src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65fe9f79a8be02b905a86205_omnifi%20protocol%20logo.svg"
                    />
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "footer_menu-wrapper")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_7bcc3285-d04c-6d65-9cb1-e950c61137dd-3462eb7d"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "footer_link-list")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-text")}
                      tag="div"
                    >
                      {"Services"}
                    </_Builtin.Block>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer_link",
                        "text-color-grey"
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Swap"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer_link",
                        "text-color-grey",
                        "hide"
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Pool"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer_link",
                        "text-color-grey",
                        "hide"
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Stake"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer_link",
                        "text-color-grey"
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"IDO"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "footer_link-list")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "footer-text")}
                      tag="div"
                    >
                      {"Help & Docs"}
                    </_Builtin.Block>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer_link",
                        "text-color-grey"
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "mailto:arun@omnifiprotocol.com",
                      }}
                    >
                      {"Contact"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer_link",
                        "text-color-grey"
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "https://x.com/Omnifiprotocol",
                      }}
                    >
                      {"Twitter"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer_link",
                        "text-color-grey"
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "https://discord.gg/eHqHsn7WRb",
                      }}
                    >
                      {"Discord"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer_link",
                        "text-color-grey"
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "https://t.me/Omnifiprotocol",
                      }}
                    >
                      {"Telegram"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "footer_link",
                        "text-color-grey"
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "http://medium.com/@omnifiprotocol",
                        target: "_blank",
                      }}
                    >
                      {"Blog"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block tag="div">
                  <_Builtin.Block tag="div">
                    <_Builtin.Block
                      className={_utils.cx(_styles, "spacer-medium")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-color-grey")}
                      tag="div"
                    >
                      {"@2024 Omnifi Protocol. All rights reserved"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
