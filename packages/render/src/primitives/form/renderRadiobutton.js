import { parseRadioButtonOptions } from '../../utils/parseFormOptions';

const renderRadioButton = (ctx, node, options = {}) => {
  const { top, left, width, height } = node.box || {};

  const name = node.props?.name || '';
  const formFieldOptions = options.formFields?.at(0);

  if (!ctx._root.data.AcroForm) {
    ctx.initForm();
  }

  ctx.formRadioButton(
    name,
    left,
    top,
    width,
    height,
    parseRadioButtonOptions(node, formFieldOptions),
  );
};

export default renderRadioButton;
