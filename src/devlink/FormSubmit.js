"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./FormSubmit.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-91":{"id":"e-91","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-92"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"adec3e3c-cddf-71d3-85a2-631a208da6ea","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"adec3e3c-cddf-71d3-85a2-631a208da6ea","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711461148379},"e-94":{"id":"e-94","name":"","animationType":"custom","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-93"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711461308857},"e-113":{"id":"e-113","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-31","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-114"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"eacd0bea-dec5-bb49-dace-9d1a68272936","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"eacd0bea-dec5-bb49-dace-9d1a68272936","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711465996532},"e-115":{"id":"e-115","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-116"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button.launchapp","originalId":"f3198e58-ec79-ad0b-0c50-1dd26a2033f0","appliesTo":"CLASS"},"targets":[{"selector":".button.launchapp","originalId":"f3198e58-ec79-ad0b-0c50-1dd26a2033f0","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711467964340},"e-117":{"id":"e-117","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-32","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-118"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f4d7f557-822d-5a4e-c85d-ae00a729a278","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f4d7f557-822d-5a4e-c85d-ae00a729a278","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711479717434},"e-119":{"id":"e-119","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-33","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-120"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f4d7f557-822d-5a4e-c85d-ae00a729a262","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f4d7f557-822d-5a4e-c85d-ae00a729a262","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1711479728064}},"actionLists":{"a-25":{"id":"a-25","title":"form-pop-up-close","actionItemGroups":[{"actionItems":[{"id":"a-25-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".pop-up-wrapper","selectorGuids":["69b1c084-c085-b231-83f1-a133a289a108"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1711461155562},"a-26":{"id":"a-26","title":"popup-open-delay","actionItemGroups":[{"actionItems":[{"id":"a-26-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"adec3e3c-cddf-71d3-85a2-631a208da6d7"},"value":"none"}}]},{"actionItems":[{"id":"a-26-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":5000,"easing":"","duration":0,"target":{"id":"adec3e3c-cddf-71d3-85a2-631a208da6d7"},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1711461323289},"a-30":{"id":"a-30","title":"popup-open-delay 2","actionItemGroups":[{"actionItems":[{"id":"a-30-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"id":"6602e4d4b78d3b0f0a69f37b|adec3e3c-cddf-71d3-85a2-631a208da6d7"},"value":"none"}}]},{"actionItems":[{"id":"a-30-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":5000,"easing":"","duration":0,"target":{"id":"6602e4d4b78d3b0f0a69f37b|adec3e3c-cddf-71d3-85a2-631a208da6d7"},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1711461323289},"a-31":{"id":"a-31","title":"form-pop-up-close 2","actionItemGroups":[{"actionItems":[{"id":"a-31-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".pop-up-wrapper","selectorGuids":["69b1c084-c085-b231-83f1-a133a289a108"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1711461155562},"a-19":{"id":"a-19","title":"nav-connect","actionItemGroups":[{"actionItems":[{"id":"a-19-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".swap-wallet-wrapper-connect","selectorGuids":["cd0c4d94-4b28-0e8a-6075-491fe3bb7c6e"]},"value":"none"}}]},{"actionItems":[{"id":"a-19-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".swap-wallet-wrapper-connect","selectorGuids":["cd0c4d94-4b28-0e8a-6075-491fe3bb7c6e"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1711123768898},"a-32":{"id":"a-32","title":"form-pop-up-close 3","actionItemGroups":[{"actionItems":[{"id":"a-32-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".pop-up-wrapper","selectorGuids":["69b1c084-c085-b231-83f1-a133a289a108"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1711461155562},"a-33":{"id":"a-33","title":"form-submit","actionItemGroups":[{"actionItems":[{"id":"a-33-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".pop-up-wrapper","selectorGuids":["69b1c084-c085-b231-83f1-a133a289a108"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1711479731195}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FormSubmit({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "pop-up-wrapper")}
      data-w-id="adec3e3c-cddf-71d3-85a2-631a208da6d7"
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "pop-up")} tag="div">
        <_Builtin.Image
          loading="eager"
          width="auto"
          height="auto"
          alt="omnifi protocol logo"
          src="https://uploads-ssl.webflow.com/65f1e45467f81fe186575a2a/65fe9f79a8be02b905a86205_omnifi%20protocol%20logo.svg"
        />
        <_Builtin.FormWrapper
          className={_utils.cx(_styles, "popup-form-wrapper")}
        >
          <_Builtin.FormForm
            className={_utils.cx(_styles, "popup-form")}
            name="email-form-2"
            data-name="Email Form 2"
            action="https://formsubmit.co/arun@omnifiprotocol.com"
            method="post"
            id="email-form-2"
          >
            <_Builtin.FormBlockLabel htmlFor="name-6">
              {"Email"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextInput
              className={_utils.cx(_styles, "email-field")}
              autoFocus={false}
              maxLength={256}
              name="name-5"
              data-name="Name 5"
              placeholder="email"
              type="text"
              disabled={false}
              required={false}
              id="name-5"
            />
            <_Builtin.FormButton
              className={_utils.cx(_styles, "button", "popup")}
              type="submit"
              value="Submit"
              data-wait="Please wait..."
            />
            <_Builtin.HtmlEmbed value="%3Cinput%20type%3D%22hidden%22%20name%3D%22_next%22%20value%3D%22https%3A%2F%2Fomnifiprotocol.com%2F%2Fthank-you%22%3E" />
          </_Builtin.FormForm>
          <_Builtin.FormSuccessMessage>
            <_Builtin.Block tag="div">
              {"Thank you! Your submission has been received!"}
            </_Builtin.Block>
          </_Builtin.FormSuccessMessage>
          <_Builtin.FormErrorMessage>
            <_Builtin.Block tag="div">
              {"Oops! Something went wrong while submitting the form."}
            </_Builtin.Block>
          </_Builtin.FormErrorMessage>
        </_Builtin.FormWrapper>
        <_Builtin.Block tag="div">
          {"Already a member? "}
          <_Builtin.Link
            className={_utils.cx(_styles, "lear-more")}
            button={false}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Signin"}
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.NotSupported _atom="DOM" />
      </_Builtin.Block>
    </_Component>
  );
}
