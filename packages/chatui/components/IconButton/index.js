import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import React from 'react';
import clsx from 'clsx';
import { Button } from '../Button';
import { Icon } from '../Icon';

const _excluded = ['className', 'icon', 'img'];

export var IconButton = function IconButton(props) {
  const { className } = props;
  const { icon } = props;
  const { img } = props;
  const other = _objectWithoutProperties(props, _excluded);

  return /* #__PURE__ */React.createElement(Button, _extends({
    className: clsx('IconBtn', className),
  }, other), icon && /* #__PURE__ */React.createElement(Icon, {
    type: icon,
  }), !icon && img && /* #__PURE__ */React.createElement('img', {
    src: img,
    alt: '',
  }));
};
