import { parsePickerAndListFieldOptions } from '../../utils/parseFormOptions';

const renderPicker = (ctx, node) => {
  const { top, left, width, height } = node.box || {};

  // Element's name
  const name = node.props?.name || '';

  if (!ctx._root.data.AcroForm) {
    ctx.initForm();
  }

  ctx.picker(
    name,
    left,
    top,
    width,
    height,
    parsePickerAndListFieldOptions(node),
  );
};

export default renderPicker;
