import React, { useState } from "react";
import styles from "../styles/Home.module.css";

const copy = <i className="far fa-copy"></i>;

function ListItem({ rgb, hex }) {
  const [copied, setCopied] = useState(false);

  // Copy to clipboard
  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
  };

  return (
    <li className={ styles.colorName } style={ { background: rgb } }>
      <span
        onClick={ () => {
          copyToClipboard(hex);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        } }
      >
        { copied ? "Copied!" : hex } { copy }
      </span>
    </li>
  );
}

export default ListItem;
