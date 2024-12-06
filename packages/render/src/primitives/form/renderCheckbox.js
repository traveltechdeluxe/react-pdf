import { parseCheckboxOptions } from '../../utils/parseFormOptions';

const renderCheckbox = (ctx, node, options = {}) => {
  const { top, left, width, height } = node.box || {};

  // Element's name
  const name = node.props?.name || '';
  const formFieldOptions = options.formFields?.at(0);

  if (!ctx._root.data.AcroForm) {
    ctx.initForm();
  }

  ctx.formCheckbox(
    name,
    left,
    top,
    width,
    height,
    parseCheckboxOptions(ctx, node, formFieldOptions),
  );
};

export default renderCheckbox;