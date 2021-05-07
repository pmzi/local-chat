/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
function openLink(e) {
  const { currentTarget: { href } } = e;

  e.preventDefault();

  if (!href) return;

  window.utility.openExternalLink(href);
}

export default function ExternalLink({ children, ...props }) {
  return (
    <a
      {...props}
      onClick={openLink}
    >
      {children}
    </a>
  );
}
