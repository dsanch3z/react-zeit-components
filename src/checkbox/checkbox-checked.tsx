import * as React from "react";

export default () => (
  <svg width={12} height={12}>
    <defs>
      <rect id="prefix__a" width={12} height={12} rx={3} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="prefix__b" fill="#fff">
        <use xlinkHref="#prefix__a" />
      </mask>
      <use fill="#000" xlinkHref="#prefix__a" />
      <path
        stroke="#FFF"
        strokeWidth={1.5}
        mask="url(#prefix__b)"
        d="M3.54 4.791l3.15 3.098L15.12-.543"
      />
    </g>
  </svg>
);
