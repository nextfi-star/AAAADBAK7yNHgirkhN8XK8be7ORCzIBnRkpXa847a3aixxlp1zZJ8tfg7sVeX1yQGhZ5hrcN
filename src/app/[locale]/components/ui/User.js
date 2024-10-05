import React from "react";

export const User = ({ color }) => {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M31.5652 31.9999C31.3252 31.9999 31.1304 31.8137 31.1304 31.5843C31.1304 26.7717 27.0348 22.8568 22 22.8568C16.9652 22.8568 12.8696 26.7717 12.8696 31.5843C12.8696 31.8137 12.6748 31.9999 12.4348 31.9999C12.1948 31.9999 12 31.8137 12 31.5843C12 26.3137 16.4861 22.0256 22 22.0256C27.5139 22.0256 32 26.3129 32 31.5843C32 31.8137 31.8052 31.9999 31.5652 31.9999Z"
        fill={color}
      />
      <path
        d="M22.0014 21.1428C19.3648 21.1428 17.2188 19.0923 17.2188 16.5713C17.2188 14.0503 19.3648 11.9998 22.0014 11.9998C24.6379 11.9998 26.784 14.0503 26.784 16.5713C26.784 19.0923 24.6379 21.1428 22.0014 21.1428ZM22.0014 12.8309C19.844 12.8309 18.0883 14.5091 18.0883 16.5713C18.0883 18.6335 19.844 20.3116 22.0014 20.3116C24.1587 20.3116 25.9144 18.6335 25.9144 16.5713C25.9144 14.5091 24.1587 12.8309 22.0014 12.8309Z"
        fill={color}
      />
    </svg>
  );
};
