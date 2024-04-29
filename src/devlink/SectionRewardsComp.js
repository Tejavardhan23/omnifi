"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SectionRewardsComp.module.css";

export function SectionRewardsComp({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "section_rewards")} tag="section">
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "relative-rewards")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer-xlarge")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "cool-content-wrap", "rewards")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "cool-image-wrap")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "reward-image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65fdb6f8456e91a60dc8be9c_rewards-img-rw.webp"
                />
              </_Builtin.Block>
              <_Builtin.Block tag="div">
                <_Builtin.Heading tag="h3">{"Earn rewards"}</_Builtin.Heading>
                <_Builtin.Block
                  className={_utils.cx(_styles, "spacer-medium")}
                  tag="div"
                />
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "max-width-small")}
                >
                  {
                    "Provide liquidity to the staking and liquidity pools, to earn rewards and aridrops."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Image
            className={_utils.cx(_styles, "line-reward-bg")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65f7b8b6cb837c2310bf3032_Vector%2012.svg"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
