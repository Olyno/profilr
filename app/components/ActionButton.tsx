'use client';

import { Submit } from '@redwoodjs/forms';
import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type Props = {
  className?: string;
  htmlElement?: 'a' | 'button';
  href?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

const ButtonLink: React.FC<PropsWithChildren<Props>> = ({
  type = 'button',
  className = '',
  children,
  href,
  htmlElement = 'button',
}) => {
  const baseClassName =
    'bg-primary text-white px-5 py-3 rounded-md flex justify-center items-center hover:brightness-90';
  const finalClassName = `${className} ${baseClassName}`;

  if (htmlElement === 'a') {
    // Ensure href is not empty for anchor elements
    const anchorHref = href || '#';
    return (
      <a href={anchorHref} className={`${finalClassName} text-center block`}>
        {children}
      </a>
    );
  }

  if (type === 'submit') {
    return <Submit className={finalClassName}>{children}</Submit>;
  }

  return (
    <button type={type} className={finalClassName}>
      {children}
    </button>
  );
};

export default ButtonLink;
