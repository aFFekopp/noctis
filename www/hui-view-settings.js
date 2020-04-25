customElements.whenDefined("hui-view").then( () => {
  const HuiView = customElements.get("hui-view").prototype;
  const oldRenderStyles = HuiView.renderStyles;
  HuiView.renderStyles = function() {
    let original = oldRenderStyles();
    original.strings = [original.strings[0] + `
    <style>
      .column {
        overflow: unset !important;
        padding-left: 9px;
        padding-right: 9px;
        padding-bottom: 9px;
      }
    </style>
    `];
    return original;
  }
});