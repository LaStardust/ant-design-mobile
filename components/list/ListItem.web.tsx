/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import classNames from 'classnames';
import Touchable from 'rc-touchable';
import { ListItemProps, BriefProps } from './PropsType';

export class Brief extends React.Component<BriefProps, any> {
  render() {
    return (
      <div className="am-list-brief" style={this.props.style}>{this.props.children}</div>
    );
  }
}

class ListItem extends React.Component<ListItemProps, any> {
  static defaultProps = {
    prefixCls: 'am-list',
    align: 'middle',
    error: false,
    multipleLine: false,
    wrap: false,
  };

  static Brief = Brief;

  render() {

    const {
      prefixCls, className, activeStyle, error, align, wrap, disabled,
      children, multipleLine, thumb, extra, arrow, onClick, ...restProps} = this.props;

    const wrapCls = {
      [className as string]: className,
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-disabled`]: disabled,
      [`${prefixCls}-item-error`]: error,
      [`${prefixCls}-item-top`]: align === 'top',
      [`${prefixCls}-item-middle`]: align === 'middle',
      [`${prefixCls}-item-bottom`]: align === 'bottom',
    };

    const lineCls = classNames({
      [`${prefixCls}-line`]: true,
      [`${prefixCls}-line-multiple`]: multipleLine,
      [`${prefixCls}-line-wrap`]: wrap,
    });

    const arrowCls = classNames({
      [`${prefixCls}-arrow`]: true,
      [`${prefixCls}-arrow-horizontal`]: arrow === 'horizontal',
      [`${prefixCls}-arrow-vertical`]: arrow === 'down' || arrow === 'up',
      [`${prefixCls}-arrow-vertical-up`]: arrow === 'up',
    });

    const content = <div
      {...restProps}
      className={classNames(wrapCls)}
    >
      {thumb ? <div className={`${prefixCls}-thumb`}>
        {typeof thumb === 'string' ? <img src={thumb} /> : thumb}
      </div> : null}
      <div className={lineCls}>
        {children !== undefined && <div className={`${prefixCls}-content`}>{children}</div>}
        {extra !== undefined && <div className={`${prefixCls}-extra`}>{extra}</div>}
        {arrow && <div className={arrowCls} />}
      </div>
    </div>;

    return (
      <Touchable
        disabled={disabled || !onClick}
        onPress={onClick}
        activeStyle={activeStyle}
        activeClassName={`${prefixCls}-item-active`}
      >
        {content}
      </Touchable>
    );
  }
}

export default ListItem;
