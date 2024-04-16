import { forwardRef, ButtonHTMLAttributes } from 'react'

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & { isActive: boolean } 
>((props, ref) => {
  const { children, className = '', isActive, ...rest } = props

  return (
    <button
      ref={ref}
      className={`
        px-3 py-[6px] border-2 rounded-md 
        ${className} 
        ${rest.disabled ? 'opacity-50' : ''}
        ${isActive ? 'border-green-600' : 'border-gray-400'} // Apply active class based on isActive prop
      `}
      {...rest}
    >
      <span className={`${isActive ? 'text-green-600' : 'text-gray-700'}`}> {}
        {children}
      </span>
    </button>
  )
});
