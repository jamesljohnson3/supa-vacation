/* eslint-disable react/no-unknown-property */
import * as React from "react";
import { useUser, useClerk } from '@clerk/clerk-react';

export default function MyComponent() {
    const { id, username, primaryEmailAddress, unsafeMetadata, publicMetadata, 	privateMetadata, profileImageUrl, fullName, firstName, lastName } = useUser();

  return (
    <>
      <div className="div" >
        <section className="section">
          <div className="div-2">
            <div className="div-3">
              <div className="div-4">
                <div className="div-5">Invoices (last 30 days)</div>
                <div className="div-6">
                  <div className="div-7">{lastName}</div>
                  <a
                    data-test-invoices-overview-card-link=""
                    data-ember-action=""
                    data-ember-action-3295="3295"
                    className="a"
                  >
                 {primaryEmailAddress.toString()}
                  </a>
<form
            data-hs-cf-bound="true"
            action="https://hook.us1.make.com/ev98nkavwxy8n0vr3wab8ab08ztbayea"
            className="form"
          >
            <input
              type="hidden"
              name="email"
              placeholder="Enter your work email"
              className="input"
              value={primaryEmailAddress}

            /><br></br>
            <button className="button">Pay Now</button>
          </form>
                </div>
                <div className="div-8">
                  <div className="div-9">
                    <span className="span">{firstName}</span>
                    <div className="div-10">
                      <span className="span-2">Cancel my plan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        .div {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 0px;
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 20px;
          padding-bottom: 20px;
          min-height: 100px;
        }
        .section {
          width: 100%;
          align-self: stretch;
          flex-grow: 1;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          margin-left: auto;
          margin-right: auto;
        }
        .div-2 {
          display: flex;
          flex-direction: column;
          position: relative;
          height: 200px;
          margin-left: auto;
          margin-right: auto;
        }
        .div-3 {
          border-bottom: 0px;
          border-bottom-color: rgb(26, 26, 26);
          border-color: rgb(26, 26, 26);
          border-left: 0px;
          border-left-color: rgb(26, 26, 26);
          border-right: 0px;
          border-right-color: rgb(26, 26, 26);
          border-top: 0px;
          border-top-color: rgb(26, 26, 26);
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 14px;
          line-height: 22px;
          block-size: 156.562px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          inline-size: 371px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 185.5px 78.2812px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 185.5px 78.2812px;
        }
        .div-4 {
          border-bottom: 1px solid rgb(247, 247, 247);
          border-bottom-color: rgb(247, 247, 247);
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-color: rgb(247, 247, 247);
          border-left: 1px solid rgb(247, 247, 247);
          border-left-color: rgb(247, 247, 247);
          border-left-style: solid;
          border-left-width: 1px;
          border-right: 1px solid rgb(247, 247, 247);
          border-right-color: rgb(247, 247, 247);
          border-right-style: solid;
          border-right-width: 1px;
          border-style: solid;
          border-top: 1px solid rgb(247, 247, 247);
          border-top-color: rgb(247, 247, 247);
          border-top-style: solid;
          border-top-width: 1px;
          border-width: 1px;
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 14px;
          line-height: 22px;
          padding-bottom: 24px;
          padding-left: 24px;
          padding-right: 24px;
          padding-top: 24px;
          background-color: rgb(255, 255, 255);
          block-size: 156.562px;
          border-block: 1px solid rgb(247, 247, 247);
          border-block-color: rgb(247, 247, 247);
          border-block-end: 1px solid rgb(247, 247, 247);
          border-block-end-color: rgb(247, 247, 247);
          border-block-end-style: solid;
          border-block-end-width: 1px;
          border-block-start: 1px solid rgb(247, 247, 247);
          border-block-start-color: rgb(247, 247, 247);
          border-block-start-style: solid;
          border-block-start-width: 1px;
          border-block-style: solid;
          border-block-width: 1px;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          border-end-end-radius: 8px;
          border-end-start-radius: 8px;
          border-inline: 1px solid rgb(247, 247, 247);
          border-inline-color: rgb(247, 247, 247);
          border-inline-end: 1px solid rgb(247, 247, 247);
          border-inline-end-color: rgb(247, 247, 247);
          border-inline-end-style: solid;
          border-inline-end-width: 1px;
          border-inline-start: 1px solid rgb(247, 247, 247);
          border-inline-start-color: rgb(247, 247, 247);
          border-inline-start-style: solid;
          border-inline-start-width: 1px;
          border-inline-style: solid;
          border-inline-width: 1px;
          border-radius: 8px;
          border-start-end-radius: 8px;
          border-start-start-radius: 8px;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px,
            rgba(0, 0, 0, 0.1) 0px 0px 4px 0px;
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          inline-size: 371px;
          outline-color: rgb(26, 26, 26);
          overflow: auto;
          overflow-x: auto;
          overflow-y: auto;
          padding: 24px;
          padding-block: 24px;
          padding-block-end: 24px;
          padding-block-start: 24px;
          padding-inline: 24px;
          padding-inline-end: 24px;
          padding-inline-start: 24px;
          perspective-origin: 185.5px 78.2812px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 185.5px 78.2812px;
        }
        .div-5 {
          border-bottom: 0px;
          border-bottom-color: rgb(179, 179, 179);
          border-color: rgb(179, 179, 179);
          border-left: 0px;
          border-left-color: rgb(179, 179, 179);
          border-right: 0px;
          border-right-color: rgb(179, 179, 179);
          border-top: 0px;
          border-top-color: rgb(179, 179, 179);
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 12px;
          line-height: 18.8571px;
          block-size: 18.8516px;
          border-block-color: rgb(179, 179, 179);
          border-block-end-color: rgb(179, 179, 179);
          border-block-start-color: rgb(179, 179, 179);
          border-inline-color: rgb(179, 179, 179);
          border-inline-end-color: rgb(179, 179, 179);
          border-inline-start-color: rgb(179, 179, 179);
          caret-color: rgb(179, 179, 179);
          color: rgb(179, 179, 179);
          column-rule-color: rgb(179, 179, 179);
          inline-size: 321px;
          outline-color: rgb(179, 179, 179);
          perspective-origin: 160.5px 9.42188px;
          text-decoration: none solid rgb(179, 179, 179);
          text-decoration-color: rgb(179, 179, 179);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 160.5px 9.42578px;
        }
        .div-6 {
          border-bottom: 0px;
          border-bottom-color: rgb(26, 26, 26);
          border-color: rgb(26, 26, 26);
          border-left: 0px;
          border-left-color: rgb(26, 26, 26);
          border-right: 0px;
          border-right-color: rgb(26, 26, 26);
          border-top: 0px;
          border-top-color: rgb(26, 26, 26);
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 14px;
          line-height: 22px;
          block-size: 26px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          display: flex;
          inline-size: 321px;
          justify-content: space-between;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 160.5px 13px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 160.5px 13px;
        }
        .div-7 {
          border-bottom: 0px;
          border-bottom-color: rgb(26, 26, 26);
          border-color: rgb(26, 26, 26);
          border-left: 0px;
          border-left-color: rgb(26, 26, 26);
          border-right: 0px;
          border-right-color: rgb(26, 26, 26);
          border-top: 0px;
          border-top-color: rgb(26, 26, 26);
          font-family: "Square Sans Display VF", "Square Sans Display",
            Helvetica, Arial, sans-serif;
          font-size: 18px;
          font-weight: 700;
          line-height: 26px;
          block-size: 26px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          inline-size: 34.4922px;
          margin-inline-end: 8px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 17.2422px 13px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 17.2461px 13px;
        }
        .a {
          color: rgb(0, 90, 217);
          text-decoration: none rgb(0, 90, 217);
          text-decoration-color: rgb(0, 90, 217);
          border-bottom: 0px;
          border-bottom-color: rgb(0, 90, 217);
          border-color: rgb(0, 90, 217);
          border-left: 0px;
          border-left-color: rgb(0, 90, 217);
          border-right: 0px;
          border-right-color: rgb(0, 90, 217);
          border-top: 0px;
          border-top-color: rgb(0, 90, 217);
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 14px;
          line-height: 22px;
          block-size: 26px;
          border-block-color: rgb(0, 90, 217);
          border-block-end-color: rgb(0, 90, 217);
          border-block-start-color: rgb(0, 90, 217);
          border-inline-color: rgb(0, 90, 217);
          border-inline-end-color: rgb(0, 90, 217);
          border-inline-start-color: rgb(0, 90, 217);
          caret-color: rgb(0, 90, 217);
          column-rule-color: rgb(0, 90, 217);
          cursor: pointer;
          display: block;
          height: 26px;
          inline-size: 30.1172px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(0, 90, 217);
          perspective-origin: 15.0547px 13px;
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 15.0586px 13px;
        }
        .div-8 {
          border-bottom: 0px;
          border-bottom-color: rgb(26, 26, 26);
          border-color: rgb(26, 26, 26);
          border-left: 0px;
          border-left-color: rgb(26, 26, 26);
          border-right: 0px;
          border-right-color: rgb(26, 26, 26);
          border-top: 0px;
          border-top-color: rgb(26, 26, 26);
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 14px;
          line-height: 22px;
          margin-top: 24px;
          block-size: 37.7109px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          inline-size: 321px;
          margin-block-start: 24px;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 160.5px 18.8516px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 160.5px 18.8555px;
        }
        .div-9 {
          border-bottom: 0px;
          border-bottom-color: rgb(26, 26, 26);
          border-color: rgb(26, 26, 26);
          border-left: 0px;
          border-left-color: rgb(26, 26, 26);
          border-right: 0px;
          border-right-color: rgb(26, 26, 26);
          border-top: 0px;
          border-top-color: rgb(26, 26, 26);
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 14px;
          line-height: 22px;
          align-items: baseline;
          block-size: 37.7109px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          display: flex;
          inline-size: 321px;
          justify-content: space-between;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 160.5px 18.8516px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 160.5px 18.8555px;
        }
        .span {
          border-bottom: 0px;
          border-bottom-color: rgb(26, 26, 26);
          border-color: rgb(26, 26, 26);
          border-left: 0px;
          border-left-color: rgb(26, 26, 26);
          border-right: 0px;
          border-right-color: rgb(26, 26, 26);
          border-top: 0px;
          border-top-color: rgb(26, 26, 26);
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 24px;
          font-weight: 600;
          line-height: 37.7143px;
          block-size: 37.7109px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          display: block;
          inline-size: 95.375px;
          margin-inline-end: 8px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 47.6875px 18.8516px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 47.6875px 18.8555px;
        }
        .div-10 {
          border-bottom: 0px;
          border-bottom-color: rgb(26, 26, 26);
          border-color: rgb(26, 26, 26);
          border-left: 0px;
          border-left-color: rgb(26, 26, 26);
          border-right: 0px;
          border-right-color: rgb(26, 26, 26);
          border-top: 0px;
          border-top-color: rgb(26, 26, 26);
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 14px;
          line-height: 22px;
          block-size: 22px;
          border-block-color: rgb(26, 26, 26);
          border-block-end-color: rgb(26, 26, 26);
          border-block-start-color: rgb(26, 26, 26);
          border-inline-color: rgb(26, 26, 26);
          border-inline-end-color: rgb(26, 26, 26);
          border-inline-start-color: rgb(26, 26, 26);
          caret-color: rgb(26, 26, 26);
          color: rgb(26, 26, 26);
          column-rule-color: rgb(26, 26, 26);
          inline-size: 90.9922px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(26, 26, 26);
          perspective-origin: 45.4922px 11px;
          text-decoration: none solid rgb(26, 26, 26);
          text-decoration-color: rgb(26, 26, 26);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 45.4961px 11px;
        }
        .span-2 {
          border-bottom: 0px;
          border-bottom-color: rgb(0, 178, 59);
          border-color: rgb(0, 178, 59);
          border-left: 0px;
          border-left-color: rgb(0, 178, 59);
          border-right: 0px;
          border-right-color: rgb(0, 178, 59);
          border-top: 0px;
          border-top-color: rgb(0, 178, 59);
          font-family: "Square Sans Text VF", "Square Sans Text", Helvetica,
            Arial, sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 18.8571px;
          border-block-color: rgb(0, 178, 59);
          border-block-end-color: rgb(0, 178, 59);
          border-block-start-color: rgb(0, 178, 59);
          border-inline-color: rgb(0, 178, 59);
          border-inline-end-color: rgb(0, 178, 59);
          border-inline-start-color: rgb(0, 178, 59);
          caret-color: rgb(0, 178, 59);
          color: rgb(0, 178, 59);
          column-rule-color: rgb(0, 178, 59);
          outline-color: rgb(0, 178, 59);
          perspective-origin: 0px 0px;
          text-decoration: none solid rgb(0, 178, 59);
          text-decoration-color: rgb(0, 178, 59);
          text-rendering: optimizelegibility;
          text-size-adjust: 100%;
          transform-origin: 0px 0px;
          white-space: nowrap;
        }
      `}</style>
    </>
  );
}
