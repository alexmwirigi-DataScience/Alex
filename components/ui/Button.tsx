import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', href, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-all duration-300 ease-out tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-charcoal disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-charcoal text-ivory hover:bg-stone-800 border border-transparent",
    outline: "bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-ivory",
    text: "bg-transparent text-charcoal hover:text-muted-steel p-0 underline-offset-4 hover:underline"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;