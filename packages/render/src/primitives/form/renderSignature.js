import { parseSignatureOptions } from '../../utils/parseFormOptions';

const renderSignature = (ctx, node, options = {}) => {
  const { top, left, width, height } = node.box || {};

  const name = node.props?.name || '';
  const formFieldOptions = options.formFields?.at(0);

  if (!ctx._root.data.AcroForm) {
    ctx.initForm();
  }

  ctx.formSignature(
    name,
    left,
    top,
    width,
    height,
    parseSignatureOptions(node, formFieldOptions),
  );
};

export default renderSignature;
